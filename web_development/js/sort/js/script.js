const gen1Data = document.getElementById('gen1Data');
const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonList = document.getElementById('pokemonList');

//Gets data from pokemon API
//Empty array to collect promises
const promises = [];

(function () {

    //Loop threw every pokemon url and get promise of it
    for (let i = 1; i < 152; i++) {
        promises.push(fetch(apiURL + i)
            .then(function (response) {
                return response.json();
            }))
    }

    //Gets data from API
    Promise.all(promises).then(function (data) {
        //Loops threw every pokemon on collects information
        for (i = 0; i < data.length; i++) {

            const listItem = document.createElement('li');

            const listItemFigure = document.createElement('figure');
            const pokeImage = document.createElement('img');
            const pokeImgSrc = data[i].sprites["front_default"];
            pokeImage.src = pokeImgSrc;
            pokeImage.classList.add('pokemon-img');
            listItemFigure.appendChild(pokeImage);
            listItem.appendChild(listItemFigure);

            const listItemInfo = document.createElement('div');
            listItemInfo.classList.add('pokemon-description');
            listItemInfo.innerHTML = `
                        <h6><span>#</span>${data[i].id}</h6>
                        <h5 class="pokemon-name">${data[i].name}</h5>
                    `;

            listItem.appendChild(listItemInfo);
            pokemonList.appendChild(listItem);

            const pokeAbilities = document.createElement('div');
            pokeAbilities.classList.add('pokemon-abilities');
            listItemInfo.appendChild(pokeAbilities);

            //This loops threw types and if there is one, adds element to the page
            //Also, checks name and givs background color to that element
            for (let z = 0; z < data[i].types.length; z++) {
                const pokeAbility = document.createElement('h6');
                pokeAbility.classList.add('pokemon-type');
                pokeAbility.textContent = data[i].types[z].type.name;
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
        }
    })
}());



//SEARCH
const searchResult = document.getElementById('searchBar');

function filterNames() {
    //Search value, list items, pokemon names
    const filterValue = searchResult.value.toLowerCase();
    const pokemonListLi = pokemonList.querySelectorAll('li');
    const pokemonListNames = pokemonList.querySelectorAll('.pokemon-name');

    for (let i = 0; i < pokemonListNames.length; i++) {
        //if value is not empty, list item is hidden
        if (pokemonListNames[i].textContent.toLowerCase().indexOf(filterValue) > -1) {
            pokemonListLi[i].style.display = '';
        } else {
            pokemonListLi[i].style.display = 'none';
        }
    }
}
searchResult.addEventListener('keyup', filterNames);


//SORT
const sortOptions = document.getElementById('sortOptions');

function sorting() {
    //Selects all li
    const arraySortNode = document.querySelectorAll('li');
    //convert NodeList to Array
    arraySort = [...arraySortNode];


    //Sort by pokemon name and #id
    arraySort.sort(function (a, b) {
        //A-Z
        if (sortOptions.selectedIndex === 1) {
            if (a.lastElementChild.firstElementChild.nextElementSibling.textContent < b.lastElementChild.firstElementChild.nextElementSibling.textContent) {
                return -1;
            }
            //Z-A
        } else if (sortOptions.selectedIndex === 2) {
            if (a.lastElementChild.firstElementChild.nextElementSibling.textContent > b.lastElementChild.firstElementChild.nextElementSibling.textContent) {
                return -1;
            }
            //Lowest number (first)
        } else if (sortOptions.selectedIndex === 3) {
            return parseInt(a.lastElementChild.firstElementChild.lastChild.textContent) - parseInt(b.lastElementChild.firstElementChild.lastChild.textContent);
            //Highest number (first)
        } else if (sortOptions.selectedIndex === 4) {
            return parseInt(b.lastElementChild.firstElementChild.lastChild.textContent) - parseInt(a.lastElementChild.firstElementChild.lastChild.textContent);
        }
    });

    //Applays li from array to HTML ul
    pokemonList.innerHTML = '';
    for (let i = 0; i < arraySort.length; i++) {
        pokemonList.appendChild(arraySort[i]);
    }

}

sortOptions.addEventListener('change', sorting);

//FILTER
const filterButtonsNode = document.querySelectorAll('.filterButton');
const filterButtonsArray = [...filterButtonsNode];


function filterType() {
    const filterButtonText = this.textContent.toLowerCase();
    const liFilterNodeList = document.querySelectorAll('li');
    const liFilterArray = [...liFilterNodeList];

    function filterTypes(type) {
        const typesNodeList = type.querySelectorAll('.pokemon-type');
        const typesArray = [...typesNodeList];

        for (let i = 0; i < typesArray.length; i++) {
            if (typesArray[i].textContent == filterButtonText) {
                return typesArray[i];   
            }
        }
        
    }

    let results = [];
    results = liFilterArray.filter(filterTypes);
    console.log(results);
    
    
}

filterButtonsArray.forEach(function (filterButton) {
    filterButton.addEventListener('click', filterType);
})