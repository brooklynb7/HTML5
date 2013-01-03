var solution_experience = {};

solution_experience.profileBar = function(containerId){
	this.title = "Test";
	this.container = solution_experience.profileBar.$(containerId);
};

solution_experience.profileBar.$ = function(containerId){
	return document.getElementById(containerId);
};

solution_experience.profileBar.loadCss = function(file){
    var head = document.getElementsByTagName('head').item(0);
    var css = document.createElement('link');
    css.href = file;
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.id = 'loadCss';
    head.appendChild(css);
};

solution_experience.profileBar.prototype.render = function(){
	solution_experience.profileBar.loadCss("http://localhost:8001/HTML5/solution_experience/css/experienceBar.css");
	var barHtml = "<div class='experienceBar'><div>Brooklyn</div><div>My Solutions</div><div>0</div><div>create</div></div>";
	this.container.innerHTML = barHtml;
};