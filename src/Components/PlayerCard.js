import React from 'react'


export default class PlayerCard extends React.Component {
    constructor(){
      super();
  
    }
  
    render(){
        return(
          <div>

             <h5> Player Name: {this.props.player.first_name} {this.props.player.last_name}</h5>
             
             <h5> Team: {this.props.player.team.full_name} </h5>
             
             <h5> Position: {this.props.player.position} </h5>
             
             <h5> Conference: {this.props.player.team.conference} </h5>

             <button onClick={() => this.props.addToTeam(this.props.player)}>Add to My Team</button><br></br>
            __________________________________________________________________
          </div>
  
        )
  
    }
  
  }