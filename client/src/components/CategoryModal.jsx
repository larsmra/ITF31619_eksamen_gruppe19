import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { create } from '../utils/categoryService';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 20em 1fr;
  grid-template-rows: 1fr auto 1fr;
  background-color: rgba(100, 100, 100, 0.5);
`;

const ModalForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  grid-row: 2/3;
  grid-column: 2/3;

  & > button {
    padding: 20px 30px;
    background-color: #479eb9;
    border-style: none;
    color: white;
    &:hover {
      background-color: #236b85;
    }
  }
`;

const CategoryModal = ({ setModal }) => {
  const [category, setCategory] = useState({ name: '' });
  const [error, setError] = useState('');

  /* const handleSubmit = (event) => {
    event.preventDefault();
    addCategory();
  }; */

  /* const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  }; */

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await create(category);
    if (data.success) {
      setError('');
      setModal(false);
    } else {
      setError(data.message);
    }
  };
  // categoryData();

  /* useEffect(() => {
    if (submitable) {
      submitForm();
    }
  }, [submitable]); */

  const handleOverlayClick = (e) =>
    e.target.getAttribute('name') === 'category_modal_overlay' &&
    setModal(false);

  return (
    <Overlay name="category_modal_overlay" onClick={handleOverlayClick}>
      <ModalForm onSubmit={onSubmit}>
        <label htmlFor="new_category">Ny kategori</label>
        <input
          type="text"
          id="new_category"
          placeholder="Kategorinavn"
          value={category.name}
          onChange={(e) => setCategory({ name: e.target.value })}
        />
        <button type="submit">Create</button>
      </ModalForm>
    </Overlay>
  );
};

export default CategoryModal;
