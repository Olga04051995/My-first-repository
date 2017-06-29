'use srtict';

document.addEventListener('DOMContentLoaded', init, false);
function init () {
    let calendarFormat = 'MM/DD/YY',
        currentState = 'clock',
        clockFormat = 'HH:MM',
        currentValue,
        container;

        container = document.querySelector('.clock-calendar');

    container.addEventListener ('contextmenu', function (event) {
        event.preventDefault();
        currentState = currentState === 'clock' ? 'calendar' : 'clock';
        
        updateClockCalendarValue();
    });

    container.addEventListener ('click', function (event) {
        if (currentState === 'clock') {
            clockFormat = clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
        } else if (currentState === 'calendar') {
            calendarFormat = calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
        }

        updateClockCalendarValue();
    });

    container.addEventListener ('mouseover', function (event) {
        container.classList.add ("hover-background");
    });

    container.addEventListener ('mouseleave', function (event) {
        container.classList.remove ("hover-background");
    });

    function updateClockCalendarValue () {
        currentValue = getClockCalendarValue(currentState, clockFormat, calendarFormat);

        if (currentValue !== container.innerHTML) {
            container.innerHTML = currentValue;
        }    
    }

    updateClockCalendarValue();

    setInterval(updateClockCalendarValue, 1000);
}