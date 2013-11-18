$(document).ready(function() {
	$(".nav-tabs > li").on("click", function() {
		$(".nav-tabs > li").removeClass("active");
		$(this).addClass("active");
	});
	loadBodyContent("overall.html");
});

function loadBodyContent(url) {
	var bi = new window.ui.BusyIndicator($(".tab-content"));
	bi.show();
	$.ajax({
		context: this,
		type: 'get',
		cache: false,
		dataType: "html",
		url: "content/" + url,
		success: function(htmlContent) {
			$(".tab-content").html(htmlContent);
		},
		complete: function() {
			bi.hide();
		}
	});
}

Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month 
		"d+": this.getDate(), //day 
		"h+": this.getHours(), //hour 
		"m+": this.getMinutes(), //minute 
		"s+": this.getSeconds(), //second 
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
		"S": this.getMilliseconds() //millisecond 
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}