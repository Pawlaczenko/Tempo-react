import React, {useState} from "react";
import styled from "styled-components";
import {FiSearch} from "react-icons/fi";
import {flexCenter} from "../../styles/mixins";
import { breakpoints } from '../../constants';

import { useNavigate } from "react-router-dom";

function SearchBar({variant, placeholder = "Search"}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setQuery(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/songs/search?query=${query}`);
  }

  return (
    <Wrapper variant={variant} onSubmit={handleSubmit}>
      <SearchInput type="text" placeholder={placeholder} onChange={handleOnChange} value={query}/>
      <SearchButton>
        <FiSearch />
      </SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  width: ${params => params.variant === "big" ? "50rem" : "40rem"};
  font-size:  ${params => params.variant === "big" ? "2rem" : "1.7rem"};

  --button-size: 13%;
  --input-border-radius: 2rem;
  --translateInput: translateY(-3px);
  --inputOutline: 2px solid var(--color-primary);

  display: grid;
  grid-template-columns: 1fr var(--button-size);

  & > * {
    transition: transform .2s ease;
  }

  @media only screen and (${breakpoints.phone}){
    width: 100%;
  } 
`;

const SearchInput = styled.input`
  height: 100%;
  padding: 1.5rem;
  padding-right: var(--button-size);

  background-color: white;
  border: none;
  border-radius: var(--input-border-radius) 0 0 var(--input-border-radius);
  box-shadow: var(--shadow-light);

  color: var(--color-grey-dark);

  &:focus {
    outline: var(--inputOutline);
    transform: var(--translateInput);
    & + button {
      transform: var(--translateInput);
      outline: var(--inputOutline);
    }
  }
`;

const SearchButton = styled.button`
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
