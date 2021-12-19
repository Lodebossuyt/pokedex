<template>
<div class="container-fluid bg-danger">
  <div class="row">
    <div class="col-8 mx-auto">
      <h1 class="text-center display-1 fw-bold">Pokédex</h1>
      <div id="pokédex" class="row row-cols-3 g-3">
        <div v-for="(pokemon, index ) in pokemons" :key="index" >
          <div  class="card col shadow-lg rounded-3">
            <img class="card-img-top" :src="pokemonsPic + (index + 1 ) + '.png' "  alt="pokemon">
            <div class="card-body">
              <h5 class="card-text text-center">DexNumber : {{index + 1 }}</h5>
              <h1 class="card-title fw-bold text-center">{{pokemon.name.toUpperCase()}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import pokeservice from "../../services/pokeservice";
export default {
  name: "Home",
  data(){
    return{
      pokemons: null,
      pokemonsPic:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    }
  },
  created(){
    pokeservice.getPokeDex().then(response => {
      this.pokemons = response.data.results;
    }).catch(error =>{console.log(error)})
  },
};
</script>
