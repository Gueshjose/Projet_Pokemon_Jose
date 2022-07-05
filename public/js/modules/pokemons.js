

let rand1=Math.floor(Math.random() * 905+1);
let rand2=Math.floor(Math.random() * 905+1);

export let pokemon1=await pokemonHasard(`https://pokeapi.co/api/v2/pokemon/${rand1}`); //Création du premier Pokemon
export let pokemon2=await pokemonHasard(`https://pokeapi.co/api/v2/pokemon/${rand2}`);// Création du deuxième Pokemon 
export let pokemon1NomFr = (await pokemonHasard(`https://pokeapi.co/api/v2/pokemon-species/${rand1}`)).names[4].name;//Récupération du nom FR du pokemon 1
export let pokemon2NomFr = (await pokemonHasard(`https://pokeapi.co/api/v2/pokemon-species/${rand2}`)).names[4].name;//Récupération du nom FR du pokemon 2
// pokemon1NomFr= pokemon1NomFr.names[4].name
// pokemon2NomFr= pokemon1NomFr.names[4].name

console.log(pokemon1NomFr);
console.log(pokemon2NomFr);

/**
 * 
 * Fonction pour choisir un pokemon aux hasard
 */
export async function pokemonHasard(pokemon) {
    await fetch(pokemon)
        .then(response => {
            const responseJson = response.json()
            return responseJson
        })
        .then(data => {
            pokemon= data;
        })
        .catch(error => {
            console.error(error)
        })
            return pokemon
}


/**
 * Fonctions de création des stats du pokemon
 */

/**
 * Fonction pour les pv
 */

/**
 * Fonction pour les autres stats
 */

export class Pokemon{
    constructor(){
        this.nom;
        this.lvl;
        this.sprite;
        this.types=[];
        this.attaques=[];
        this.stats=[];
        this.iV=[];
        this.eV=[];
    }
    calculerIV(){
        for (let i = 0; i <= 5; i++) {
            this.iV[i]=Math.floor(Math.random()*31);            
        }
    }
    calculerEV(pv,atk,atkS,def,defS,vit){
        let evMax=510;
        let rand=0;
        while (evMaw!=0 && this.eV.length < 5) {
               rand=Math.floor(Math.random()*253);
               while (rand>evMax) {
                rand=Math.floor(Math.random()*253);
               }   
               this.eV[i]=rand;    
            
        }
    }
    calculeStats(stats){
        for (let i = 0; i < stats.length; i++) {
            this.stats[i]=Math.floor(((this.iV[i]+ 2 * stats[i] +(this.eV[i]/4))*this.lvl/100));            
        }
        this.stats[0]+=+this.lvl+10;
    }
    attaqueHasard(pokemon){
        let atkPoke;
        for (let i = 0; i < 4; i++) {
            atkPoke =pokemonHasard(pokemon.moves[0].move.url);
            this.attaques[i]=[atkPoke.names[3].name,atkPoke.pp,,atkPoke.power,atkPoke.damage_class.name,atkPoke.type.name]
        }
    }
}