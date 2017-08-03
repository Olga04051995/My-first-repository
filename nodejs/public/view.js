class View {
    constructor() {
        this.dateBtn = document.querySelector('#date-btn');
        this.timeBtn = document.querySelector('#time-btn');
        this.dateContainer = document.querySelector('.date-container');
        this.timeContainer = document.querySelector('.time-container');
    }

    init() {
        this.dateBtn.addEventListener('click', () => {
            HttpRequest.get('/date', true, (date) => {
                this.dateContainer.innerHTML = date;
            });
        });

        this.timeBtn.addEventListener('click', () => {
            HttpRequest.get('/time', true, (time) => {
                this.timeContainer.innerHTML = time;
            });
        });
    }
}