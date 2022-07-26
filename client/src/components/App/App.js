import styled from 'styled-components';
import {baseShadow, absoluteCenter} from '../../styles/mixins';

function App() {
  return (
    <Wrapper>
      Hello world
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
    padding: 58px 56px;
`;

export default App;
