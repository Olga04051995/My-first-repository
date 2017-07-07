'use strict';
class Model { 

	constructor (selector) {
		this.clockFormat = 'HH:MM';
        this.calendarFormat = 'MM/DD/YY';
        this.currentState = 'clock';
        this.currentValue;
        this.container = document.querySelector(selector);
	}

	getClockCalendarValue () {
		let result;

		if (this.currentState === 'clock') {
			result = this.getTime();
		} else if (this.currentState === 'calendar') {
			result = this.getDate();
		}
	
		return result;
	}

	getTime () {
		let result;

		if (this.clockFormat === 'HH:MM') {
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

	getDate () {
		let result,
			today = new Date(),
			day = today.getDate().toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			month = (today.getMonth() + 1).toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			year = today.getFullYear();

		if (this.calendarFormat === 'MM/DD/YY') {
			result = month + '/' + day + '/' + year.toString().slice(-2);
		} else {
			result = day + '.' + month + '.' + year;
		}

		return result;
	}

	onContextmenu (event) {
        if (this.currentState === 'clock') {
        	this.currentState = 'calendar';	
        } else if (this.currentState === 'calendar') {
        	this.currentState = 'clock';
        }

        this.updateClockCalendarValue ();
    }

    onClick (event) {

        if (this.currentState === 'clock') {
           	this.clockFormat = this.clockFormat === 'HH:MM' ? 'HH:MM:SS' : 'HH:MM';
        } else if (this.currentState === 'calendar') {
           	this.calendarFormat = this.calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
        }

    	this.updateClockCalendarValue(); 	
    }

    updateClockCalendarValue () {
       	this.currentValue = this.getClockCalendarValue();

        if (this.currentValue !== this.container.innerHTML) {
        this.container.innerHTML = this.currentValue;
    	} 
	}

	interval () {
		setInterval(() => this.updateClockCalendarValue (), 1000);
	}
};