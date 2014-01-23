VBI.Scale = function( scene ){
	var scale = {};
	scale.scene = scene;
	scale.m_ID = null;
	
	scale.Awake = function( target ){
		var l_vbiObj = jQuery.sap.byId( target );
		scale.m_ID = $(l_vbiObj).attr('id');
		jQuery( l_vbiObj ).vbinav({ scale: scale });
		

	};
	
	return scale;
};
