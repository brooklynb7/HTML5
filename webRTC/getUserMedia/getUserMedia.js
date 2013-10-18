(function() {

	window.addEventListener('DOMContentLoaded', function() {
		var isStreaming = false,
			v = document.getElementById('v'),
			c = document.getElementById('c'),
			grey = document.getElementById('grey');
		con = c.getContext('2d');
		w = 600,
		h = 420,
		greyscale = false;

		// Cross browser
		navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
		if (navigator.getUserMedia) {
			// Request access to video only
			navigator.getUserMedia({
					video: true,
					audio: false
				},
				function(stream) {
					// Cross browser checks
					var url = window.URL || window.webkitURL;
					v.src = url ? url.createObjectURL(stream) : stream;
					// Set the video to play
					v.play();
				},
				function(error) {
					alert('Something went wrong. (error code ' + error.code + ')');
					return;
				}
			);
		} else {
			alert('Sorry, the browser you are using doesn\'t support getUserMedia');
			return;
		}

		// Wait until the video stream can play
		v.addEventListener('canplay', function(e) {
			if (!isStreaming) {
				// videoWidth isn't always set correctly in all browsers
				if (v.videoWidth > 0) h = v.videoHeight / (v.videoWidth / w);
				c.setAttribute('width', w);
				c.setAttribute('height', h);
				// Reverse the canvas image
				con.translate(w, 0);
				con.scale(-1, 1);
				isStreaming = true;
			}
		}, false);

		// Wait for the video to start to play
		v.addEventListener('play', function() {
			// Every 33 milliseconds copy the video image to the canvas
			setInterval(function() {
				if (v.paused || v.ended) return;
				con.fillRect(0, 0, w, h);
				con.drawImage(v, 0, 0, w, h);
				if (greyscale) goingGrey();
			}, 333);
		}, false);

		var goingGrey = function() {
			var imageData = con.getImageData(0, 0, w, h);
			var data = imageData.data;
			for (var i = 0; i < data.length; i += 4) {
				var bright = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
				data[i] = bright;
				data[i + 1] = bright;
				data[i + 2] = bright;
			}
			con.putImageData(imageData, 0, 0);
		}

		// When the grey button is clicked, toggle the greyness indicator
		grey.addEventListener('click', function() {
			greyscale = !greyscale;
		}, false);

	})
})();