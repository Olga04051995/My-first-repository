describe('DateHelper', function () {

    it('getTime call with HH:MM parameter should return time in HH:MM format', function () {
    	let actualResult = DateHelper.getTime('HH:MM');
    	let expectedResult = new Date().toLocaleTimeString('en-US', {
                hour12: false,
                hour: "numeric",
                minute: "numeric"
            });

        expect(actualResult).toBe(expectedResult);
    });

    it('getTime call with HH:MM:SS parameter should return time in HH:MM:SS format', function () {
    	let actualResult = DateHelper.getTime('HH:MM:SS');
    	let expectedResult = new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
            });

        expect(actualResult).toBe(expectedResult);
    });

    it('getDate call with MM/DD/YY parameter should return time in MM/DD/YY format', function () {
    	let today = new Date(),
			day = today.getDate().toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			month = (today.getMonth() + 1).toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			year = today.getFullYear(),
			shortYear = year.toString().slice(-2);

    	let actualResult = DateHelper.getDate('MM/DD/YY');
    	let expectedResult = `${month}/${day}/${shortYear}`;

        expect(actualResult).toBe(expectedResult);
    });

    it('getDate call with DD/MM/YYYY parameter should return time in DD/MM/YYYY format', function () {
    	let today = new Date(),
			day = today.getDate().toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			month = (today.getMonth() + 1).toLocaleString('en-US', {
				minimumIntegerDigits: 2
			}),
			year = today.getFullYear();

    	let actualResult = DateHelper.getDate('DD/MM/YYYY');
    	let expectedResult = `${day}.${month}.${year}`;

        expect(actualResult).toBe(expectedResult);
    });
})