const image=document.getElementById("pokemonsprite");

// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response=>{
//         if(!response.ok){
//             throw new Error("Could not find data");
//         }
//         return response.json();
//     })
//     .then(values=>{
//         image.src=values.sprites.front_default;
//         image.style.display = 'block';
//         console.log(values);
//     })
//     .catch(error=>console.log(error));
async function searchPokemon() {
    const name=document.getElementById("text").value.toLowerCase();
    try {
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok){
            throw new Error("Could not find data");
        }
        const values=await response.json();
        image.src=values.sprites.front_default;
        image.style.display = 'block';

    } catch (error) {
        document.getElementById("error").innerHTML=error;
    }
}



// function searchPokemon() {
    
// }