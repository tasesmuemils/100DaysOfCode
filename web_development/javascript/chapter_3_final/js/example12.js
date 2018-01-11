///viss kods ir ievietot IIFE lai butu drosi, ka nav konflikts starp variable names.
(function() {
  //Part one: create hotel object and write out the offer details

  //Creat hotel object using literal syntax
  var hotel = {
    name: 'Gladiola',
    roomRate: 450, //amount in dollarrs
    discount: 15, //% discaunt
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }



  //Write out the hotel name, standart rate, discount and the special roomRate
  var hotelName, roomRate, specialRate;  //Declare variables

  hotelName = document.getElementById('hotelName'); //get elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name; //Write hotel name
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //Write room rate
  specialRate.textContent = '$' + hotel.offerPrice(); //Write offer price


  //Otra dala: izrekinat un uzrakstiit beigu datumus piedavajumam
  var expiryMsg; //Message displayed to users
  var today; // Todays date
  var elEnds; //The elemnt that shows the message about the offer ending

  function offerExpires(today) {
    //Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    //Add 7 days time (added in millisecons)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 *1000);
    //Create arrays to hold the names of days / monthNames
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    //Collect the parts of the data to show on the pager
    day = dayNames[weekFromToday.getDay()];
    
  }

}())
