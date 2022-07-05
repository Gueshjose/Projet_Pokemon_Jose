import { pokemon1,pokemon2,Pokemon } from "./modules/pokemons.js";
/**
 * Choix Arène 
 */

let arene = document.querySelector('#combat');//On récupère la div du combat
let randA=Math.floor(Math.random()*5+1);//Choix aux hasard de l'arène
arene.setAttribute('style',`background-image:url('public/images/terrain${randA}.png');`); //On ajoute l'url pour l'arène


/**
 * Création des pokemons 
 */
let pokemon1I=document.createElement('img')// AJoute du sprite du Pokemon 1 dans l'html
pokemon1I.id='poke1'; // On donne un id pour l'image du pokemon 1
pokemon1I.src=pokemon1.sprites[0]; // On ajoute le lien du sprite du pokemon 1

let nom1=document.createElement('h3'); //On créer un text pour le nom du pokemon 1 
nom1.innerText=await pokemon1.nom; // On met le nom du pokemon 1 dans la balise
nom1.id='pokeNom1'; //On donne un id pour le nom du pokemon 1 

let pokemon2I=document.createElement('img')// AJoute du sprite du Pokemon 2 dans l'html
pokemon2I.id='poke2';// On donne un id pour l'image du pokemon 2
pokemon2I.src=pokemon2.sprites[1];// On ajoute le lien du sprite du pokemon 2

let nom2=document.createElement('h3');//On créer un text pour le nom du pokemon 2
nom2.innerText=await pokemon2.nom;// On met le nom du pokemon 2 dans la balise
nom2.id='pokeNom2';//On donne un id pour le nom du pokemon 2


/**
 * Insération de la barre de vie du pokemon 1
 */
let pvPoke1 = document.createElement('progress')
pvPoke1.id='pokeVie1';
pvPoke1.setAttribute('max',`${pokemon1.stats[0]}`)
pvPoke1.setAttribute('value',`${pokemon1.stats[0]}`)
let pvMax1=pokemon1.stats[0];

/**
 * Insération de la barre de vie du pokemon 2
 */

let pvPoke2 = document.createElement('progress')
pvPoke2.id='pokeVie2';
pvPoke2.setAttribute('max',`${pokemon2.stats[0]}`)
pvPoke2.setAttribute('value',`${pokemon2.stats[0]}`)
let pvMax2=pokemon2.stats[0];



/**
 * Insération du texte de la barre de vie du pokemon 1
 */
let infoPoke1=document.querySelector('#infoPoke1');
infoPoke1.append(nom1,pvPoke1);
infoPoke1.innerHTML+=`<p>${pokemon1.stats[0]}/${pvMax1}</p>`;
let pvP1=infoPoke1.querySelector('progress');
/**
 * Insération du text de la barre de vie du pokemon 2
 */
let infoPoke2=document.querySelector('#infoPoke2');
infoPoke2.append(nom2,pvPoke2);
infoPoke2.innerHTML+=`<p>${pokemon2.stats[0]}/${pvMax2}</p>`;
combat.append(pokemon1I,pokemon2I);
let pvP2=infoPoke2.querySelector('progress');


/**
 * Création du menu d'attaque
 */
let atkS=document.querySelector('#atks');
for (let i = 0; i < pokemon1.attaques.length; i++) {
    atkS.innerHTML+=`<div class="actionA"><p>${pokemon1.attaques[i][0]}</p></div>`;
    
}
/**
 * Récupération des divs actions, atks et info 
 */
 let actions=document.querySelector('#actions');
 let atks=document.querySelector('#atks');
 let info=document.querySelector('#info');

let attkA=document.querySelectorAll('.actionA');
/**
 * Récupéation des div des actions 
 */
let actionAtk=document.querySelector('#atk');
let actionSac=document.querySelector('#sac');
let actionPkmn=document.querySelector('#pkmn');
let actionFuir=document.querySelector('#fuir');


/**
 * Au clique pour les attaques
 */
actionAtk.addEventListener('click',function(){
    atks.removeAttribute('class');
    atks.setAttribute('class','actions');
    actions.removeAttribute("class");
    actions.setAttribute('class','invisible');

})

/**
 * Attaque du pokemon 1 au clique 
 */

attkA.forEach(element => {
    element.addEventListener('click',function(){
        info.innerHTML=`<p>${pokemon1.nom} utilise ${element.innerHTML} sur ${pokemon2.nom} et lui inflige ${Math.floor(pokemon1.stats[1]/3)} points de dégats !</p>`;
        info.removeAttribute('class');
        info.setAttribute('class','actions');
        atks.removeAttribute("class");
        atks.setAttribute('class','invisible');
        pokemon2.stats[0]-=(Math.floor(pokemon1.stats[1]/3));

        pvP2.setAttribute('value',`${pokemon2.stats[0]}`)
        infoPoke2.querySelector('p').innerHTML=`${pokemon2.stats[0]}/${pvMax2}`;
        setTimeout(() => {
            let randAt=Math.floor(Math.random()*pokemon2.attaques.length);
            info.innerHTML=`<p>${pokemon2.nom} utilise ${pokemon2.attaques[randAt][0]} sur ${pokemon1.nom} et lui inflige ${Math.floor(pokemon2.stats[1]/3)} points de dégats !</p>`;
            pokemon1.stats[0]-=(Math.floor(pokemon2.stats[1]/3));
            pvP1.setAttribute('value',`${pokemon1.stats[0]}`)
            infoPoke1.querySelector('p').innerHTML=`${pokemon1.stats[0]}/${pvMax1}`;
        }, 1500);
    
    })
});


/**
 * Au clique pour fuir
 */
actionFuir.addEventListener('click',function(){
    info.innerHTML='<p>Vous ne pouvez pas fuir !</p>';
    info.removeAttribute('class');
    info.setAttribute('class','actions');
    actions.removeAttribute("class");
    actions.setAttribute('class','invisible');

})

/**
 * Au clique de l'action Sac
 */
 actionSac.addEventListener('click',function(){
    info.innerHTML="<p>Vous n'avez pas d'objets !</p>";
    info.removeAttribute('class');
    info.setAttribute('class','actions');
    actions.removeAttribute("class");
    actions.setAttribute('class','invisible');
 });

/**
 * Au clique de l'action Pokémon
 */
actionPkmn.addEventListener('click',function(){
    info.innerHTML="<p>Vous n'avez pas d'autre pokemon !</p>";
    info.removeAttribute('class');
    info.setAttribute('class','actions');
    actions.removeAttribute("class");
    actions.setAttribute('class','invisible');

})

/**
 * Au clique de l'écran de message
 */
info.addEventListener('click',function(){

    actions.removeAttribute('class');
    actions.setAttribute('class','actions');
    info.removeAttribute("class");
    info.setAttribute('class','invisible');
})

/**
 * On met fin au combat
 */
let fin=setInterval(() => {
    if(pokemon1.stats[0]<=0) {
        info.removeAttribute('class');
        info.setAttribute('class','actions');
        info.removeEventListener('click',function(){})
        atks.removeAttribute("class");
        atks.setAttribute('class','invisible');
        actions.removeAttribute("class");
        actions.setAttribute('class','invisible');
        clearInterval(fin);
        setTimeout(() => {
        info.innerHTML=`<p>${pokemon1.nom} n'as plus de PV ! Vous avez perdus ! </p>`;
            
        }, 1000);

    }else if(pokemon2.stats[0]<=0) {
        info.removeAttribute('class');
        info.setAttribute('class','actions');
        info.removeEventListener('click',function(){})
        atks.removeAttribute("class");
        atks.setAttribute('class','invisible');
        actions.removeAttribute("class");
        actions.setAttribute('class','invisible');
        clearInterval(fin);
        setTimeout(() => {
        info.innerHTML=`<p>${pokemon2.nom} n'as plus de PV ! Vous avez gagnés ! </p>`;
            
        }, 1000);

    }
}, 1000);