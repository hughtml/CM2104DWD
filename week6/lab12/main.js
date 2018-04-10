var mymap = L.map('mapid').setView([0,0],1);
//Setting the map and initial co-ordinates

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16});
//Setting up some basic grey tiles, streamed from the provideres when the map is drawn

Esri_WorldGrayCanvas.addTo(mymap);
//Adding the tiles to the map
