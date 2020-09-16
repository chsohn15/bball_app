import React from 'react';
import FilterPlayers from './Components/FilterPlayers';
import PlayersDisplay from './Components/PlayersDisplay'; 
import MyTeam from './Components/MyTeam'
// import logo from './logo.svg';
import './App.css';




export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      myTeam: [], 
      displayedPlayers: []
    }
  }

  addToTeam = (playerObj) => {
    this.setState({
      myTeam: [...this.state.myTeam, playerObj]
    })}

  filterPlayers = (e) => {
      e.persist()
      let url = ""
      
    url = "https://www.balldontlie.io/api/v1/players"

      
      fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let playersArray = data["data"]
        let finalArray = []

        if (e.target.value === "all"){
          finalArray = playersArray
        }
        else if (e.target.value === "C"){
          finalArray = playersArray.filter(player => player.position === "C")
        }
        else if (e.target.value === "G"){
          finalArray = playersArray.filter(player => player.position === "G")
        }
        else if (e.target.value === "F"){
          finalArray = playersArray.filter(player => player.position === "F")
        }
        this.setState({displayedPlayers: finalArray})
      })
    }

  render(){
    return(
      <div className="App">
        <header className="App-header"><h1>Ball is Life!</h1></header>
        <body>
          
          <FilterPlayers filterPlayers = {this.filterPlayers} />
          <MyTeam myTeam={this.state.myTeam}/>
          <PlayersDisplay displayedPlayers={this.state.displayedPlayers} addToTeam={this.addToTeam}/>

        </body>
      </div>
    );
  }
}


