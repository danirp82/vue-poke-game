
<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" 
        />

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

    </div>
    
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getOptions from '@/helpers/getOptions';

export default {
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getOptions()

      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>