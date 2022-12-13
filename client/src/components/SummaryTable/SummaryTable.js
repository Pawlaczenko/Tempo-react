import React, {useState} from "react";
import styled from "styled-components";
import {unCamelString} from "../../helpers/"
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import {BREAKPOINTS} from '../../constants';

function SummaryTable({data}) {
  const [activeRow, setActiveRow] = useState(0);
  const tableData = Object.keys(data).map((obj,index) => (
    <StyledSummaryRow key={index} selected={activeRow === index} wpm={obj==="wordsPerMinute"} onClick={()=>setActiveRow(index)} >
      <StyledSummaryCell>{unCamelString(obj)}</StyledSummaryCell>
      <StyledSummaryCell>{data[obj]}</StyledSummaryCell>
    </StyledSummaryRow>
  ));

  const summaryTextContent = [
    {
      title: "Typed Characters",
      text: `You typed ${data.typedCharacters} unchanged characters during the test. This doesn't include the characters you corrected.`
    },
    {
      title: "Typed Words",
      text: `You typed ${data.typedWords} words during the test. To improve the accuracy of the test, one word is always composed of 5 letters. That means that the overall number of words is calculated as number of letters divided by 5.`
    },
    {
      title: "Time",
      text: `You finished the test in ${data.time.split(':')[0]} minutes and ${data.time.split(':')[1]} seconds.`
    },
    {
      title: "Accuracy",
      text: `Your accuracy was ${data.accuracy}. It means, that ${data.accuracy} of your key strokes were accurate. This statistic is almost as important as your final score.`
    },
    {
      title: "Corrected Errors",
      text: `You made ${data.correctedErrors + data.uncorrectedErrors} typing errors during the test. ${data.correctedErrors} corrected errors constitute your overall error count.`
    },
    {
      title: "Uncorrected Errors",
      text: `You made ${data.correctedErrors + data.uncorrectedErrors} typing errors during the test. ${data.uncorrectedErrors} uncorrected errors constitute your overall error count.`
    },
    {
      title: "Words Per Minute",
      text: `Your final WPM score is ${data.wordsPerMinute}. This means you type ${data.wordsPerMinute} words per minute on average. Be informed, that this test is not meant to show your accurate WPM score. A lot of song lyrics are constructed in a way, that no typing speed test would use as a base for performing a test.`
    },
  ];
  return (
    <StyledSummaryWrapper>
      <StyledSummaryTable>
        {tableData}
      </StyledSummaryTable>
      <StyledTextContent>
        <Heading level={2}><b>{summaryTextContent[activeRow].title}</b></Heading>
        <Paragraph>{summaryTextContent[activeRow].text}</Paragraph>
      </StyledTextContent>
    </StyledSummaryWrapper>
  )
}

export const StyledSummaryWrapper = styled.div`
  width: 100%;
  flex: 1;
  align-content: center;

  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;

  @media only screen and (${BREAKPOINTS.burger}){
     flex-direction: column;
     justify-content: center;
     align-items: stretch;
  }

`;

const StyledSummaryTable = styled.div`
  font-size: 2rem;
  text-align: right;
  flex: 1;

  @media only screen and (${BREAKPOINTS.burger}){
     flex: 0;
  }
`;

const StyledSummaryRow = styled.div`
  --row-height: 3rem;
  position: relative;
  height: var(--row-height);

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: translateX(10px);
  }

  &:nth-child(even) {
    background-color: var(--color-primary-opace);
  }
  
  ${props => props.wpm && `
    color: var(--color-secondary);
    font-weight: bold;
    border-left: 1px solid var(--color-secondary);
  `}

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

  @media only screen and (${BREAKPOINTS.burger}){
    --row-height: 4rem;
  }
`;

const StyledSummaryCell = styled.div`
  padding: .1rem 1rem;

  &:first-child {
    text-align: left;
    font-weight: bold;
  }
`;

const StyledTextContent = styled.section`
  text-align: left;
  flex: 1;

  @media only screen and (${BREAKPOINTS.burger}){
     flex: 1;
  }
`;

export default SummaryTable;
