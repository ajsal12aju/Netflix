import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import {originals,action, popular, upcoming} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner url={originals}/>
     <RowPost url={originals} title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={popular} title="Popular" isSmall/>
     <RowPost url={upcoming} title="Upcoming" isSmall/>
     <Footer/>

    </div>
  );
}

export default App;
 