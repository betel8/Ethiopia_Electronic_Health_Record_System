import { useState, useEffect } from 'react';

const Warning = (callback) => {

  const value={};
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const  Validate=(value,name)=>{
    if(!value){
      setErrors({...errors,[name]:true})
    }else{
      setErrors(errors[name]=false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      setIsSubmitting(true);
      setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
    };
  const handleInputChange = (event) => {
    event.persist();
    Validate(event.target.value,event.target.name);
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};

export default Warning