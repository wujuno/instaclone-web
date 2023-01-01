import reset from 'styled-reset';
import { createGlobalStyle, DefaultTheme } from "styled-components";


export const lightTheme:DefaultTheme = {
    fontColor: "#2c2c2c",
    bgColor: "lightgray",
  };
  
export  const darkTheme:DefaultTheme = {
    fontColor: "white",
    bgColor: "#2c2c2c",
  };

export const GlobalStyles = createGlobalStyle`
    ${reset};
    body {
        background-color: ${(props)=>props.theme.bgColor};
        color: ${(props) => props.theme.fontColor};
    }
`;