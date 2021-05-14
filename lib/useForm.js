import { useState } from 'react';

export default function useForm(initial = {}) {
  // Creat  a state object  for our inport
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      //  copy the existing state
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function claerForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    claerForm,
  };
}
