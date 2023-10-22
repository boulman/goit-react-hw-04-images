import { ImgGallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export function ImageGallery({ imgs, onClick }) {
  return (
    <ImgGallery>
      {imgs.map(item => (
        <ImageGalleryItem img={item} key={item.id} onClick={onClick} />
      ))}
    </ImgGallery>
  );
}
