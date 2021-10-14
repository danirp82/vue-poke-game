<template>
  <h1>¿Quién es este pokemon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="false"/>
  <PokemonOptions :pokemons="pokemonArr"/>
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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getOptions()
    }
  },
  mounted() {
    this.mixPokemonArr()
  }
}
</script>