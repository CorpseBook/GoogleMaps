$(document).ready( function(){
  var mapOptions = {
    center: { lat: -41.28646, lng: 174.776236},
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  $.ajax({
    method: "GET",
    url: "https://corpsebook-server.herokuapp.com/stories",
  })
  .done(function(data) {
    $.each(data, function(index, value){
      var lat = value.origin_latitude
      var lng = value.origin_longitude
      var myLatlng = new google.maps.LatLng(lat, lng)
      var title = value.title

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: title,
        url: 'https://corpsebook-server.herokuapp.com/stories/' + value.id
      });

      google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
      });

    });
  });




});
