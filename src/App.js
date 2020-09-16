import React from 'react';
import FilterPlayers from './Components/FilterPlayers';
import PlayersDisplay from './Components/PlayersDisplay'; 
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



    filterPlayers = (e) => {

      let url = ""
      
    url = "https://www.balldontlie.io/api/v1/players"


      // if (e.target.value === "all") {
      //   url = "https://www.balldontlie.io/api/v1/players"
        

      // }
      // else
      // {
        
      //     url = `https://www.balldontlie.io/api/v1/players?position=${e.target.value}`
       
      // }

      
      fetch(url)
  
      .then(resp => resp.json())
      .then(data => this.setState({displayedPlayers: data["data"]}))
    
    }

  render(){
    
  

    return (
      <div className="App">
        <header className="App-header">Hello World</header>
        <body>
          
          <FilterPlayers filterPlayers = {this.filterPlayers} />
          <PlayersDisplay />

        </body>
      </div>
    );
  }
}


