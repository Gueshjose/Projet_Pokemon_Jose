import { pokemon1,pokemon1NomFr,pokemon2,pokemon2NomFr,pokemonHasard,Pokemon } from "./modules/pokemons.js";
/**
 * Choix Arène 
 */

let arene = document.querySelector('#combat');
let randA=Math.floor(Math.random()*5+1)
arene.setAttribute('style',`background-image:url('public/images/terrain${randA}.png');`)


/**
 * Création des pokemons 
 */
console.log(pokemon1);
let pokemon1I=document.createElement('img')
pokemon1I.id='poke1';
let nom1=document.createElement('h3')
nom1.innerText=pokemon1NomFr;
nom1.id='pokeNom1';
let pokemon2I=document.createElement('img')
pokemon2I.id='poke2';
let nom2=document.createElement('h3');
nom2.innerText=pokemon2NomFr;
nom2.id='pokeNom2';



console.log(pokemonHasard(pokemon1.moves[0].move.url));
let statPoke1 =await pokemonHasard(pokemon1.moves[0].move.url)
console.log(statPoke1);

console.log(pokemon1.stats);
console.log(pokemon2.stats);

console.log(Math.floor(Math.random()*6+1));
/**
 *  Définition aux hasard si le pokemon est shiny
 */
if((Math.floor(Math.random()*6+1)%6)!=0){
    pokemon1I.src=`${pokemon1.sprites.back_default}`
}else{
pokemon1I.src=`${pokemon1.sprites.back_shiny}`
}
if((Math.floor(Math.random()*6+1)%6)!=0){
    pokemon2I.src=`${pokemon2.sprites.front_default}`
}else{
pokemon2I.src=`${pokemon2.sprites.front_shiny}`
}

combat.append(pokemon1I,nom1,pokemon2I,nom2);