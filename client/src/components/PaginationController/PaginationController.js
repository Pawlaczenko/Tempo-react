import React from "react";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import styled from "styled-components";
import {countPages, getBoundaries} from './paginationController.helper';
import PaginationItem from "./PaginationItem";
import {BREAKPOINTS} from '../../constants';

function PaginationController({currentPage, songsCount, handlePageChange}) {
  const pages = countPages(songsCount);
  const [left,right] = getBoundaries(currentPage,pages);

  let pageComponents = [];
  for(let i = left; i <= right; i++){
    let page = i;
    pageComponents.push(<PaginationItem current={page === currentPage} key={page} handleClick={()=>handlePageChange(page)}>{page}</PaginationItem>);
  }

  return (
    <Wrapper>
      <PaginationItem disabled={currentPage===1} handleClick={()=>handlePageChange(Math.max(currentPage-1,1))} >{<FiChevronLeft />}</PaginationItem>
      <PaginationItem handleClick={()=>handlePageChange(1)}>...</PaginationItem>
      {pageComponents}
      <PaginationItem handleClick={()=>handlePageChange(pages)}>...</PaginationItem>
      <PaginationItem disabled={currentPage===pages} handleClick={()=>handlePageChange(Math.min(currentPage+1,pages))}>{<FiChevronRight />}</PaginationItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  font-size: 2rem;
  list-style-type: none;
  padding: 4rem 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
  @media only screen and (${BREAKPOINTS.extra_small}){
    font-size: 1.6rem;
    gap: 3px;      
  }

`;

export default PaginationController;
