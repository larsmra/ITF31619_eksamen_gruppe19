import React from 'react';
import styled from 'styled-components';

    const Modal = styled.section`
        & > form {
          padding: 20px;
        }

        & > button{
          padding: 20px 30px;
          background-color: #479EB9;
          border-style: none;
          color: white;
          &:hover{
              background-color: #236B85;
          }
        }
    `;

const CategoryModal = ({ setModal }) => {

    const handleSubmit = (event) => {
      event.preventDefault();
      addCategory();
    };

    const updateValue = (event) => {
        const inputValue = {[event.target.name] : event.target.value};
        setFormData((prev) => ({
          ...prev,
          ...inputValue,
        }));
    };

    const submitForm = () => {
      const postData = async () => {
        try {
          const response = await axios.post(`http://localhost:3000/`, {
            values,
          });
          if (response.status === 200) {
            setError('');
            history.push('/posts');
          }
        } catch (error) {
          setError(error.message);
        }
      };
      postData();
    };


  return (
      <Modal>
          <form onSubmit={handleSubmit}>
            <label htmlFor='new_category'> Ny kategori </label>
            <span onClick={() => setModal(false)}> X </span>
            <input 
              type='text' 
              id='new_category' 
              placeholder='Kategori navn'
              value={values.category}
              onChange={updateValue}
              autoFocus/> 
              <button type='submit'> Create </button>
          </form>
      </Modal>

  );
};

export default CategoryModal;