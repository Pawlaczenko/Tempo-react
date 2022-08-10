import React from "react";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import styled from "styled-components";
import {countPages, getBoundaries} from './paginationController.helper';
import PaginationItem from "./PaginationItem";

function PaginationController({currentPage, songsCount, handlePageChange}) {
  const pages = countPages(songsCount);
  let pageComponents = [];
  const [left,right] = getBoundaries(currentPage,pages);

  for(let i = left; i <= right; i++){
    let page = i;
    pageComponents.push(<PaginationItem current={page === currentPage} key={page} handleClick={()=>handlePageChange(page)}>{page}</PaginationItem>);
  }

  return (
    <Wrapper>
      <PaginationItem handleClick={()=>handlePageChange(Math.max(currentPage-1,1))} >{<FiChevronLeft />}</PaginationItem>
      <PaginationItem handleClick={()=>handlePageChange(1)}>...</PaginationItem>
      {pageComponents}
      <PaginationItem handleClick={()=>handlePageChange(pages)}>...</PaginationItem>
      <PaginationItem handleClick={()=>handlePageChange(Math.min(currentPage+1,pages))}>{<FiChevronRight />}</PaginationItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  font-size: 2rem;
  list-style-type: none;
  padding-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  
`;

export default PaginationController;
