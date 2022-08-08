import React from 'react'
import styled from 'styled-components';
import { breakpoints } from '../../constants';

const Burger = ({isOpen, handleClick}) => {
    return (
        <StyledBurger isOpen={isOpen} onClick={handleClick}>
            <div></div>
        </StyledBurger>
    )
}

const StyledBurger = styled.button`
    --burger-gap: .7rem;
    --burger-height: .2rem;
    --burger-cross-width: 4.8rem;
    --burger-color: black;
    --burger-translate: .85rem;

    display: none;
    width: 4rem;
    height: 4rem;
    
    border: none;
    cursor: pointer;
    background: none;
    
    & div {
        width: 100%;        
        height: var( --burger-height);
        position: relative;
        z-index: 150;
        background-color: var(--burger-color);
        transition: all .2s ease-in-out;


        ${props => props.isOpen && `
            background-color: transparent; 
        `}
    }

    & div::before,
    & div::after {
        content: "";
        width: 100%;
        height: var(--burger-height);
        background-color: var(--burger-color);

        transition: inherit;
        position: absolute;
        left: 0;
    }

    //top
    & div::after {
        /* transform-origin: top left; */
        top: calc(var(--burger-gap) * -1);
        ${props => props.isOpen && `
            transform: translate(0,6px) rotate(45deg);
        `}
    }

    //bottom
    & div::before {
        /* transform-origin: top left; */
        top: var(--burger-gap);
        ${props => props.isOpen && `
            transform: translate(0,-5px) rotate(-45deg);
        `}
    }



    @media only screen and (${breakpoints.burger}){
        display: block;
    }
`;

export default Burger