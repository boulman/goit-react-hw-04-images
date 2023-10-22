import React, { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { Searchbar } from './SearchBar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImgs } from 'fetchImgs';
import { Circles } from 'react-loader-spinner';
import { LoadBtn } from './LoadBtn/LoadBtn';
import { Modal } from './Modal/Modal';

export function App() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target[1];
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleClickImg = img => {
    setSelectedImg(img);
  };

  const handleCloseModal = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getImgs() {
      try {
        setLoading(true);
        setErr(false);
        const imgs = await fetchImgs(page, query);
        setImages(prev => [...prev, ...imgs.hits]);
        setTotalPages(Math.ceil(imgs.totalHits / 12));
      } catch (e) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    }
    getImgs();
  }, [page, query]);

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {err && <p>Something went wrong! Try again!</p>}
      {images.length > 0 && !err && (
        <ImageGallery imgs={images} onClick={handleClickImg} />
      )}
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="circles-loading"
          wrapperStyle={{
            margin: '10px auto 10px auto',
          }}
          visible={true}
        />
      )}
      {images.length > 0 && page < totalPages && !err && (
        <LoadBtn onLoadMore={handleLoadMore} />
      )}
      {selectedImg && <Modal img={selectedImg} onClose={handleCloseModal} />}
    </Container>
  );
}
