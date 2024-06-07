import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PaginaHome from './Components/PaginaHome/PaginaHome';



import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-family: "Roboto", sans-serif;

  }
`


function App() {
 

  return (
    <>
    <PaginaHome/>
    </>
    
   
  )
}

export default App
