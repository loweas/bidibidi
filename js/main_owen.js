var ws = new WebSlides();

var map = L.map("mymap", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([3.5199, 31.3300], 16);

var map2 = L.map("mymap2", {
  zoomControl: false,
  scrollWheelZoom: false
}).setView([3.4667, 31.3743], 15);

var presentTile = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19});
var presentTile2 = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 19});
var pastTile = L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/29387/{z}/{y}/{x}', {maxZoom: 19});
var pastTile2 = L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/29387/{z}/{y}/{x}', {maxZoom: 19});
pastTile.addTo(map);
pastTile2.addTo(map2);
presentTile.addTo(map);
presentTile2.addTo(map2);

L.control.sideBySide(pastTile, presentTile).addTo(map);
L.control.sideBySide(pastTile2, presentTile2).addTo(map2);

ws.el.addEventListener('ws:slide-change', function(){
  crtDiv = $(".current div");
  if(crtDiv.attr("id") === "mymap"){
    map.invalidateSize();
    map.fitBounds([
      [3.5288, 31.3403],
      [3.5137, 31.3130]
    ]);
  }else if(crtDiv.attr("id") === "mymap2"){
    map2.invalidateSize();
    map2.fitBounds([
      [3.4503, 31.3421],
      [3.4843, 31.4071]
    ]);
  }
});
