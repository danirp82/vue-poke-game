
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

    <template v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
    
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';

import getPokemonOptions from '@/helpers/getPokemonOptions';

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
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true

      if( pokemonId === this.pokemon.id) {
        this.message = `Correcto, ${this.pokemon.name}`
      } else {
        this.message = `Opps, era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArr()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>