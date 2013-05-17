function getkataDictOutput(origin, dict){
	var matches = origin.match(/\$[^\s\$]+\$/g);
	for(var i = 0;i<matches.length;i++) {
		var key = matches[i].replace(/\$/g, "");
		origin = replace(origin, key, dict[key]);
	}
	return origin;
}

function replace(origin, key, value) {
	
	var reg = new RegExp("\\$" + key + "\\$");
	origin = origin.replace(reg, value||"");
	return origin;
}