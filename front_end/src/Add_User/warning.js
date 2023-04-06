import { useState, useEffect } from 'react';

const Warning = (callback) => {

  let values={
    "fName": "betel",
    "lName": "ameha",
    "password": "$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW",
    "role": "admin",
    "city": "Addis Ababa",
    "subcity": "nefas silk",
    "gender": "male",
    "cellPhone1": "0911448312",
    "woreda": 7,
    "dob": "2023-04-05",
    "email": "betel.ameha@gmail.com",
    "cellPhone2": null
  };
  const [SERVER_URL,setServerUrl]=useState("http://localhost:8080/");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const  Validate=(value,name)=>{
    if(!value){
      setErrors({...errors,[name]:true})
      return
    }else{
      let temp=errors;
      temp[name]=false;
      setErrors(temp);
    }
  };
  const addUser=(user)=>{
    fetch('http://localhost:8080/api/users',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(user)
    }).then(response=>{
      if(response.ok){
        alert('all ok')
      }else{
        alert('something is worng ')
      }
    }).catch(err=>alert('failed'))

  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      setIsSubmitting(true);
      addUser(values,'user');

    };
  const handleInputChange = (event) => {
    event.persist();
    //Validate(event.target.value,event.target.name);
    //values={ ...values, [event.target.name]: event.target.value };
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};


export default Warning