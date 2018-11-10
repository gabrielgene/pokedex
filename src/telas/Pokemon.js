import React, { Component } from 'react';
import Topbar from '../componentes/Topbar';
import PokemonCard from '../componentes/PokemonCard';

class Pokemon extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <Topbar titulo="Pokemon" cor="primary" />
        <div style={{ marginTop: 72 }}>
          <PokemonCard pokemonId={id} />
        </div>
      </div>
    );
  }
}

export default Pokemon;
