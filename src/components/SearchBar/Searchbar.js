import {
  Form,
  Header,
  SearchBtn,
  SearchBtnLbl,
  SearchInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

export function Searchbar({ onSubmit }) {
  return (
    <Header>
      <Form onSubmit={onSubmit}>
        <SearchBtn type="submit">
          <SearchBtnLbl>
            <AiOutlineSearch />
          </SearchBtnLbl>
        </SearchBtn>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}
