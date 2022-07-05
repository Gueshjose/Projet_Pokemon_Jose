let lvl = Math.floor(Math.random() * (96) + 4); //Niveau max moyen aux hazard


/**
 * Création classe pokemon
 */


export class Pokemon {
    constructor() {
        this.nom;
        this.lvl;
        this.sprites=[];
        this.types = [];
        this.attaques = [];
        this.stats = [];
        this.iV = [];
        this.eV = [];
    }
    getNom(){
        return this.nom;
    }
    calculerIV() {//Méthod pour définir les IV's
        for (let i = 0; i <= 5; i++) {
            this.iV[i] = Math.floor(Math.random() * 31);
        }
    }
    calculerEV() { //Méthod pour définir les EV's
        let evMax = 510;
        let rand = 0;
        let i=0;
        while (evMax != 0 && this.eV.length < 5) {
            rand = Math.floor(Math.random() * 253);
            while (rand > evMax || (evMax-rand)<0) {
                rand = Math.floor(Math.random() * 253);
            }
            this.eV[i] = rand;
            evMax-=rand
            i++;

        }
    }
    async calculeStats(stats) { //Methods de calcul des stats
        for (let i = 0; i < stats.length; i++) {
            console.log(stats[i]);
            this.stats[i] = await Math.floor(((this.iV[i] + 2 * stats[i] + (this.eV[i] / 4)) * this.lvl / 100));
            console.log('hi ' + this.stats[i]);
        }
        this.stats[0] += +this.lvl + 10;
    }
    async attaqueHasard(pokemon) { //Methods de d'attaque aux hasard
        let atkPoke;
        let idAtk;
        for (let i = 0; i < 4; i++) {
            idAtk=Math.floor(Math.random()*pokemon.moves.length);
            atkPoke = await pokemonHasard(pokemon.moves[idAtk].move.url);
            this.attaques[i] = await[atkPoke.names[3].name, atkPoke.pp , atkPoke.power, atkPoke.damage_class.name, atkPoke.type.name]
        }
    }
}


export let pokemon1 = new Pokemon; //Création du premier Pokemon
await creaPokemon(pokemon1, lvl); //Instancie le pokemon 1 
export let pokemon2 = new Pokemon; // Création du deuxième Pokemon 
await creaPokemon(pokemon2, lvl); //Instancie le pokemon 2 



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
            pokemon = data;
        })
        .catch(error => {
            console.error(error)
        })
    return pokemon
}


/**
 * Fonction de création de pokemon 
 */
async function creaPokemon(pokemon, niv) {
    let rand = Math.floor(Math.random() * 905 + 1);
    //Choix du pokemon aux hasard

    let pokeObjt = (await  pokemonHasard(`https://pokeapi.co/api/v2/pokemon/${rand}`)); //Appel de l'api Pokeapi
    let nomPoke = (await pokemonHasard(`https://pokeapi.co/api/v2/pokemon-species/${rand}`));
    pokemon.nom =await  nomPoke.names[4].name; //On donne le nom en vf
    pokemon.lvl =await  Math.floor(Math.random() * ((niv + 3) - (niv - 3) + 1) + (niv - 3));//Niveau aux hasard compris aux niveau general à -3 , +3 
    
    /**
     *  Définition du sprite (normal ou shiny)
     */
    if ((Math.floor(Math.random() * 10 + 1) % 10) != 0) {
        pokemon.sprites.push(`${pokeObjt.sprites.back_default}`,`${pokeObjt.sprites.front_default}`);//Sprites normal
    } else {
        pokemon.sprites.push(`${pokeObjt.sprites.back_shiny}`,`${pokeObjt.sprites.front_shiny}`);//sprites shiny
    }
    

    /**
     * ajout du/des type(s)
     */
    for (let i = 0; i < pokeObjt.types.length; i++) {
        pokemon.types=pokeObjt.types[i].type.name;        
    }
    

    pokemon.calculerIV();

    pokemon.calculerEV()
    pokemon.attaqueHasard(pokeObjt);
    let statBase =[pokeObjt.stats[0].base_stat,pokeObjt.stats[1].base_stat,pokeObjt.stats[2].base_stat,pokeObjt.stats[3].base_stat,pokeObjt.stats[4].base_stat,pokeObjt.stats[5].base_stat];
    pokemon.calculeStats(statBase)
}

