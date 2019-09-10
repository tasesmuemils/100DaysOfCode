

const dropdown = document.querySelector('#coutriesList');
const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const moreInfo = document.querySelector('#info');


(function() {
    fetch(countriesAPI)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const addOption = document.createElement('option');
                addOption.textContent = data[i].name;
                addOption.classList.add('countriesName');
                dropdown.appendChild(addOption);


                dropdown.addEventListener('change', function() {
                    var index = dropdown.selectedIndex - 1;
                    if(index === i) {
                        console.log(i, index);
                        moreInfo.innerHTML = `
                            <img src="${data[index].flag}" alt="">
                        `
                    }
                })
            }
        })
}());
