import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const NavigationItem = ({children, path}) => {

  return (
    <StyledLink to={path} >
        {children}
    </StyledLink>
  )
}

const StyledLink = styled(NavLink)`
    position: relative;

    text-decoration: none;
    color: black;

    &.active {
        color: var(--color-primary);
        &::before {width: 100%;}
    }

    &:before {
        content: "";
        width: 0%;
        height: 2px;
        
        position: absolute;
        bottom: 0;

        background-color: var(--color-primary);
        transition: width .2s ease-in-out;
    }

    &:hover {
        &:before{
            width: 100%;
        }
    }
`;

export default NavigationItem