const checkboxes = document.querySelectorAll('.wrapper input[type = "checkbox"]');

let lastChecked;





function handleCheck(e) {
    //check if they hav shift key down
    //AND check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("CHECKED");
            }
            
            if (inBetween) {
                checkbox.checked = true;
            }
        }) 

    }

    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));