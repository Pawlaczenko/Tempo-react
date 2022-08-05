import styled from 'styled-components';
import {absoluteCenter} from '../../styles/mixins';
import { breakpoints } from '../../constants';

import Header from '../Header';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: min(91%,1750px);
    height: min(91vh,815px);
    ${absoluteCenter}
    
    background-color: var(--color-background);
    box-shadow: var(--shadow-light);

    border-radius: 2rem;
    padding: 4rem 5.6rem;

    @media only screen and (${breakpoints.medium}){
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
`;

export default App;
