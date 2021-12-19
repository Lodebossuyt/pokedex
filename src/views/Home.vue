<template>
<div class="container-fluid bg-info">
  <div class="row">
    <div class="col-8 mx-auto">
      <h1 class="text-center display-1">Pokédex</h1>
      <div id="pokédex" class="row row-cols-3 g-3">
        <div v-for="(pokemon, index) in pokemons" :key="index">
          <div  class="card col rounded-3 shadow-lg">
            <img :src="pokemonpic + (index+1) + '.png'" class="card-img-top" alt="pokemon">
            <div class="card-body">
              <p class="card-text text-center fw-bold">{{pokemon.name}} {{index+1}}</p>
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
      pokemonpic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    }
  },
  created(){
    pokeservice.Pokemons().then(response => {
      this.pokemons = response.data.results;
    }).catch(error =>{console.log(error)})
  },
};
</script>
