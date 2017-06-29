'use strict';

function updateClockCalendarValue (currentValue, container, currentState, clockFormat, calendarFormat) {
        currentValue = getClockCalendarValue(currentState, clockFormat, calendarFormat);

        if (currentValue !== container.innerHTML) {
        container.innerHTML = currentValue;
    }
}

function getClockCalendarValue (currentState, clockFormat, calendarFormat) {
	let result;

	if (currentState === 'clock') {
		result = getTime(clockFormat);
	} else if (currentState === 'calendar') {
		result = getDate(calendarFormat);
	}
	
	return result;
}

function getTime (clockFormat) {
	let result;

	if (clockFormat === 'HH:MM') {
		result = new Date().toLocaleTimeString('en-US', {
			hour12: false,
			hour: "numeric",
			minute: "numeric"
		});
	} else {
		result = new Date().toLocaleTimeString('en-US', {
			hour12: false,
			hour: "numeric",
			minute: "numeric",
			second: "numeric"
		});
	}
	
	return result;
}

function getDate (calendarFormat) {
	let result,
		today = new Date(),
		day = today.getDate().toLocaleString('en-US', {
			minimumIntegerDigits: 2
		}),
		month = (today.getMonth() + 1).toLocaleString('en-US', {
			minimumIntegerDigits: 2
		}),
		year = today.getFullYear();

	if (calendarFormat === 'MM/DD/YY') {
		result = month + '/' + day + '/' + year.toString().slice(-2);
	} else {
		result = day + '.' + month + '.' + year;
	}

	return result;
}