import React from 'react';


export default class FilterPlayers extends React.Component {
  constructor(){
    super();

  }

  render(){
      return(
        <div>
            <h3>Select a Player Position</h3>
            <select onChange ={(e) => this.props.filterPlayers(e)} >
              
                <option value="all">All</option>
                <option value="C">Center</option>
                <option value="G">Guard</option>
                <option value="F">Forward</option>
            </select>
        </div>

      )

  }

}