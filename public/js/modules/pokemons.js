

export let pokemon1=await pokemonHasard();
export let pokemon2=await pokemonHasard();
export let pokem1NomFR=`https://pokeapi.co/api/v2/pokemon/${rand}`;
export let pokemon2NomFR;
async function pokemonHasard() {
    let rand =Math.floor(Math.random() * 905)
    let pokemon = `https://pokeapi.co/api/v2/pokemon/${rand}`
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
