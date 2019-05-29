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
var pastTile = L.tileLayer('https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/29387/{z}/{y}/{x}', {maxZoom: 19});
pastTile.addTo(map);
pastTile.addTo(map2);

var tog = 0;
var tog2 = 0;

// $("#toggle").click(function(){
//   if(tog == 0){
//     tog = 1;
//     map.removeLayer(pastTile);
//     presentTile.addTo(map);
//   }else if(tog == 1){
//     tog = 0;
//     map.removeLayer(presentTile);
//     pastTile.addTo(map);
//   }
// });
//
// $("#toggle2").click(function(){
//   if(tog2 == 0){
//     tog2 = 1;
//     map2.removeLayer(pastTile);
//     presentTile.addTo(map2);
//     map.invalidateSize();
//   }else if(tog2 == 1){
//     tog2 = 0;
//     map2.removeLayer(presentTile);
//     pastTile.addTo(map2);
//     map.invalidateSize();
//   }
// });

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
