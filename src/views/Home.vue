<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-8 mx-auto">
      <h1 class="text-center display-1">Pokédex</h1>
      <p>{{pokemons}}</p>
      <div id="pokédex" class="row row-cols-3 g-3">
        <div v-for="(pokemon, index) in pokemons" :key="index">
          <div  class="card col">
<!--            <img src="" class="card-img-top" alt="pokemon">-->
            <div class="card-body">
              <p class="card-text">{{pokemon.name}} {{index}}</p>
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
    }
  },
  created(){
    pokeservice.Pokemons().then(response => {
      this.pokemons = response.data;
    }).catch(error =>{console.log(error)})
  },
};
</script>
