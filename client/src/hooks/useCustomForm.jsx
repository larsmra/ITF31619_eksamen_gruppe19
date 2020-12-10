// Denne koden er hentet fra tidligere forelesningsnotater med noen modifikasjoner: https://www.dropbox.com/sh/v4p2ckqbki0as0t/AAAMzFiqxQBNejjQtq8fN80ja/Kodefiler?dl=0&file_subpath=%2F07_react_api%2F02_react_v2%2Fsrc%2Fhooks%2FuseCustomForm.jsx&preview=08_react_v2.zip&subfolder_nav_tracking=1

import { useState } from 'react';

export const useCustomForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState || {});
  const [errors, setErrors] = useState(null);
  const [submitable, setSubmitable] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const validateArticleForm = () => {
    if (
      values.title === '' ||
      values.ingress === '' ||
      values.content === '' ||
      values.author === '' ||
      values.category === ''
    ) {
      setErrors('Fyll ut all felter');
    } else {
      setErrors('');
      setSubmitable(true);
    }
  };

  const validateInquiryForm = () => {
    if (values.name === '' || values.email === '' || values.message === '' ) {
      setErrors('Fyll ut all felter');
    } else {
      setErrors('');
      setSubmitable(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    validateArticleForm,
    validateInquiryForm,
    submitable,
  };
};

export default useCustomForm;
