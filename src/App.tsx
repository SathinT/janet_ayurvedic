import React from 'react';
import './App.css';
import {Navbar} from "./view/Navbar/Navbar";
import {MainContent} from "./view/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";
import {Footer} from "./view/Footer/Footer";;

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <MainContent/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
