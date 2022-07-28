import React from 'react'
import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <LogoStyled>
      <Link to="/">
          <img src={logo} alt="Tempo logo" />
      </Link>
    </LogoStyled>
  )
}

export const LogoStyled = styled.div`

  & a {
    width: 17rem;
    display: block;
  }
  & img {
    width: 100%;
  }
`;



export default Logo