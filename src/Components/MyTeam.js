import React from 'react'
import PlayerCard from './PlayerCard'

export default class MyTeam extends React.Component {
    constructor(){
      super();
  
    }
    makePlayerCards = () => {

        return this.props.myTeam.map(player => <PlayerCard player={player}/>)
    }
    
    render(){
        return(
          <div>
              <h1 style={{color:"blue"}}>My Team</h1>
                {this.makePlayerCards()}
                
          </div>
  
        )
  
    }
}