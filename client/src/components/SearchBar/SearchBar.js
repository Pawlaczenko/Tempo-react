import React from "react";
import styled from "styled-components";
import {FiSearch} from "react-icons/fi";
import {flexCenter} from "../../styles/mixins";

function SearchBar() {
  return (
    <Wrapper>
      <SearchInput type="text" placeholder="Search" />
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: 40rem;
  max-height: 5rem;
  position: relative;

  --input-border-radius: 2rem;
  --button-size: 13%;
  --translateInput: translateY(-3px);

  & > * {
    transition: transform .2s ease;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  padding-right: calc(var(--button-size) + .8rem);

  background-color: white;
  border: none;
  border-radius: var(--input-border-radius);
  box-shadow: var(--shadow-light);

  font-size: 1.7rem;
  color: var(--color-grey-dark);

  &:focus {
    outline: 2px solid var(--color-primary);
    transform: var(--translateInput);
    & + button {
      transform: var(--translateInput);
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;

  width: var(--button-size);
  height: 100%;
  ${flexCenter}

  border-radius: 0 var(--input-border-radius) var(--input-border-radius) 0;
  background-color: var(--color-primary);
  border: none;
  color: white;
  cursor: pointer;

  & > svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export default SearchBar;
