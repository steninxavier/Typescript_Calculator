import React,{useState} from 'react'
import styled from 'styled-components'
import Button, {ButtonType} from './Button'
import Calc,{CalcInput, InputType,OperatorType} from '../modules/calc'



const Container= styled.div `
    
`
const Grid= styled.div`
    display:grid;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
    grid-gap: 10px;
`
const Display= styled.div`
  background: white;
  border-radius: 8px;
  font-size: 48px;
  text-align: right;
  grid-column-end: span 4;
  padding: 30px 24px;
`
const Calculator: React.FC= () => {
  const [inputs, setInputs] = useState<Array<CalcInput>>([]);
  const state = Calc.getState(inputs);
  console.log(inputs);
  const appendInput = (input: CalcInput):void=>{
    setInputs((prev)=> [...prev,input]);
  };
  const handleAllClear=()=> setInputs([]);
  const handleOops=()=> setInputs((prev)=>prev.slice(0,-1));
  const handleNumerical =(value:number)=>()=>
   appendInput({type: InputType.Numerical,value});
   const handleOperator = (operator:OperatorType)=>()=>
   appendInput({type:InputType.Operator,operator});
  return (
    <Container>
        <Grid>
          <Display>{state.displayValue}</Display>
        <Button label="AC"  onClick={handleAllClear} position={[0,1]} width={2}/>
        <Button label="OOPS"onClick={handleOops}  position={[2,1]} width={2}/>
        <Button label="-"   onClick={handleOperator(OperatorType.Subtract)}  position={[3,2]}/>
        <Button label="+"   onClick={handleOperator(OperatorType.Add)} position={[3,3]}/>
        <Button label="="   onClick={handleOperator(OperatorType.Equals)}  position={[3,4]} height={2}/>
            <Button label="9" buttonType={ButtonType.Number} onClick={handleNumerical(9)} position={[2,2]}/>
            <Button label="8" buttonType={ButtonType.Number} onClick={handleNumerical(8)} position={[1,2]}/>
            <Button label="7" buttonType={ButtonType.Number} onClick={handleNumerical(7)}position={[0,2]}/>
            <Button label="6" buttonType={ButtonType.Number} onClick={handleNumerical(6)}position={[2,3]}/>
            <Button label="5" buttonType={ButtonType.Number} onClick={handleNumerical(5)}position={[1,3]}/>
            <Button label="4" buttonType={ButtonType.Number} onClick={handleNumerical(4)}position={[0,3]}/> 
            <Button label="3" buttonType={ButtonType.Number} onClick={handleNumerical(3)}position={[2,4]}/>
            <Button label="2" buttonType={ButtonType.Number} onClick={handleNumerical(2)}position={[1,4]}/>
            <Button label="1" buttonType={ButtonType.Number} onClick={handleNumerical(1)}position={[0,4]}/>
            <Button label="0" buttonType={ButtonType.Number} position={[0,5]} width={3}/>
        </Grid>
    </Container>
  )
}

export default Calculator