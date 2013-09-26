var watchId = null;

function geoloc() {
    if (navigator.geolocation) {
        var optn = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        };
        watchId = navigator.geolocation.watchPosition(showPosition, showError, optn);
    } else {
        alert('Geolocation is not supported in your browser');
    }
}

function showPosition(position) {
    var googlePos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
        zoom: 12,
        center: googlePos,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapObj = document.getElementById('mapdiv');
    var googleMap = new google.maps.Map(mapObj, mapOptions);
    var markerOpt = {
        map: googleMap,
        position: googlePos,
        title: 'Hi , I am here',
        animation: google.maps.Animation.DROP
    };
    var googleMarker = new google.maps.Marker(markerOpt);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'latLng': googlePos
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var popOpts = {
                    content: results[1].formatted_address,
                    position: googlePos
                };
                var popup = new google.maps.InfoWindow(popOpts);
                google.maps.event.addListener(googleMarker, 'click', function() {
                    popup.open(googleMap);
                });
            } else {
                alert('No results found');
            }
        } else {
            alert('Geocoder failed due to: ' + status);
        }
    });
}

function stopWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;

    }
}

function showError(error) {
    var err = document.getElementById('mapdiv');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            err.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            err.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            err.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            err.innerHTML = "An unknown error occurred."
            break;
    }
}