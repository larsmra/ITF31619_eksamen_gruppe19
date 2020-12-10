import React, { useEffect } from 'react';
import { useTitleContext } from '../context/TitleProvider';

const Page = ({ title, background, children }) => {
  const { setTitle, setBackground } = useTitleContext();

  useEffect(() => {
    setTitle(title);
    setBackground(background);
  }, [title, background, setTitle, setBackground]);

  return <>{children}</>;
};
