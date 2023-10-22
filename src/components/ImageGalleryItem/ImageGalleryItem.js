import { GalImg, GalItem } from './ImageGalleryItem.styled';
import React from 'react';

export default function ImageGalleryItem({ img, onClick }) {
  const handleClick = () => onClick(img);
  return (
    <GalItem onClick={handleClick}>
      <GalImg src={img.webformatURL} alt={img.tags} />
    </GalItem>
  );
}
