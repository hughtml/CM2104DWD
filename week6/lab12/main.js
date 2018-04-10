var mymap = L.map('mapid').setView([0,0],1);
//Setting the map and initial co-ordinates

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16});
//Setting up some basic grey tiles, streamed from the provideres when the map is drawn

Esri_WorldGrayCanvas.addTo(mymap);
//Adding the tiles to the map

$('#shakey').click(function() {
//Adding a click event listener for when the earthquakes button is clicked

  console.log("Getting quakes...");
  //Logging a console message to indicate progress
  $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
    console.log(result);
    //Logging the result from the JSON download to the console

    result.features.forEach(function(quake) {
    //For each earthquake
        var lng = quake.geometry.coordinates[0];
        var lat = quake.geometry.coordinates[1];
        //Getting the co-ordinates
        var magnitude = parseFloat(quake.properties.mag);
        //And the magnitude

        var circle = L.circle([lng,lat], magnitude * 10000, {
            color: 'red',
            opacity: 0,
            fillColor: 'red',
            fillOpacity: 0.8
        })
        //Creating a circle at that point, styling it
        circle.addTo(mymap);
        //Adding it to the map
    });
  });
})

$('#dropey').click(function() {
//Adding a click event listener for when the meteors button is clicked

  console.log("Getting meteors...");
  //Logging a console message to indicate progress
  $.getJSON("https://data.nasa.gov/resource/gh4g-9sfh.json", function(result) {
    console.log(result);
    //Logging the result from the JSON download to the console

    result.features.forEach(function(meteor) {
    //For each earthquake
        var lng = meteor.geolocation[2];
        var lat = meteor.geolocation[0];
        //Getting the co-ordinates
        var mass = parseFloat(quake.mass);
        //And the mass

        var circle = L.circle([lng,lat], mass * 10000, {
            color: 'blue',
            opacity: 0,
            fillColor: 'blue',
            fillOpacity: 0.8
        })
        //Creating a circle at that point, styling it
        circle.addTo(mymap).bindPopup("+meteor.name+");
        //Adding it to the map including a popup
    });
  });
});
