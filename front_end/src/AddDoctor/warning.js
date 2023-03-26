import { useState, useEffect } from 'react';

const Warning = (callback, Validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(Validate(values));
    setIsSubmitting(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors,
  }
};

export default Warning