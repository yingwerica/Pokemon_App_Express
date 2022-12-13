import React, { Component } from 'react'


export default class Show extends Component {
  render() {
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{this.props.singlePokemon.name}</h2>
        <img src={this.props.singlePokemon.img.concat('.jpg')} alt={`image of ${this.props.singlePokemon.name}`} />
        <a href="/pokemon">Back</a>
      </div>
      
    )
  }
}