import React from 'react'
import PlayerCard from './PlayerCard'

export default class PlayersDisplay extends React.Component {
    constructor(){
      super();
  
    }
    makePlayerCards = () => {

        return this.props.displayedPlayers.map(player => <PlayerCard player={player} addToTeam={this.props.addToTeam}/>)
    }
    
    render(){
        return(
          <div>
              <h1 style={{color:"red"}}>Selected Basketball Players</h1>
                {this.makePlayerCards()}
          </div>
  
        )
  
    }
}
  