(function(){

	function getUrlParam(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r!=null) return unescape(r[2]); return null; 
	}

	function createIframeElement(frameName, src, style){
		var IframeObj = (/MSIE (6|7|8)/).test(navigator.userAgent) ? document.createElement("<iframe name='"+ frameName +"'>"):
    					document.createElement('iframe');
		IframeObj.width = "100%";
		IframeObj.frameBorder = "0";
		IframeObj.scrolling = "no";
		IframeObj.allowtransparency = true;
		IframeObj.name = frameName;
		IframeObj.src= src;
		IframeObj.style.cssText = style;

		return IframeObj;
	}

	function getElementsByClassName(node, classname) { // for ie8
	    var a = [];
	    var re = new RegExp('(^| )'+classname+'( |$)');
	    var els = node.getElementsByTagName("*");
	    for(var i=0,j=els.length; i<j; i++)
	        if(re.test(els[i].className))a.push(els[i]);
	    return a;
	}

	/*---------------------------public------------------------------*/
	
	window.solution_experience_plugin = {};

	solution_experience_plugin.createExperienceBar = function(containerId){
		document.getElementById(containerId).appendChild(createIframeElement("experience_bar",
			"http://localhost:8001/HTML5/solution_experience/profileBar.html",
			"width: 300px;height: 32px;visibility: visible;"));
	};

	solution_experience_plugin.createExperienceSolutionBar = function(containerId){
		var iframeElement = createIframeElement("experience_solution_bar",
			"http://localhost:8001/HTML5/solution_experience/experienceSolutionBar.html",
			"width: 250px;height: 80px;visibility: visible; position:absolute;top:50px;left:58px;display:none;");
		iframeElement.id = "experienceSolutionBar";
		document.getElementById(containerId).appendChild(iframeElement);
	};

	solution_experience_plugin.createAddSolutionBtns = function(className, solutionIdAttr){
		var solutionElements =  getElementsByClassName(document.body, className);
		for(var i = 0, c = solutionElements.length; i < c; i++){
			solutionElements[i].appendChild(createIframeElement("experience_solution_frame_" + solutionElements[i].attributes[solutionIdAttr].value,
				"http://localhost:8001/HTML5/solution_experience/addSolution.html?id=" + solutionElements[i].attributes[solutionIdAttr].value ,
				"width: 256px;height: 40px;visibility: visible;"));
		}
	};

	solution_experience_plugin.createAddCapabilityBtns = function(className, capabilityIdAttr){
		var capabilityElements =  getElementsByClassName(document.body, className);
		for(var i = 0, c = capabilityElements.length; i < c; i++){
			capabilityElements[i].insertBefore(createIframeElement("experience_capability_frame_" + capabilityElements[i].attributes[capabilityIdAttr].value,
				"http://localhost:8001/HTML5/solution_experience/addCapability.html?id=" + capabilityElements[i].attributes[capabilityIdAttr].value ,
				"width: 24px;height: 24px;visibility: visible;"), null);
		}
	};

})();