import { useState } from 'react';
import Constant from '../Constant';


const UpdateWarning = (data ,submit,DataBaseData) => {
  const [errors, setErrors] = useState({});
  const [values,setValues]=useState(JSON.parse(JSON.stringify(DataBaseData)));
  const intergratedValue=data.map((value)=>{
        return({...value,"error":errors[value.name],
        "value":value.category!=="user"?values[value.category][value.name]:values[value.name]})})
  
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
          fetch(Constant.SERVER.URL+"check/user?email="+value,{
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
      }else if(validationStandard==="password"){
        var number=value.match(/\d/g)
        var character=value.match(/\D/g)
        if(value.length<8){
          setErrors({...errors,[name]:" Length must be greater than or equal to 8"})
        }else{
          if (number===null){
            setErrors({...errors,[name]:" must contain at least 1 number"})
          }else if(character===null){
            setErrors({...errors,[name]:" must contain at least 1 character"})
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
        if(element.value==null&& element.required){
          tmp={...tmp,[element.name]:" is required"}
          isSub=false;
          alert(element["name"])
        }else if(element.error!==false && element.error!=null){
          tmp={...tmp,[element.name]:element.error}
          isSub=false;
        }
    })
    if(isSub){
      submit(values);
    }else{
      setErrors(tmp);
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
        intergratedValue.forEach(element => {
          if(element.name===event.target.name){
            Validate(event.target.value,element.name,element.validationType,element.required);
            if(element["category"]){
              let tmp=values;
              tmp[element.category][event.target.name]=event.target.value;
              setValues(tmp);
            }else{
              let tmp=values;
              tmp[event.target.name]=event.target.value;
              setValues(values);
            }
          }
      });
      }
  };
  const close=()=>{
    setValues(DataBaseData);
  }

  return {
    handler,
    handleSubmit,
    intergratedValue,
    close,
  }
};


export default UpdateWarning