import React, { useEffect } from 'react';
import { usePageDataContext } from '../context/PageDataProvider';

const Page = ({ title, headerBackground, wide, children }) => {
  const { setTitle, setBackground, setWide } = usePageDataContext();

  useEffect(() => {
    setTitle(title);
    setBackground(
      headerBackground ? `${process.env.BASE_URL}/${headerBackground}` : null
    );
    setWide(wide);
    document.title = title;
  }, [title, headerBackground, wide, setTitle, setBackground, setWide]);

  return <>{children}</>;
};

export default Page;
