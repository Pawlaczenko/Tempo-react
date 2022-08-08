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
    overflow-y: auto;
    overflow-x: hidden;
    
    background-color: var(--color-background);
    box-shadow: var(--shadow-light);

    border-radius: 2rem;
    padding: 4rem 5.6rem;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 5rem;

    @media only screen and (${breakpoints.medium}){
      border-radius: 0;
      width: 100%;
      height: 100%;
    }
`;

export default App;
