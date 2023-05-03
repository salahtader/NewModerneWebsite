import React from "react";
import "./App.css";
import {Header,Features,Footer,Blog,WhatGPT3, Possibility} from './containers'
import { Article, Cta, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg  ">
        <Navbar/>
        <Header/>
      </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
