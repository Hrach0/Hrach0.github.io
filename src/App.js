import './App.css';
import Div1 from './Div1';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div classNameName="App">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap" rel="stylesheet"/>

      </header>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>



      <Nav/>
      <div className="img1">

        <div className="title1" id="menu1-1">
        <h1 className="h1-1">thin</h1><h1 className="h1-2">CRUST PIZZA</h1>
        <a className='aaaa' href="#menu1-2"><button>LET ME SEE THE MENU</button></a>
        </div>
        <div className="time">
        <p>Open from 10am to 12pm</p>
        </div>
        </div>

        <Div1/>

      </div>
  );
}

export default App;
