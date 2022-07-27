import React from 'react'
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <LogoStyled to="/">
        <img src={logo} alt="Tempo logo" />
    </LogoStyled>
  )
}

export const LogoStyled = styled(Link)`
  & > img {
    max-width: 17rem;
  }
`;



export default Logo