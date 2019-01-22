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
    }
];

var card = document.getElementsByClassName('card');
var cardImage = document.getElementsByClassName('cardImage');
var cardTitle = document.getElementsByClassName('cardTitle');
var cardPrice = document.getElementsByClassName('cardPrice');


for (var i = 0; i < games.length; i++) {
    cardImage[i].src = games[i].src;
    cardTitle[i].textContent = games[i].title;
    cardPrice[i].textContent = games[i].price;
};