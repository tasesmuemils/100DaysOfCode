//I will create a videogame site where user will be able to check games, add new game also.

const games = [{
        id: 1,
        src: 'https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2019.jpg',
        title: 'Fifa 19sdasd',
        price: '60$'
    },
    {
        id: 2,
        src: 'https://assets1.ignimgs.com/2016/10/18/red-dead-redemption-2-buttonjpg-f9ad35.jpg',
        title: 'Red Dead Redemption 2',
        price: '65$'
    },
    {
        id: 3,
        src: 'https://i.ytimg.com/vi/a3o_ZKWi-OU/maxresdefault.jpg',
        title: 'Mario Kart 8',
        price: '50$'
    },
    {
        id: 4,
        src: 'https://cdn.europosters.eu/image/750/posters/gears-of-war-armour-i30747.jpg',
        title: 'Gears of War',
        price: '30$'
    },
    {
        id: 5,
        src: 'https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/article_width/public/2018/08/spiderman_hostile_takeover_mmpb_cvr_1.2.pdf-1.jpg?itok=qoYrvGvR',
        title: 'Spider-Man',
        price: '70$'
    },
    {
        id: 6,
        src: 'https://images-na.ssl-images-amazon.com/images/I/81KcrDGGMxL.jpg',
        title: 'Halo 5',
        price: '35$'
    },
    {
        id: 7,
        src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg',
        title: 'Smash Bros',
        price: '60$'
    },
    {
        id: 8,
        src: 'https://media.playstation.com/is/image/SCEA/god-of-war-box-art-01-ps4-us-27mar18?$native_nt$',
        title: 'Gods of War',
        price: '80$'
    }
];

/*var card = document.getElementsByClassName('card');
var cardImage = document.getElementsByClassName('cardImage');
var cardTitle = document.getElementsByClassName('cardTitle');
var cardPrice = document.getElementsByClassName('cardPrice');

(function () {
    for (var i = 0; i < games.length; i++) {
        cardImage[i].src = games[i].src;
        cardTitle[i].textContent = games[i].title;
        cardPrice[i].textContent = games[i].price;
    }; 
}());
*/

//I use immediately invoked function expression(IIFE) just to wrap code
//This function loops threw array, take all necessary things from array and set content in page
//Example above was first approach how I managed this loop, before I knew about TEMPLATE STRINGS

(function () {
    for (let i = 0; i < games.length; i++) {
        var contentProducts = document.getElementById('contentProducts');
        var card = document.createElement('div');
        var template = `<img class="cardImage" src="${games[i].src}" alt="">
                    <h3 class="cardTitle">${games[i].title}</h3>
                    <p class="cardPrice">${games[i].price}</p>`;
        card.className = 'card';
        card.innerHTML = template;
        contentProducts.appendChild(card);
    }
}());

//Form modal
//Click on button, fill out the form
var formButton = document.getElementById('formButton');

function formModal() {
    var formModal = document.getElementById('formModal');
    formModal.style.display = 'grid';
}

formButton.addEventListener('click', formModal, false);

