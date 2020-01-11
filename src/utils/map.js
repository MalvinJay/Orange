import Vue from 'vue' 
import EventBus from '@/event-bus.js'
import JQuery from 'jquery'

const messagesHub = new Vue()
const $ = JQuery;
const google = window.google;

export default {
  createMap(element, options = {}) {
    if (!google) {
      EventBus.$emit('googleNotFound', true);
      return undefined;
    } else {
      // Plot Map
      let center = {};
      let currentPlot = {};

      const zoomLevel = 10;

      // OPTIONAL
      const scrollWheel = options.scrollWheel || true;
      const zoomControl = options.zoomControl || false;
      const mapTypeControl = options.mapTypeControl || false;
      const streetViewControl = options.streetViewControl || true; 

      let finalOptions = {
        disableDefaultUI: true,
        scrollWheel,
        zoom: zoomLevel,
        zoomControl,
        mapTypeControl,
        streetViewControl,

        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        },

        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.RIGHT_BOTTOM,
          mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },   
      };

      let mapCenter = new google.maps.LatLng(center.lat, center.lng);

      let Day = new google.maps.StyledMapType(
          [ 
            {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#d6e2e6"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#cfd4d5"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#7492a8"
              }
            ]
          },
          {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "lightness": 25
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#dde2e3"
              }
            ]
          },
          {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#cfd4d5"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#dde2e3"
              }
            ]
          },
          {
            "featureType": "landscape.natural",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#7492a8"
              }
            ]
          },
          {
            "featureType": "landscape.natural.terrain",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#dde2e3"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
              {
                "saturation": -100
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#588ca4"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a9de83"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#bae6a1"
              }
            ]
          },
          {
            "featureType": "poi.sports_complex",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#c6e8b3"
              }
            ]
          },
          {
            "featureType": "poi.sports_complex",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#bae6a1"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "saturation": -45
              },
              {
                "lightness": 10
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#41626b"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#c1d1d6"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#a6b5bb"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#9fb6bd"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.icon",
            "stylers": [
              {
                "saturation": -70
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#b4cbd4"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#588ca4"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#008cb5"
              }
            ]
          },
          {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "saturation": -100
              },
              {
                "lightness": -5
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#a6cbe3"
              }
            ]
          }
        ],      
        {name: 'Styled Map'}
      );   

      let Night = new google.maps.StyledMapType(
        [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "lightness": -80
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2b3544"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#1f2835"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#38414e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "lightness": -20
              }
            ]
          }
        ],
        {name: 'Styled Map'}      
      );

      let map = new google.maps.Map(element, finalOptions);

      map.setCenter(mapCenter);
      map.setZoom(13.2);

      map.mapTypes.set('styled_map', Day);
      map.setMapTypeId('styled_map');    

      // custom map controls   
      EventBus.$on('zoom', initZoomControl)
      EventBus.$on('toggleMode', toggleMode)

      function initZoomControl(type){
        if(type === 'in') map.setZoom(map.getZoom() + 1);
        if(type === 'out') map.setZoom(map.getZoom() - 1);
      }

      function toggleMode (val){
        if(val) map.mapTypes.set('styled_map', Night);
        else map.mapTypes.set('styled_map', Day);

        map.setMapTypeId('styled_map');
      }

      let infoWindow = new google.maps.InfoWindow;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          center = pos;

          var cityCircle = new google.maps.Circle({
            strokeColor: '#4285f4',
            strokeOpacity: 1,
            strokeWeight: 0,
            fillColor: '#a8c9f7',
            fillOpacity: 0.5,
            map: map,
            center: pos,
            radius: 1000
          });

          infoWindow.setPosition(pos);
          infoWindow.setContent('Your Current Location found.');
          infoWindow.open(map);

          map.setCenter(pos);

        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


      // let card = document.getElementById('pac-card');
      let input = document.getElementById('search_map');
      let autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

      let infowindow = new google.maps.InfoWindow();    
      let infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent);

      let marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        animation: google.maps.Animation.DROP,
      });

      autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        let place = autocomplete.getPlace();

        if (!place.geometry) {
          messagesHub.$message({
            message: "No details available for input: '" + place.name + "'",
            type: 'error'
          })          
          return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(16);  // Why 16? Because it looks good.
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        if(place.geometry.location)
          // center = place.geometry.location;
          currentPlot = place.geometry.location;

        let address = '';

        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        }

        console.log('Addres :', address)
        infowindowContent.style.display = 'block'
        infowindowContent.children['0'].src = place.icon;
        infowindowContent.children['1'].textContent = place.name;
        infowindowContent.children['3'].textContent = address;
        infowindow.open(map, marker);
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });      

      // JUST TO ADD THAT LEGENDARY BLUE DOT...OMG
      function addYourLocationButton(map, marker) {
        var controlDiv = document.createElement('div');
        var firstChild = document.createElement('button');
        firstChild.style.backgroundColor = '#fff';
        firstChild.style.border = 'none';
        firstChild.style.outline = 'none';
        firstChild.style.width = '40px';
        firstChild.style.height = '40px';
        firstChild.style.borderRadius = '2px';
        firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
        firstChild.style.cursor = 'pointer';
        firstChild.style.marginRight = '10px';
        firstChild.style.padding = '0px';
        firstChild.title = 'Your Location';
        controlDiv.appendChild(firstChild);

        var secondChild = document.createElement('div');
        secondChild.style.margin = 'auto';
        secondChild.style.width = '20px';
        secondChild.style.height = '20px';
        secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
        secondChild.style.backgroundSize = '180px 18px';
        secondChild.style.backgroundPosition = '0px 0px';
        secondChild.style.backgroundRepeat = 'no-repeat';
        secondChild.id = 'you_location_img';
        firstChild.appendChild(secondChild);

        var blueIcon = document.createElement('div');
        blueIcon.style.width = '20px';
        blueIcon.style.height = '20px';
        blueIcon.backgroundColor = "#4285f4";
        blueIcon.border = "2px solid #fff";

        google.maps.event.addListener(map, 'dragend', function() {
          $('#you_location_img').css('background-position', '0px 0px');
        });

        firstChild.addEventListener('click', function() {
          initCurrentLocation();
        });

          function initCurrentLocation (){
            // clearMap();

            var imgX = '0';
            var animationInterval = setInterval(function(){
                if(imgX == '-18') imgX = '0';
                else imgX = '-18';
                $('#you_location_img').css('background-position', imgX + 'px 0px');
            }, 500);
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    var icon = {
                      path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
                      fillColor: '#4285f4',
                      fillOpacity: 1,
                      anchor: new google.maps.Point(0,0),
                      strokeWeight: 0,
                      scale: 0.3
                    }

                    let LocationMarker = new google.maps.Marker({
                      map: map,
                      anchorPoint: new google.maps.Point(0, -29),
                      animation: google.maps.Animation.DROP,
                      icon: icon
                    });

                    LocationMarker.setPosition(latlng);
                    map.setCenter(latlng);

                    clearInterval(animationInterval);
                    $('#you_location_img').css('background-position', '-144px 0px');
                });
            }
            else{
                clearInterval(animationInterval);
                $('#you_location_img').css('background-position', '0px 0px');
            }
          }

          initCurrentLocation();
        
          controlDiv.index = 1;
          map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
      }

      addYourLocationButton(map, marker);

      // Direction Mapping
      var directionsService = new google.maps.DirectionsService();
      var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
        preserveViewport: true,
        suppressMarkers: true,
        // polylineOptions: {
        //   strokeColor: 'green',
        //   strokeOpacity: 0.5,
        //   strokeWeight: 7
        // }
        // panel: document.getElementById('panel').appendChild(document.createElement('li'))
      });

      directionsDisplay.setMap(map);
      // directionsDisplay.clearMap(map);

      /* 
        var startM = new goo.Marker({
                position: result.routes[0].legs[i].steps[j].start_location,
                map: map,
                icon: {
                  path: 'M256,320c-70.688,0-128-57.312-128-128c0-70.687,57.313-128,128-128c70.688,0,128,57.313,128,128C384,262.688,326.688,320,256,320z',
                  fillColor: 'white',
                  fillOpacity: 1,
                  scale: 0.03,
                  strokeColor: 'black',
                  strokeWeight: 1,
                  strokeOpacity: 1,
                  anchor: new google.maps.Point(200, 200)
                },
                title: "start " + i + ":" + j
              });
              var endM = new goo.Marker({
                position: result.routes[0].legs[i].steps[j].end_location,
                map: map,
                icon: {
                  path: 'M256,320c-70.688,0-128-57.312-128-128c0-70.687,57.313-128,128-128c70.688,0,128,57.313,128,128C384,262.688,326.688,320,256,320z',
                  fillColor: 'white',
                  fillOpacity: 1,
                  scale: 0.03,
                  strokeColor: 'black',
                  strokeWeight: 1,
                  strokeOpacity: 1,
                  anchor: new google.maps.Point(200, 200)
                },
                title: "end " + i + ":" + j
              });      
      */

      function calculateRoute(data) {
        console.log('Incoming Data: ', data);

        if(data == null || data == undefined) {
          data = {
            from_latitude: center.lng,
            from_longitude: center.lat,
            to_latitude: currentPlot.lng(),
            to_longitude: currentPlot.lat()
          }

          console.log('Formatted Data: ', data);
        }

        messagesHub.$message({
          message: "Directional Route being computed...",
          type: 'Success'
        })
        
        var request = {
          origin: {
            lat: parseFloat(data.from_longitude),
            lng: parseFloat(data.from_latitude)
          },
          destination: {
            lat: parseFloat(data.to_longitude),
            lng: parseFloat(data.to_latitude)
          },
          travelMode: 'DRIVING'
        }

        directionsService.route(request, function (result, status) {
          console.log(result, status)

          // if(status == "OK"){
          //   directionsDisplay.setDirections(result)
          // } else {
          //   messagesHub.$message({
          //     message: "Routing Failed, Check Coordinate Points",
          //     type: 'error'
          //   })          
          // }


          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
            for (var i = 0; i < result.routes[0].legs.length; i++) {
              for (var j = 0; j < result.routes[0].legs[i].steps.length; j++) {
                if (j == 0) {
                  var startM = new google.maps.Marker({
                    position: result.routes[0].legs[i].steps[j].start_location,
                    map: map,
                    icon: {
                      path: 'M256,320c-70.688,0-128-57.312-128-128c0-70.687,57.313-128,128-128c70.688,0,128,57.313,128,128C384,262.688,326.688,320,256,320z',
                      fillColor: 'white',
                      fillOpacity: 1,
                      scale: 0.03,
                      strokeColor: 'black',
                      strokeWeight: 1,
                      strokeOpacity: 1,
                      anchor: new google.maps.Point(200, 200)
                    },
                    title: "start " + i + ":" + j
                  });
                }
                if (j == result.routes[0].legs[i].steps.length-1) {
                  var endM = new google.maps.Marker({
                    position: result.routes[0].legs[i].steps[j].end_location,
                    map: map,
                    icon: {
                      path: 'M256,320c-70.688,0-128-57.312-128-128c0-70.687,57.313-128,128-128c70.688,0,128,57.313,128,128C384,262.688,326.688,320,256,320z',
                      fillColor: 'white',
                      fillOpacity: 1,
                      scale: 0.03,
                      strokeColor: 'black',
                      strokeWeight: 1,
                      strokeOpacity: 1,
                      anchor: new google.maps.Point(200, 200)
                    },
                    title: "end " + i + ":" + j
                  });
                }                
              }
            }
            // map.fitBounds(App.bounds.union(result.routes[0].bounds));
          }          
        });
      }

      // document.getElementById('triggerDirection').onclick = function () {
      //   calculateRoute()
      // }

      EventBus.$on('GetDirection', calculateRoute)

      function clearMap() {
        marker.setMap(null);
      }

      return map;      
    }
  },

  triggerResizeEvent(map) {
    if(!google)return;
    this.simulateResizeEvent();
    google.maps.event.trigger(map, 'resize');
  },

  simulateResizeEvent() {
    let evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
  }
}
