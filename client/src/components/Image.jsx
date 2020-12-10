import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { download } from '../utils/imageService';

const Image = ({ /* imageId, mimeType, */ src, alt }) => {
  // const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  /* const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }; */

  useEffect(() => {
    /* if (imageId) {
      const fetchImage = async () => {
        const { data } = await download(imageId);
        console.log(data);
        const img = await data.arrayBuffer().then((buffer) => {
          const base64Flag = `data:${mimeType};base64,`;
          const imageStr = arrayBufferToBase64(buffer);
          return base64Flag + imageStr;
        });
        setImage(img);
      };
      fetchImage();
    } */
    setImageSrc(`${process.env.BASE_URL}/${src}`);
  }, [src]);

  return <img src={imageSrc} alt={alt} />;
};

export default Image;
