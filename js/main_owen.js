var ws = new WebSlides();

var satelliteMap = L.map("mysatellitemap", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([3.5199, 31.3300], 16);

var satelliteMap2 = L.map("mysatellitemap2", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([3.4667, 31.3743], 15);

var presentTile = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19});
var presentTile2 = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19});
var pastTile = L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/29387/{z}/{y}/{x}', {maxZoom: 19});
var pastTile2 = L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/29387/{z}/{y}/{x}', {maxZoom: 19});
pastTile.addTo(satelliteMap);
pastTile2.addTo(satelliteMap2);
presentTile.addTo(satelliteMap);
presentTile2.addTo(satelliteMap2);

L.control.sideBySide(pastTile, presentTile).addTo(satelliteMap);
L.control.sideBySide(pastTile2, presentTile2).addTo(satelliteMap2);

ws.el.addEventListener('ws:slide-change', function(){
  crtDiv = $(".current div");
  if(crtDiv.attr("id") === "mysatellitemap"){
    satelliteMap.invalidateSize();
    satelliteMap.fitBounds([
      [3.5288, 31.3403],
      [3.5137, 31.3130]
    ]);
  }else if(crtDiv.attr("id") === "mysatellitemap2"){
    satelliteMap2.invalidateSize();
    satelliteMap2.fitBounds([
      [3.4503, 31.3421],
      [3.4843, 31.4071]
    ]);
  }
});
