import React, { createContext, useContext, useState } from 'react';

const PageDataContext = createContext();

const { Provider } = PageDataContext;

const PageDataProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [background, setBackground] = useState(null);
  const [wide, setWide] = useState(false);

  return (
    <Provider
      value={{
        title,
        setTitle,
        background,
        setBackground,
        wide,
        setWide,
      }}
    >
      {children}
    </Provider>
  );
};

export const usePageDataContext = () => useContext(PageDataContext);

export default PageDataProvider;
