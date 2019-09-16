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
                listItemInfo.classList.add('pokemon-description');
                listItemInfo.innerHTML = `
                    <h5 class="pokemon-name">${data.name}</h5>
                `;
                listItem.appendChild(listItemInfo);

                pokemonList.appendChild(listItem);

                const pokeAbilities = document.createElement('div');
                pokeAbilities.classList.add('pokemon-abilities');
                listItemInfo.appendChild(pokeAbilities);

                for (let z = 0; z < data.types.length; z++) {
                    const pokeAbility = document.createElement('h6');
                    pokeAbility.textContent = data.types[z].type.name;
                    pokeAbilities.appendChild(pokeAbility);
                    listItemInfo.appendChild(pokeAbilities);


                    const switchValue = pokeAbility.textContent;
                    switch (switchValue) {
                        case 'grass':
                            pokeAbility.style.backgroundColor = '#9bcc50';
                            break;

                        case 'poison':
                            pokeAbility.style.backgroundColor = '#b97fc9';
                            break;

                        case 'fire':
                            pokeAbility.style.backgroundColor = '#fd7d24';
                            break;

                        case 'flying':
                            pokeAbility.style.background = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)';
                            pokeAbility.style.backgroundColor = '#3dc7ef';
                            break;

                        case 'water':
                            pokeAbility.style.backgroundColor = '#4592c4';
                            break;

                        case 'ice':
                            pokeAbility.style.backgroundColor = '#51c4e7';
                            break;

                        case 'bug':
                            pokeAbility.style.backgroundColor = '#729f3f';
                            break;

                        case 'normal':
                            pokeAbility.style.backgroundColor = '#a4acaf';
                            break;

                        case 'electric':
                            pokeAbility.style.backgroundColor = '#eed535';
                            break;

                        case 'ground':
                            pokeAbility.style.background = 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)';
                            pokeAbility.style.backgroundColor = '#f7de3f';
                            break;

                        case 'fairy':
                            pokeAbility.style.backgroundColor = '#fdb9e9';
                            break;

                        case 'fighting':
                            pokeAbility.style.backgroundColor = '#d56723';
                            break;

                        case 'psychic':
                            pokeAbility.style.backgroundColor = '#f366b9';
                            break;

                        case 'steel':
                            pokeAbility.style.backgroundColor = '#9eb7b8';
                            break;

                        case 'ghost':
                            pokeAbility.style.backgroundColor = '#7b62a3';
                            break;

                        case 'dragon':
                            pokeAbility.style.background = 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)';
                            pokeAbility.style.backgroundColor = '#53a4cf';
                            break;

                        case 'rock':
                            pokeAbility.style.backgroundColor = '#a38c21';
                            break;
                    }
                }

            })

    }

}

button.addEventListener('click', getData);
