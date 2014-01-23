
(function(){

	var urlField, togglePortrait, deviceBox;

	var oSettings = {
		currentDevice: aDevices[0],
		portrait: true
	};



	/*** ORIENTATION HANDLING ***/

	function toggleOrientation() {
		var bLandscape = togglePortrait.getPressed();
		animateOrientation(bLandscape);
	}
	
	function setOrientation(bLandscape) {
		togglePortrait.setText(bLandscape ? "Orientation: Landscape" : "Orientation: Portrait");
		togglePortrait.setPressed(bLandscape);
		
		var device = getCurrentDeviceInfo();
		var orientationData = bLandscape ? device.landscape : device.portrait;

		$("#theFrame").css({
			width: orientationData.width + "px",
			height: orientationData.height + "px",
			margin: orientationData.padding
		});
		
		$("#device").css("background-image", "url(devsim/images/" + orientationData.img + ")");
		setupClock(device, bLandscape);
	}
	
	function animateOrientation(bLandscape) {
		$frameTray = $("#frameTray");
		var zoomTransform = "scale(" + (getCurrentDeviceInfo().zoom || 1) + ")";
		
		// first animate with CSS3 transform
		if (bLandscape) {
			var offset = $frameTray.height()/2 - $frameTray.width()/2;
			$frameTray.css("-webkit-transform", zoomTransform + " rotate(0deg)").addClass("animating");
			$frameTray.css("-webkit-transform", zoomTransform + " rotate(90deg) translateY(-" + offset + "px) translateX(-" + offset + "px)");
			
		} else { // portrait
			var offset = $frameTray.width()/2 - $frameTray.height()/2;
			$frameTray.css("-webkit-transform", zoomTransform + " rotate(0deg)").addClass("animating");
			$frameTray.css("-webkit-transform", zoomTransform + " rotate(-90deg) translateX(-" + offset + "px) translateY(-" + offset + "px)");
		}

		// then finalize by switching the orientation when the animation has completed (keeping rotate(90deg) leads to blurry graphics)
		$frameTray.one("webkitTransitionEnd", function(){
			$frameTray.removeClass("animating").css("-webkit-transform", zoomTransform);
			setOrientation(bLandscape);
		});
	}



	/*** WINDOW SIZE HANDLING ***/
	
	function handleResize() {
		// ensure all elements are visible when the window gets smaller
		var $config = $("#configArea");
		var $device = $("#frameTray");
		var iMinLeft = $(window).width() - 80;
		var iMinTop = $(window).height() - 80;
		
		$device.css("left", Math.min($device[0].offsetLeft, iMinLeft) + "px");
		$config.css("left", Math.min($config[0].offsetLeft, iMinLeft) + "px");
		
		$device.css("top", Math.min($device[0].offsetTop, iMinTop) + "px");
		$config.css("top", Math.min($config[0].offsetTop, iMinTop) + "px");
	}



	/*** CLOCK ***/
	
	function setupClock(device, bLandscape) {
		if (device.clock) {
			$("#clock").css({
				"display": "block",
				"color": device.clock.color,
				"width": device.clock.width,
				"height": device.clock.height,
				"left": bLandscape ? device.clock.leftLandscape : device.clock.leftPortrait,
				"top": bLandscape ? device.clock.topLandscape : device.clock.topPortrait,
				"font-family": device.clock.fontFamily,
				"font-weight": device.clock.fontWeight,
				"font-size": device.clock.fontSize,
				"text-shadow": device.clock.textShadow
			});
		} else {
			$("#clock").css({"display": "none"});
		}
	}
	
	function updateClock() {
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();

		//currentHours = (currentHours < 10 ? "0" : "") + currentHours;
		currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

		$("#clock").text(currentHours + ":" + currentMinutes);
	}



	/*** QRCODE ***/
	
	function devAvailable() {
		// check the existence of sapui5-internal and register the sap.ui.dev library
		bDevAvailable = jQuery.sap.syncHead("/uilib-sample/resources/sap/ui/dev/");
		if (bDevAvailable) {
			jQuery.sap.registerModulePath("sap.ui.dev", "/uilib-sample/resources/sap/ui/dev/");
			sap.ui.getCore().loadLibrary("sap.ui.dev");
		}
		return bDevAvailable;
	}
	
	function openInMobile() {
		var sWeinreId = jQuery.sap.uid();
		var sWeinreClientUrl = sap.ui.getCore().getConfiguration().getWeinreServer() + "/client/#" + sWeinreId;
	
		var oContainer = new sap.ui.commons.layout.VerticalLayout();
		//var href = (document.location.href.indexOf("#") > -1) ? document.location.href.split("#")[0] : document.location.href;
		var oQRCode = new sap.ui.dev.qrcode.QRCode({
			data : urlField.getValue() + "?sap-ui-weinreId=" + sWeinreId, // TODO: url may be not the currently displayed one
			sizeFactor : 5
		});
		var link = new sap.ui.commons.Link({
			text : "Remote Web Inspector (webkit only!)",
			href : sWeinreClientUrl,
			target : "_blank"
		});
		jQuery.sap.require("sap.ui.core.Popup");
		var oPopup = new sap.ui.core.Popup(oContainer, false, true, true).attachClosed(function() {
			oContainer.destroy();
		});
		oContainer.addContent(oQRCode).addContent(link);
		oPopup.open();
	}



	/*** MOVE HANDLING ***/
	
	function moveStart(e) {
		var $obj = $(this);
		window.movingData = this.id;
		
		window.movingData = {
			startX : $obj.offset().left,
			startY : $obj.offset().top,
			x : e.screenX,
			y : e.screenY,
			id: this.id
		};
		$obj.offset({
			left: window.movingData.startX, 
			top: window.movingData.startY
		}).css("right", null); // in case it was positioned from the right
		$(window).on("mousemove", move);
		$(window).on("mouseup", moveEnd);
	}
	function move(e) {
		$("#" + window.movingData.id).offset({
			left : window.movingData.startX + e.screenX - window.movingData.x,
			top : window.movingData.startY + e.screenY - window.movingData.y
		});
	}
	function moveEnd() {
		delete window.movingData;
		$(window).off("mousemove", move);
		$(window).off("mouseup", moveEnd);
	}



	/*** DEVICE CHANGE HANDLING ***/
	
	function getCurrentDeviceInfo() {
		return oSettings.currentDevice;
	}
	
	function deviceSelectedFromDropdown() {
		var iKey = parseInt(deviceBox.getSelectedKey(), 10);
		setCurrentDeviceInfo(iKey);
	}
	
	function setCurrentDeviceInfo(iKey) {
		oSettings.currentDevice = jQuery.extend({}, oDefaultDevice, aDevices[iKey]);
		oSettings.currentDevice.landscape = jQuery.extend({}, oDefaultDevice.landscape, aDevices[iKey].landscape);
		oSettings.currentDevice.portrait = jQuery.extend({}, oDefaultDevice.portrait, aDevices[iKey].portrait);

		var device = oSettings.currentDevice;
		var bLandscape = togglePortrait.getPressed();
		var fZoom = device.zoom || 1; // optional zoom factor introduced for iPad mini, but in theory needed for all devices to adapt to physical pixel size
		var oOrientationInfo = bLandscape ? device.landscape : device.portrait;
		$("#theFrame").css({
			"width": oOrientationInfo.width + "px",
			"height": oOrientationInfo.height + "px",
			"margin": oOrientationInfo.padding
		});
		
		// update device image
		$("#device").css("background-image", "url(devsim/images/" + oOrientationInfo.img + ")");
		$("#frameTray").css({
			"-webkit-transform": "scale(" + fZoom + ")",
			"-moz-transform": "scale(" + fZoom + ")",
			"transform": "scale(" + fZoom + ")"
		});
		setupClock(device, bLandscape);
		
		// apply user-agent and reload frame
		updateFrameUrl();

		// update Dropdown
		deviceBox.setSelectedKey(""+iKey);
	}

	function updateFrameUrl() {
		FrameContentHandler.setFrameUrlAndUA($("#theFrame"), urlField.getValue(), getCurrentDeviceInfo());
	}



	/*** UI CONSTRUCTION ***/
	
	function createConfigUI(url) {
		urlField = new sap.ui.commons.TextField("urlField", {
			width : "399px",
			value : url,
			change : updateFrameUrl
		}).attachBrowserEvent("touchstart mousedown touchmove mousemove",function(evt){evt.stopPropagation();}); // disallow moving the area on this field

		urlField.placeAt("urlFieldHolder");
	
		var aOtherItems = addDeviceSelectors();
		
		deviceBox = new sap.ui.commons.DropdownBox("deviceBox", {
			width: "244px",
			change: deviceSelectedFromDropdown
		});
		for ( var i = 0; i < aOtherItems.length; i++) {
			deviceBox.addItem(aOtherItems[i]);
		}
		deviceBox.placeAt("otherDevices");
	
		togglePortrait = new sap.ui.commons.ToggleButton({text:"Orientation: Portrait", width:"147px", press:toggleOrientation}).placeAt("otherDevices");
	
		if (devAvailable()) {
			new sap.ui.commons.Link({
				press : openInMobile,
				text : "Open in Mobile",
				tooltip : "Display the QRCode for the embedded page. The user-agent is not overridden anymore, then."
			}).placeAt("urlFieldHolder");
		}
	}
	
	function addDeviceSelectors() {
		var item, aItems = [];
		for (var i = 0; i < aDevices.length; i++) {
			if (aDevices[i].directAccess) {
				// create a Button to directly select the device
				new sap.ui.commons.Button({text:aDevices[i].shortName, tooltip: aDevices[i].name, press:function(){
					var iKey = parseInt(this.data("key"), 10);
					setCurrentDeviceInfo(iKey);
				}}).data("key",""+i).placeAt("devices");
			}
			
			// add all to DropdownBox
			item = new sap.ui.core.ListItem({
				text : aDevices[i].name,
				tooltip: aDevices[i].ua,
				key: i
			});
			aItems.push(item);
		}
		
		return aItems;
	}



	/*** Initialization ***/
	
	
	function extractInitialUrl() {
		// check whether a certain url needs to be loaded
		var urlParts = window.location.href.split("?");
		if ((urlParts.length > 1) && (urlParts[1].length > 4)) {
			// URL of a page is given
			if (jQuery.sap.startsWith(urlParts[1], "url=")) {
				var rawUrl = urlParts[1].substr(4);
				var url = rawUrl.replace(/%23/g, "#").replace(/%26/g, "&").replace(/%3F/g, "?").replace(/%25/g, "%");
				return url;
			}
		}
		return null;
	}
	
	
	$(function() {
		var initialUrl = extractInitialUrl() || "index.html";
		
		createConfigUI(initialUrl);
	
		setCurrentDeviceInfo("0");
		
		updateClock();
		setInterval(updateClock, 5000);
		
		$("#frameTray").on("mousedown", moveStart);
		$("#configArea").on("mousedown", moveStart);
		$(window).on("resize", handleResize);
	});
	
})();
