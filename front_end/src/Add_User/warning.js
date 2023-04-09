import { useState } from 'react';
import Constant from '../Constant'

const Warning = (data,pageTitle) => {
  const linker=pageTitle==="Doctor"?"doctors":pageTitle==="Nurse"?"nurses":"pharmacist";
  const [errors, setErrors] = useState({});
  const [values,setValues]=useState({});
  const intergratedValue=data.map((value)=>{
    return({...value,"error":errors[value.name],"value":values[value.name]});
  })
  const  Validate=(value,name,validationStandard,required)=>{
    if( value == null && required){
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
      }else{
        setErrors({...errors,[name]:false})
      }
    }
  };
  const addUser=(user)=>{
    fetch(Constant.SERVER.URL+'api/'+linker,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
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
      setValues({...values,
        "gender":"male",
        "password": "$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW",
        "role": "doctor",
      })
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