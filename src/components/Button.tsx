import React from 'react'
import styled from 'styled-components'

export enum ButtonType{
  Number,
  Operation,
}
type props = React.HTMLProps<HTMLButtonElement> &{
    buttonType?: ButtonType;
    label: string;
    position?: [x:number, y:number];
    width?: number;
    height?: number;
}

const CalButton = styled.button`
   background-color: #4d4941;
   border-radius: 8px;
   border: none;
   color: white;
   font-size: 24px;
   
`

const Button:React.FC<props>= ({
  buttonType = ButtonType.Operation,
  label,position,width,height,onClick,}) => {

  const styles: React.CSSProperties ={};
  if(position){
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if(width){
    styles.gridColumnEnd = `span ${width}`
  }
  if(height){
    styles.gridRowEnd = `span ${height}`
  };
  if(buttonType=== ButtonType.Number){
    styles.color ="black"
    styles.background ="#FF5733"
  }
  return (
    <CalButton onClick={onClick} style={styles}>{label}</CalButton>
  );
  
    
  
};

export default Button;