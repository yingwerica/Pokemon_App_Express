import React, { Component } from 'react'

const indexStyle = {
    color: '#2A3990',
    backgroundImage: 'linear-gradient(to bottom left, red, yellow)',
    fontSize: '50pt',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    fontFamily: 'cursive',
    
  };

export default class Index extends Component {
  render() {
    return (
        <html style={{height:'100%'}}>
        <body style={indexStyle}>
           <div>
            <h1 style={{textAlign: 'center'}}>See All The Pokemon!</h1> <br />
            <a href="/pokemon/new" style={{
                          fontSize: '40px',
                          display: 'flex',
                          justifyContent: 'center'
                          }}> Create a New Pokemon</a>
            <ul>
                {/* loop through the pokemon array */}
                {this.props.pokemons.map((singlePokemon, id) =>{
                return (
                <li style={{marginLeft: '30%'}}>
                                                {/* capitalize the first charactor of the name */}
                    <a href={`/pokemon/${singlePokemon.id}`}>{singlePokemon.name.charAt(0).toUpperCase() + singlePokemon.name.slice(1)}</a>
                    {/* set up delete form to send DELETE request to a singlePokemon route to delete the data */}
                    <form action={`/pokemon/${singlePokemon._id}?_method=DELETE`} method="POST" >
                      <input type="submit" value="DELETE" />
                    </form>
                    <a href={`/pokemon/${singlePokemon.id}/edit`}>Edit this Pokemon</a>
                </li>
                )
            })}
            </ul>
            </div>   
        </body>
        </html>
    )
  }
}
