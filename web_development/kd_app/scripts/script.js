

var url = "https://tasesmuemils.github.io/json_test/kg_data.json";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));


