import { pokemon1,pokemon2 } from "./modules/pokemons.js";
/**
 * Choix Arène 
 */

let arene = document.querySelector('#combat');
let randA=Math.floor(Math.random()*5+1)
arene.setAttribute('style',`background-image:url('public/images/terrain${randA}.png');`)
console.log(arene.attributes);


/**
 * Création des pokemons 
 */
console.log(pokemon1);
let pokemon1I=document.createElement('img')
let pokemon2I=document.createElement('img')
let statPoke1 = `https://pokeapi.co/api/v2/stat/${pokemon1.id}`
console.log(statPoke1);

console.log(pokemon1.stats);
console.log(pokemon2.stats);

if(Math.floor(Math.random()*2)==0){
    pokemon1I.src=`${pokemon1.sprites.back_default}`
}else{
pokemon1I.src=`${pokemon1.sprites.back_shiny}`
}
if(Math.floor(Math.random()*2)==0){
    pokemon2I.src=`${pokemon2.sprites.front_default}`
}else{
pokemon2I.src=`${pokemon2.sprites.front_shiny}`
}

combat.append(pokemon1I,pokemon2I);