import React from "react";
import styled from "styled-components";

export default function Button({children}) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-size: 2.2rem;
  text-decoration: none;

  background-color: var(--button-color);
  border: 3px solid var(--button-color);

  border-radius: 1.3rem;
  padding:  0.45rem 2.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: white;
    color: var(--button-color);
  }

  & svg {
    margin-right: 2rem;
  }
`;

export const BlueButton = styled(StyledButton)`
  --button-color: var(--color-secondary);
  color: white;
`;

export const PrimaryButton = styled(StyledButton)`
  --button-color: var(--color-primary);
  color: white;
`;


