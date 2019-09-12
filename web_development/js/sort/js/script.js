const button = document.getElementById('getData');
const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonList = document.getElementById('pokemonList');
// const apiURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000';


function getData() {
    for (let i = 1; i < 152; i++) {
        fetch(apiURL + i)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const listItem = document.createElement('div');
                const itemName = document.createElement('li');
                itemName.textContent = data.name;
                listItem.appendChild(itemName);
                pokemonList.appendChild(listItem);

                const pokeImgSrc = data.sprites.front_default;
                const pokeImage = document.createElement('img');
                pokeImage.src = pokeImgSrc;
                listItem.appendChild(pokeImage);

            })

    }

}

button.addEventListener('click', getData);



// for (let i = 0; i < pokemonArray.length; i++) {
//     const listItem = document.createElement('div');
//     const itemName = document.createElement('li');
//     itemName.textContent = pokemonArray[i].name;
//     listItem.appendChild(itemName);
//     pokemonList.appendChild(listItem);


//     fetch(pokemonArray[i].url)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(pokData) {
//             const pokeImgSrc = pokData.sprites.front_default;
//             const pokeImage = document.createElement('img');
//             pokeImage.src = pokeImgSrc;
//             listItem.appendChild(pokeImage);  
//         })
// }