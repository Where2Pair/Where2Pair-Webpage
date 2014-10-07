function findVenues(map) {
    var where2pairApi = 'http://localhost:5050/venues/nearest'
    $.getJSON( where2pairApi, {
      location: '51.5072,0.1'
    })
    .done(function(data) {
      $.each(data, function(i, result) {
          var latLng = new google.maps.LatLng(result.venue.location.latitude, result.venue.location.longitude)
        var venueName = result.venue.name
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: venueName
        });       
      })
    })
}
