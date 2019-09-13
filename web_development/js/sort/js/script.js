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
                const listItem = document.createElement('li');

                const listItemFigure = document.createElement('figure');
                const pokeImage = document.createElement('img');
                const pokeImgSrc = data.sprites.front_default;
                pokeImage.src = pokeImgSrc;
                pokeImage.classList.add('pokemon-img');
                listItemFigure.appendChild(pokeImage);
                listItem.appendChild(listItemFigure);

                const listItemInfo = document.createElement('div');
                listItemInfo.innerHTML = `
                    <h5 class="pokemon-name">${data.name}</h5>
                `;
                listItem.appendChild(listItemInfo);

                pokemonList.appendChild(listItem);

                for (let i = 0; i < 3; i++) {
                    console.log(data.types[i].type.name);
                    
                }
            })

    }

}

button.addEventListener('click', getData);
