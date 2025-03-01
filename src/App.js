import './App.css'
import Header from "./components/header";
import Song from "./components/Song";
import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    console.log("La app se ha cargado correctamente");
  }

  render(){

    return (
      <div className="App">
        <Header appName="Smayovs Music" />
        <div>
        <Song title="Coloratura" artist="Coldplay" duration="10:17" genre="Alternativa"/>
        <Song title="Champagne Supernova" artist="Oasis" duration="07:31" genre="Alternativa"/>
        <Song title="This Is A Low" artist="Blur" duration="05:00" genre="Alternativa"/>
        </div>
      </div>
    );
  }
}

export default App;
