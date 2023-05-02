import React from "react";
import {Header,Features,Footer,Blog,WhatGPT3, Possibility} from './containers'
import "./App.css";
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
