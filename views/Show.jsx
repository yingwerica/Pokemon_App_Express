import React, { Component } from 'react'

const showStyle = {
    color: '#2A3990',
    backgroundImage: 'linear-gradient(to bottom left, red, yellow)',
    fontSize: '30pt',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    fontFamily: 'cursive',   
  };

const imgStyle = {
   display: 'block',
   marginLeft: 'auto',
   marginRight: 'auto',
   width: '30%',
}

export default class Show extends Component {
  render() {
    const sPokemon = this.props.pokemon
    return (
    <html style={{height:'100%'}}>
      <body style={showStyle}>
        <div>
            <h1 style={{textAlign: 'center'}}>Gotta Catch 'Em All</h1>
            <h2 style={{textAlign: 'center'}}>{sPokemon.name.charAt(0).toUpperCase() + sPokemon.name.slice(1)}</h2>
            <img src={sPokemon.img} alt={`image of ${sPokemon.name}`} style={imgStyle}/>
            <br />
            <a href="/pokemon" style={imgStyle}>Back to Pokemon list</a>
            <a href={`/pokemon/${sPokemon.id}/edit`} style={imgStyle}>Edit this Pokemon</a>

        </div>
      </body>
    </html>  
    )
  }
}