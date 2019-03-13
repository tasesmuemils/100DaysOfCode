/*Created by Emils Bisenieks from Wes Bos JS30 projects - 02 CLOCK */

//Capture time hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); //sets date
    const seconds = now.getSeconds(); //gets seconds from date
    const secondsDegrees = ((seconds / 60) * 360) + 90; //This calulates how much degrees should move time hand
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //updates css transform degrees
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); //Sets interval 1 second