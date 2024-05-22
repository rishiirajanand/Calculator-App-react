import ButtonBox from "./Components/ButtonBox";
import Screen from "./Components/Screen"
import Wrapper from "./Components/Wrapper"
import Button from "./Components/Button";
import CalcProvider from "./Context/CalcContext";

function App() {

  const btnValues = [
    ['C', '+-', '%', '/'], 
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
  ];

  return (

    < CalcProvider >
    
      <Wrapper >
        < Screen />
        < ButtonBox >
          {btnValues.flat().map((btn, index)=> (
            < Button key={index} value ={btn}/>
          ))}
        </ButtonBox>
      </Wrapper>

    </CalcProvider>
  )
}

export default App
