import { useState } from 'react';
import Constant from '../Constant'

const Warning = (data ,submit) => {
  const [errors, setErrors] = useState({});
  const [values,setValues]=useState({});
  const intergratedValue=data.map((value)=>{
    return({...value,"error":errors[value.name],"value":values[value.name]});
  })
  
  const  Validate=(value,name,validationStandard,required)=>{
    if( !value && required){
      setErrors({...errors,[name]:" is required"});
    }else{
     if(validationStandard==="name"){
          var notName=value.match(/\d+/g);
          if(notName!==null){
            setErrors({...errors,[name]:" can not include a number"})
          }else{
            setErrors({...errors,[name]:false})
          }
      }else if(validationStandard==="phone"){
          var notPhone=value.match(/\D/g)
          if(notPhone!==null){
            setErrors({...errors,[name]:" can not include character"})
          }else{
            setErrors({...errors,[name]:false})
          }
      }else if(validationStandard==='email'){
        const token=sessionStorage.getItem("jwt");
        if(token){
          fetch(Constant.SERVER.URL+"search/user/by/email?email="+value,{
            method:'GET',
            headers:{
              'Content-Type':'application/json',
              'Authorization':token
              }
          })
          .then(response=>response.text())
          .then(data=>{
            if(data){
              setErrors({...errors,[name]:" address is taken"})
            }
            else{
              setErrors({...errors,[name]:false});}
            })
          .catch(error=>console.error(error));
        }else{
          setErrors({...errors,[name]:false});
        }
        
      }else if(validationStandard==='grade'){
          var notGrade=value.match(/\D/g)
          if(notGrade!==null){
            setErrors({...errors,[name]:" can not include character"})
          }else {
              if(value>4 ||value<0){
                setErrors({...errors,[name]:" should not be above 4 or less than 0"})
              }else{
                setErrors({...errors,[name]:false});
              }
          }
      }
      else{
        setErrors({...errors,[name]:false});
      }
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    let isSub=true;
    let tmp=null;
    intergratedValue.forEach((element)=>{
        if(element.error==null && element.required){
          tmp={...tmp,[element.name]:" is required"}
          isSub=false;
        }else {
          tmp={...tmp,[element.name]:element.error}
        }
    })
    setErrors(tmp)
    if(isSub) {
      submit(values);
    }
    };
  const handler = (event,type) => {
      if(type==='onBlur'){
        event.persist();
        intergratedValue.forEach(element => {
            if(element.name===event.target.name){
              Validate(event.target.value,element.name,element.validationType,element.required);
            }
        });
      }else if(type==="onChange"){
        event.persist()
        setValues({...values,[event.target.name]:event.target.value});
        intergratedValue.forEach(element => {
          if(element.name===event.target.name){
            Validate(event.target.value,element.name,element.validationType,element.required);
          }
      });
      }
  };

  return {
    handler,
    handleSubmit,
    intergratedValue
  }
};


export default Warning