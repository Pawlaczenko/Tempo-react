import React from "react";
import styled from "styled-components";
import {addLeadingZeros} from '../../helpers';

function SummaryTable({data}) {
  return (
    <StyledSummaryTable>
      <tr>
        <td>Typed words:</td>
        <td>{Math.ceil(data.typedWords)}</td>
      </tr>
      <tr>
        <td>Typed characters:</td>
        <td>{data.typedCharacters}</td>
      </tr>
      <tr>
        <td>Time:</td>
        <td>{addLeadingZeros(data.time.minutes)}:{addLeadingZeros(data.time.seconds)}</td>
      </tr>
      <tr>
        <td>Accuracy:</td>
        <td>{data.accuracy}</td>
      </tr>
      <tr>
        <td>Corrected errors:</td>
        <td>{data.errors.corrected}</td>
      </tr>
      <tr>
        <td>Uncorrected errors:</td>
        <td>{data.errors.uncorrected}</td>
      </tr>
      <SpecialTr>
        <td>Words per minute:</td>
        <td>{data.wpm}</td>
      </SpecialTr>
    </StyledSummaryTable>
  )
}

const StyledSummaryTable = styled.table`
  width: 50%;
  font-size: 2rem;
  border-collapse: collapse;
  text-align: right;

  & > tr:nth-child(even) {
    background-color: var(--color-primary-opace);
  }

  & td {
    padding: .1rem 1rem;
  }

  & td:first-child {
    text-align: left;
    font-weight: bold;
  }
`;

const SpecialTr = styled.tr`
  color: var(--color-primary);
  font-weight: bold;
  font-size: 2.5rem;
  & > td {padding: 1rem;}
`;

export default SummaryTable;
