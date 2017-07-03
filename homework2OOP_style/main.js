'use strict';

document.addEventListener("DOMContentLoaded", function () {
    let clockCalendar = new View();    
      
    clockCalendar.addEvents();
    clockCalendar.start();
     setInterval(() => clockCalendar.start(), 500);
}, false);