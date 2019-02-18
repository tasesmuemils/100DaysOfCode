var xhr = new XMLHttpRequest(); //Create XMLHttpRequest object

xhr.onload = function () {
    if (xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);

        for (let i = 0; i < responseObject.events.length; i++) {
            var card, image, location, date;

            card = document.createElement('div');
            card.className = 'event';
            image = document.createElement('img');
            image.setAttribute('src', responseObject.events[i].map);
            card.appendChild(image);
    
            location = document.createElement('p');
            location.textContent = responseObject.events[i].location;
            card.appendChild(location);
    
            date =  document.createElement('p');
            date.textContent = responseObject.events[i].date;
            card.appendChild(date);
            document.getElementById('content').appendChild(card);
        }
    }
};

xhr.open('GET', 'data/data.json', true);
xhr.send(null);