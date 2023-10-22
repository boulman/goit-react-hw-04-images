import { LoadButton } from './LoadBtn.styled';
import React from 'react';

export function LoadBtn({ onLoadMore }) {
  return (
    <LoadButton type="button" onClick={onLoadMore}>
      Load more
    </LoadButton>
  );
}
