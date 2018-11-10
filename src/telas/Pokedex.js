import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';
import PokemonCard from '../componentes/PokemonCard';

const listaPokemons = props =>
  [3, 10, 200, 350, 760, 42, 230, 79, 19, 333, 240].map(id => {
    return (
      <div
        style={{ margin: 16, cursor: 'pointer' }}
        key={id}
        onClick={() => props.history.push(`/pokemon/${id}`)}
      >
        <PokemonCard pokemonId={id} />
      </div>
    );
  });

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Topbar titulo="Pokedex" cor="secondary" />
        <div style={{ marginTop: 72 }}>{listaPokemons(this.props)}</div>
      </div>
    );
  }
}

export default Pokedex;
