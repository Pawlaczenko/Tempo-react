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

const LogoStyled = styled(Link)`
  & > img {
    max-width: 150px;
  }
`;



export default Logo