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

let pvPoke1 = document.createElement('progress')
pvPoke1.id='pokeVie1';
pvPoke1.setAttribute('max',`${pokemon1.stats[0]}`)
pvPoke1.setAttribute('value',`${pokemon1.stats[0]}`)
let pvMax1=pokemon1.stats[0];


let pvPoke2 = document.createElement('progress')
pvPoke2.id='pokeVie2';
pvPoke2.setAttribute('max',`${pokemon2.stats[0]}`)
pvPoke2.setAttribute('value',`${pokemon2.stats[0]}`)
let pvMax2=pokemon2.stats[0];




let infoPoke1=document.querySelector('#infoPoke1');
infoPoke1.append(nom1,pvPoke1);
infoPoke1.innerHTML+=`<p>${pokemon1.stats[0]}/${pvMax1}</p>`;

let infoPoke2=document.querySelector('#infoPoke2');
infoPoke2.append(nom2,pvPoke2);
infoPoke2.innerHTML+=`<p>${pokemon2.stats[0]}/${pvMax2}</p>`;
combat.append(pokemon1I,pokemon2I);
console.log(pvPoke1.value);

console.log(pvPoke1.value);
let atkS=document.querySelector('#atks');
for (let i = 0; i < pokemon1.attaques.length; i++) {
    atkS.innerHTML+=`<div class="actionC"><p>${pokemon1.attaques[i][0]}</p></div>`;
    
}