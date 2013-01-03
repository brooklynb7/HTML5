var solution_experience = {};

solution_experience.getUrlParam = function(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null) return unescape(r[2]); return null; 
};

solution_experience.busyIndicator = function(element){
	this.element = element;
}
$.extend(solution_experience.busyIndicator.prototype, {
	show: function(){
		if(this.element){
			this.element.block({
				message:'<img style="width:24px;height:24px;" src="images/ajax-loader.gif" />',
				css: { backgroundColor: 'transparent', border: '0px' },
				overlayCSS: { backgroundColor: '#EEE', opacity: 0.5 },
				baseZ : 5
			});
		}
	},
	hide: function(){
		this.element.unblock();
	}
});

