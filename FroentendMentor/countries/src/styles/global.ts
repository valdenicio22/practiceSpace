import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --Dark-Blue: hsl(209, 23%, 22%); //(Dark Mode Elements)
    --Very-Dark-Blue: hsl(207, 26%, 17%); //(Dark Mode Background)
    --Very-Dark-Light-Mode: hsl(200, 15%, 8%); // (Dark Mode Background) (Light Mode Text)
    --Dark-Gray: hsl(0, 0%, 52%); //(Light Mode Input)
    --Very-Light-Gray: hsl(0, 0%, 98%); //(Light Mode Background)
    --White: hsl(0, 0%, 100%) // (Dark Mode Text & Light Mode Elements)
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media(max-width: 400px){
      font-size: 87.5%;
    }
  }
  body{
    font-family: 'Nunito Sans', sans-serif;
  }
  button{
    cursor: pointer;
  }

`