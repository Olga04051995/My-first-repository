'use strict';

class DateHelper {

	static getTime (format) {
		let result;

		if (format === 'HH:MM') {
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

	static getDate (format) {
		let result,
			today = new Date(),
			day = today.getDate().toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			month = (today.getMonth() + 1).toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			year = today.getFullYear();

		if (format === 'MM/DD/YY') {
			result = month + '/' + day + '/' + year.toString().slice(-2);
		} else {
			result = day + '.' + month + '.' + year;
		}

		return result;
	}
};