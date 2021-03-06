jQuery.sap.declare("i2d.qm.qualityissue.confirm.appref.util.Formatter");


i2d.qm.qualityissue.confirm.appref.util.Formatter = {

	_statusStateMap : {
		"New" : "None",
		"In Process" : "Warning",
		"Completed": "Success"
	},

	StatusState :  function (value) {
		return (value && i2d.qm.qualityissue.confirm.appref.util.Formatter._statusStateMap[value]) ?
				i2d.qm.qualityissue.confirm.appref.util.Formatter._statusStateMap[value] :
				"Warning";
	}
};