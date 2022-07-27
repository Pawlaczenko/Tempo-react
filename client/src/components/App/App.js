import styled from 'styled-components';
import {baseShadow, absoluteCenter} from '../../styles/mixins';

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
    ${baseShadow}

    border-radius: 2rem;
    padding: 4rem 5.6rem;
`;

export default App;
