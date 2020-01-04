var myMap = L.map("map", {
  center: [29.8283, -98.5795],
  zoom: 4.25,
  layers: layer2019
});

var layer2019 = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

var layer2018 = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

var layer2017 = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Team data
var cities2019 = [
  {
    name: "76ers",
    location: [39.9526, -75.1652],
    attend: 20441
    },
  {
    name: "Bulls",
    location: [41.8818, -87.6231],
    attend: 20084
    },
  {
    name: "Mavericks",
    location: [32.7767, -96.7970],
    attend: 20013
    },
  {
    name: "Raptors",
    location: [43.6532, -79.3832],
    attend: 19824
  },
  {
    name: "Heat",
    location: [25.7617, -80.1918],
    attend: 19640
  }
];

var cities2018 = [
{
  name: "Bulls",
  location: [41.8818, -87.6231],
  attend: 20776
},
{
  name: "Cavaliers",
  location: [41.4993, -81.6944],
  attend: 20562
},
{
  name: "76ers",
  location: [39.9526, -75.1652],
  attend: 20329
},
{
  name: "Raptors",
  location: [43.6532, -79.3832],
  attend: 19839
},
{
  name: "Mavericks",
  location: [32.7767, -96.7970],
  attend: 19791
}
];

var cities2017 = [
  {
    name: "Bulls",
    location: [41.8818, -87.6231],
    attend: 21680
  },
  {
    name: "Cavaliers",
    location: [41.4993, -81.6944],
    attend: 20562
  },
  {
    name: "Raptors",
    location: [43.6532, -79.3832],
    attend: 19830
  },
  {
    name: "Mavericks",
    location: [32.7767, -96.7970],
    attend: 19789
  },
  {
    name: "Knicks",
    location: [40.7128, -74.0060],
    attend: 19774
  }
];

var circleMarkers2019 = []

for (var i = 0; i < cities2019.length; i++) {

circleMarkers2019.push(
  L.circle(cities2019[i].location, {
    fillOpacity: 0.30,
    color: "blue",
    radius: cities2019[i].attend * 5
  }).bindPopup("<h1>" + cities2019[i].name + "</h1> <hr> <h3>Attendance: " + cities2019[i].attend + "</h3>").addTo(myMap));
};

var circleMarkers2018 = []

for (var i = 0; i < cities2018.length; i++) {

circleMarkers2018.push(
  L.circle(cities2018[i].location, {
    fillOpacity: 0.30,
    color: "green",
    radius: cities2018[i].attend * 5
  }).bindPopup("<h1>" + cities2018[i].name + "</h1> <hr> <h3>Attendance: " + cities2018[i].attend + "</h3>").addTo(myMap));
};

var circleMarkers2017 = []

for (var i = 0; i < cities2017.length; i++) {

circleMarkers2017.push(
  L.circle(cities2017[i].location, {
    fillOpacity: 0.30,
    color: "red",
    radius: cities2017[i].attend * 5
  }).bindPopup("<h1>" + cities2017[i].name + "</h1> <hr> <h3>Attendance: " + cities2017[i].attend + "</h3>").addTo(myMap));
};

var group2019 = L.layerGroup(circleMarkers2019);
var group2018 = L.layerGroup(circleMarkers2018);
var group2017 = L.layerGroup(circleMarkers2017);

var markerMaps = {
  "2019": group2019,
  "2018": group2018,
  "2017": group2017
};

L.control.layers(markerMaps).addTo(myMap);