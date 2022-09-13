import React, {useState} from "react";
import styled from "styled-components";
import {unCamelString} from "../../helpers/"
import Heading from "../Heading";

function SummaryTable({data}) {
  const [activeRow, setActiveRow] = useState(0);
  const tableData = Object.keys(data).map((key,index) => (
    <StyledSummaryRow key={index} selected={activeRow === index} onClick={()=>setActiveRow(index)}>
      <StyledSummaryCell>{unCamelString(key)}</StyledSummaryCell>
      <StyledSummaryCell>{data[key]}</StyledSummaryCell>
    </StyledSummaryRow>
  ))
  return (
    <Wrapper>
      <StyledSummaryTable>
        {tableData}
      </StyledSummaryTable>
      <StyledTextContent>
        <Heading level={2}><b>Accuracy</b></Heading>
      </StyledTextContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledSummaryTable = styled.div`
  width: 100%;
  font-size: 2rem;
  text-align: right;
`;

const StyledSummaryRow = styled.div`
  --row-height: 3rem;
  position: relative;
  height: var(--row-height);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateX(10px);
  }

  &:nth-child(even) {
    background-color: var(--color-primary-opace);
  }

  ${props => props.selected && `
    color: var(--color-primary);
    font-weight: bold;
    background-color: black !important;
    --beforeSize: calc(var(--row-height) / 1.4142);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      
      width: var(--beforeSize);
      height: var(--beforeSize);
  
      transform: translate(50%, -50%) rotate(45deg);
      background: black;
      z-index: -1;
    }
  `}

  ${props => props.wpm && `
    color: var(--color-primary);
    font-weight: bold;
    font-size: 2.5rem;
    padding: 1rem 0;
  `}
`;

const StyledSummaryCell = styled.div`
  padding: .1rem 1rem;

  &:first-child {
    text-align: left;
    font-weight: bold;
  }
`;

const StyledTextContent = styled.section`
  text-align: center;
`;

export default SummaryTable;
