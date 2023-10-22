import { Modalcontainer, Overlay } from './Modal.styled';
import React, { useEffect } from 'react';

export function Modal({ img: { largeImageURL, tags }, onClose }) {
  useEffect(() => {
    document.addEventListener('keydown', onClose, false);
    return () => {
      document.removeEventListener('keydown', onClose, false);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Modalcontainer>
        <img src={largeImageURL} alt={tags} />
      </Modalcontainer>
    </Overlay>
  );
}
