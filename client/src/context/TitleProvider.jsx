import React, { createContext, useContext, useState } from 'react';

const TitleContext = useContext();

const { Provider } = TitleContext;

const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('');

  return (
    <Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </Provider>
  );
};

export const useTitleContext = () => useContext(TitleContext);

export default TitleProvider;
