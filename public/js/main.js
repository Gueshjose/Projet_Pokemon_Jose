import { pokemon1,pokemon2,Pokemon } from "./modules/pokemons.js";
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
pokemon1I.src=pokemon1.sprites[0]
let nom1=document.createElement('h3')
nom1.innerText=await pokemon1.nom;
nom1.id='pokeNom1';
let pokemon2I=document.createElement('img')
pokemon2I.id='poke2';
pokemon2I.src=pokemon2.sprites[1]

let nom2=document.createElement('h3');
nom2.innerText=await pokemon2.nom;
nom2.id='pokeNom2';



// console.log(pokemonHasard(pokemon1.moves[0].move.url));
// let statPoke1 =await pokemonHasard(pokemon1.moves[0].move.url)
// console.log(statPoke1);



combat.append(pokemon1I,nom1,pokemon2I,nom2);