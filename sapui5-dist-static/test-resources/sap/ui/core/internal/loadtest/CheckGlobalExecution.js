var errors=0;

try { 
	if ( arguments ) {
		alert("global execution failed: arguments exists. Callee is :" + arguments.callee.toString());
		errors++;
	}
} catch (err) {
	// ignore
}

// check whether mod is visible (which is a local variable in jQuery.sap.require) 
try {
	if ( mod ) {
		s = s + "[";
		for(var i in mod) {
			s = s + i + ":" + mod[s] + ",";
		}
		s = s+"]";
		alert("global execution failed: variable mod is visible: ");
	};
} catch (err) {
	// ignore
}

globalResult = "ok";

var globalResultWithVar = "ok";
