function webGLStart() {
	PhiloGL('lesson01-canvas', {
		program: {
			from: 'ids',
			vs: "shader-vs",
			fs: "shader-fs"
		},
		onError: function() {
			alert("An error ocurred while loading the application");
		},
		onLoad: function(app) {
			var gl = app.gl,
				canvas = app.canvas,
				program = app.program,
				camera = app.camera;
			console.log(gl);
			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.clearColor(0, 0, 0, 1);
			gl.clearDepth(1);
			gl.enable(gl.DEPTH_TEST);
			gl.depthFunc(gl.LEQUAL);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		}
	});
}