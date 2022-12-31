import reset from 'styled-reset';
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    fontColor: "#2c2c2c",
    bgColor: "lightgray",
  };
  
export  const darkTheme = {
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