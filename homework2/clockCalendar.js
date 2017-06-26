'use strict';

let clockCalendar = function() {

    let clockFormat = 'HH:MM',
        calendarFormat = 'MM/DD/YY',
        currentState = 'clock';

    function init (container, clockElementId, calendarElementId) {
        let containerElement = document.getElementById(container),
            clockElement = document.getElementById(clockElementId),
            calendarElement = document.getElementById(calendarElementId);

        initBaseContainerEvents(containerElement, clockElement, calendarElement);
        initializeClock(clockElement);
        initializeCalendar(calendarElement);
    }

    function initBaseContainerEvents (containerElement, clockElement, calendarElement) {
        containerElement.addEventListener("contextmenu", function(event) {
            currentState = currentState === 'clock' ? 'calendar' : 'clock';
            toggleState(currentState, clockElement, calendarElement);
        });

        containerElement.addEventListener("mouseover", function() {
            containerElement.style.backgroundColor = 'darkgray';
        });

        containerElement.addEventListener("mouseleave", function() {
            containerElement.style.backgroundColor = 'black';
        });
    }

    function toggleState (state, clockElement, calendarElement) {
        if (state === 'clock') {
            calendarElement.style.display = 'none';
            clockElement.style.display = 'block';
        } else {
            clockElement.style.display = 'none';
            calendarElement.style.display = 'block';
        }
    }

    function initializeClock (clockElement) {
        clockElement.innerHTML = getTime(clockFormat)

        let clockIntervalId = setInterval(function() {
            clockElement.innerHTML = getTime(clockFormat)
        }, 1000);

        clockElement.addEventListener("click", function(event) {
            clockFormat = clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
            clockElement.innerHTML = getTime(clockFormat)
        });
    }

    function initializeCalendar (calendarElement) {
        let calendarDayInterval = 60000 * 60 * 24;
        calendarElement.innerHTML = getDate(calendarFormat);

        let calendarIntervalId = setInterval(function() {
            calendarElement.innerHTML = getDate(calendarFormat);
        }, calendarDayInterval);

        calendarElement.addEventListener("click", function(event) {
            calendarFormat = calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
            calendarElement.innerHTML = getDate(calendarFormat);
        });
    }

    function getTime (format) {
        let result;

        switch (format) {
            case "HH:MM":
                result = new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric"
                });
                break;
            case "HH:MM:SS":
                result = new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });
                break;
        }

        return result;
    }

    function getDate (format) {

        let result,
            today = new Date(),
            day = today.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 }),
            month = (today.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 }),
            year = today.getFullYear();

        switch (format) {
            case 'MM/DD/YY':
                result = month + '/' + day + '/' + year.toString().slice(-2);
                break;
            case 'DD.MM.YYYY':
                result = day + '.' + month + '.' + year;
                break;
        }

        return result;

    }

    return {
        initialize: init
    }
}();
