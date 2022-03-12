
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container= styled.div `
background-color: black;
display: flex;
flex-direction: column;
min-height  :100vh ;
justify-content: center;
align-items: center;
`

function App() {
  return (
    <Container>
      <Calculator/>
    </Container>
  );
}

export default App;
