import React from 'react';
import FilterPlayers from './Components/FilterPlayers';
// import logo from './logo.svg';
// import './App.css';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      myTeam: [], 
      displayedPlayers: []
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">Hello World</header>
        <body>
          <FilterPlayers />
        </body>
      </div>
    );
  }
}


