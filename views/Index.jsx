import React, { Component } from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

export default class Index extends Component {
  render() {
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
            {/* loop through the pokemon array */}
            {this.props.pokemon.map((singlePokemon, i) =>{
                return (
                <li>
                    <a href={`/pokemon/${i}`}>{singlePokemon.name}</a>
                    
                </li>
                )
               

            })}
        </ul>
      </div>
      
    )
  }
}
