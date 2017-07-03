'use strict';
class View {

	constructor () {

		this.model = new Model('.clock-calendar');      
	}

	addEvents () {
        let container = this.model.container;

   	    container.addEventListener ('mouseover', function (event) {
          	container.classList.add("hover-background");
    	});
    	
        container.addEventListener ('mouseleave', function (event) {
        	container.classList.remove ("hover-background");
    	});
        container.addEventListener('click', () => this.model.onClick(), false);
        container.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.model.onContextmenu(); 
        },false) ;
	}
    start () {
        this.model.updateClockCalendarValue ();
    }
   
};
