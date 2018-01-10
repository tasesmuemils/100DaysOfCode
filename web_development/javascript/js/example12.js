///viss kods ir ievietot IIFE lai butu drosi, ka nav konflikts starp variable names.
(function() {
  //Part one: create hotel object and write out the offer details

  //Creat hotel object using literal syntax
  var hotel = {
    name: 'Gladiola',
    roomRate: 450, //amount in dollarrs
    discount: 15, //% discaunt
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discaunt) / 100);
      return offerRate;
    }
  }



  //Write out the hotel name, standart rate, discount and the special roomRate
  var hotelName, roomRate, specialRate;  //Declare variables

  hotelName = document.getElementById('hotelName'); //get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('speacialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = '$' + hotel.offerPrice();
})
