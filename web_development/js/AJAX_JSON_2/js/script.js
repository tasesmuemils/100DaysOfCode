// Create event listener
document.getElementById("button")
    .addEventListener('click', loadText);

function loadText() {
    //Create XHR Object
    const xhr = new XMLHttpRequest();
    //console.log(xhr);
    // OPEN - type, url/file, async
    xhr.open('GET', 'sample.txt', true);

    // OPTIONAL - used for loaders
    /*xhr.onprogress = function() {
        console.log("Ready state: " + xhr.readyState);
    }*/

    xhr.onload = function () {
        if (this.status == 200) {
            document.getElementById('text').textContent = this.responseText;
        } else if (this.status == 404) {
            document.getElementById('text').textContent = "NOT FOUND!";
        }
    }

    //SENDs REQUEST
    xhr.send();
}