import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    const {pokemon} = this.props
    return (
      <div>
        <h1>Edit Pokemon</h1>
        <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
            name: <br /> <input type="text" name='name' defaultValue={pokemon.name}/>
            Image: <br /> <input type="text" name='img' defaultValue={pokemon.img}/>
            <input type="submit" name="Submit Changes" />
        </form>
      </div>
    )
  }
}
