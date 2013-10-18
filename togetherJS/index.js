$(document).ready(function () {
	$("#btn").on("click", function(){
		$("body").append($("<div><input type='checkbox'/>"+ $("#text").val() +"</div>"));
	});
});

