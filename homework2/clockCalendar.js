'use strict';

document.addEventListener('DOMContentLoaded', init, false);
function init () {
    let clockFormat = 'HH:MM',
        calendarFormat = 'MM/DD/YY',
        currentState = 'clock',
        container = document.querySelector('.clock-calendar');

    container.addEventListener ('contextmenu', function (event) {
        event.preventDefault();
        currentState = currentState === 'clock' ? 'calendar' : 'clock';

        container.innerHTML = getClockCalendarValue(currentState, clockFormat, calendarFormat);
    });

    container.addEventListener ('click', function (event) {
        if (currentState === 'clock') {
            clockFormat = clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
        } else if (currentState === 'calendar') {
            calendarFormat = calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
        }

        container.innerHTML = getClockCalendarValue(currentState, clockFormat, calendarFormat);
    });

    container.addEventListener ('mouseover', function (event) {
        container.classList.add ("hover-background");
    });

    container.addEventListener ('mouseleave', function (event) {
        container.classList.remove ("hover-background");
    });

    function updateClockCalendarValue () {
        container.innerHTML = getClockCalendarValue(currentState, clockFormat, calendarFormat);
    }

    updateClockCalendarValue();
    setInterval(updateClockCalendarValue, 1000);
}

