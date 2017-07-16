'use strict';

class ClockCalendar extends HTMLElement {

    get state () {
        return this.getAttribute('state');
    }

    set state (value) {
        this.setAttribute('state', value);
    }

    get calendarFormat () {
        return this.getAttribute('calendarFormat');
    }

    set calendarFormat (value) {
        this.setAttribute('calendarFormat', value);
    }

    get clockFormat () {
        return this.getAttribute('clockFormat');
    }

    set clockFormat (value) {
        this.setAttribute('clockFormat', value);
    }

    attachedCallback () {
        let importContent = document.querySelector("#clockCalendarImport").import;
        this.createShadowRoot().innerHTML = importContent.querySelector('#clockCalendarTemplate').innerHTML;
        this.$container = this.shadowRoot.querySelector('#clock-calendar');
        this.$oldValue = '';
        this.attachEvents();
        this.start();
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[name] = newValue;
            this.updateValue();
        }
    }

    start () {
        this.updateValue();

        this.intervalId = setInterval(() => {
            this.updateValue();
        }, 1000 );
    }

    attachEvents () {
        this.$container.addEventListener('mouseover', () => {
            this.$container.classList.add("hover-background");
        });

        this.$container.addEventListener('mouseleave', () => {
            this.$container.classList.remove("hover-background");
        });

        this.$container.addEventListener('click', () => {
            if (this.state === 'clock') {
                this.clockFormat = this.clockFormat === 'HH:MM' ? 'HH:MM::SS' : 'HH:MM';
            } else {
                this.calendarFormat = this.calendarFormat === 'MM/DD/YY' ? 'DD.MM.YYYY' : 'MM/DD/YY';
            }
        });

        this.$container.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.state = this.state === 'clock' ? 'calendar' : 'clock';
        }, false);
    }

    updateValue () {
        let newValue = this.getValue();

        if (newValue !== this.$oldValue) {
            this.$container.innerHTML = newValue;
            this.$oldValue = newValue;
        }
    }

    getValue () {
        let result;

        if (this.state === 'clock') {
            result = DateHelper.getTime(this.clockFormat);
        } else if (this.state === 'calendar') {
            result = DateHelper.getDate(this.calendarFormat);
        }

        return result;
    }
};