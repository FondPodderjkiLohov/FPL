window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile

			//Draggable.create('.galleвry', {
				//bounds: 'body',
				//inertia: true
			//})
			
		}

	}, 200)
}