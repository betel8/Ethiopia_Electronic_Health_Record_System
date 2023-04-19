import { useState } from 'react';
import Constant from '../Constant'

const Warning = (data,pageTitle) => {
  const linker=pageTitle==="Doctor"?"doctor":pageTitle==="Nurse"?"nurse":"pharmacist";
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
    }
  };
  const addUser=(user)=>{
    user={...user,
      "role": linker,
      "password":"temp"
    };
    const token=sessionStorage.getItem("jwt");

    fetch(Constant.SERVER.URL+'add/'+linker,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':token},
      body: JSON.stringify(user)
    }).then(response=>{
      if(response.ok){
        alert('all ok')
      }else{
        console.log(JSON.stringify(user))
      }
    }).catch(err=>alert(err))

  }
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
      addUser(values);
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