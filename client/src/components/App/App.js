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
    width: min(90%, 1800px);
    height: min(90%, 950px);
    ${absoluteCenter}
    
    background-color: var(--color-background);
    ${baseShadow}

    border-radius: 20px;
    padding: 40px 56px;
`;

export default App;
