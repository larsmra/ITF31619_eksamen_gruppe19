import React from 'react';
import styled from 'styled-components';

const CategoryModal = ({addCategory, setFormData, formData, setModal }) => {

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

  return (
      <Modal>
          <form onSubmit={handleSubmit}>
            <label htmlFor='new_category'> Ny kategori </label>
            <span onClick={() => setModal(false)}> X </span>
            <input 
              type='text' 
              id='new_category' 
              placeholder='Kategori navn'
              value={formData.category}
              onChange={updateValue}
              autoFocus/> 
              <button type='submit'> Create </button>
          </form>
      </Modal>

  );
};

export default CategoryModal;