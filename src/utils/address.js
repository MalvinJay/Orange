import Vue from 'vue'
import EventBus from '@/event-bus.js'
import JQuery from 'jquery'

const messagesHub = new Vue()
const $ = JQuery;
const google = window.google;

export default {
  createMap(element, options = {}) {
    if (!google) {
      return undefined;
    }

    // REQUIRED
    let center = {};
    const zoomLevel = 10;

    // OPTIONAL
    const scrollWheel = options.scrollWheel || true;
    const zoomControl = options.zoomControl || true;
    const mapTypeControl = options.mapTypeControl || true;
    const streetViewControl = options.streetViewControl || true; 
    
    let finalOptions = {
      scrollWheel,
      zoom: zoomLevel,
      zoomControl,
      mapTypeControl,
      streetViewControl,

      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },

      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP,
        mapTypeIds: ['satellite', 'hybrid','styled_map']
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
      {name: 'Styled'}
    );

    let map = new google.maps.Map(element, finalOptions);
    var markers = [];

    map.setCenter(mapCenter);
    map.setZoom(13.2);

    map.mapTypes.set('styled_map', Day);
    map.setMapTypeId('styled_map');

    let infoWindow = new google.maps.InfoWindow;

    // *********************** GEOLOCATION ***************************************************************
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // console.log('Current Position by Navigator: ', pos)
          EventBus.$emit('setInitialCoordinates', pos)
  
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

          var icon = {
            path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
            fillColor: '#4285f4',
            fillOpacity: 1,
            anchor: new google.maps.Point(0,0),
            strokeWeight: 0,
            scale: 0.3
        }

          let Marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            anchorPoint: new google.maps.Point(0, -29),
            icon: icon
          });          
  
          Marker.setPosition(pos);
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
    // ****************************************************************************************************

      
    // *********************** AUTO-COMPLETE LOCATION SEARCH  *********************************************
    let input = document.getElementById('search_with_geo');
    let autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);
        autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    let infowindow = new google.maps.InfoWindow();
    let infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);   

    // let geocoder = new google.maps.Geocoder;

    let marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29),
      animation: google.maps.Animation.DROP,
    });  

    autocomplete.addListener('place_changed', function() {
      infowindowContent.style.display = 'none';
      infowindow.close();
      marker.setVisible(false);
      let place = autocomplete.getPlace();
      console.log('Place: ', place)

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
        map.setZoom(16);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);    

      EventBus.$emit('getCoordinates', place.geometry.location)

      if(place.geometry.location) 
        center = place.geometry.location;

      let address = '';

      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindowContent.style.display = 'block'
      infowindowContent.children['0'].src = place.icon;
      infowindowContent.children['1'].textContent = place.name;
      infowindowContent.children['3'].textContent = address;
      infowindow.open(map, marker);   
    });    
    // ****************************************************************************************************

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });    

    // markers.push(marker);

    // Sets the map on all markers in the array.
    // function setMapOnAll(map) {
    //   for (var i = 0; i < markers.length; i++) {
    //     markers[i].setMap(map);
    //   }
    // }    

    // // Adds a marker to the map and push to the array.
    // function addMarker() {
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     anchorPoint: new google.maps.Point(0, -29),
    //     animation: google.maps.Animation.DROP,
    //     draggable:true,
    //   });
    // }    

    // // Removes the markers from the map, but keeps them in the array.
    // function clearMarkers() {
    //   setMapOnAll(null);
    // }

    // // Deletes all markers in the array by removing references to them.
    // function deleteMarkers() {
    //   clearMarkers();
    //   markers = [];
    // }    

    // *********************** CURRENT LOCATION **********************************************************
    function addYourLocationButton(map) {
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

      // google.maps.event.addListener(map, 'dragend', function() {
      //   $('#you_location_img').css('background-position', '0px 0px');
      // });

      firstChild.addEventListener('click', function() {
        initCurrentLocation();
      });

      function initCurrentLocation () {
          // deleteMarkers();

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
                    animation: google.maps.Animation.DROP,
                    icon: icon
                  });

                  LocationMarker.setPosition(latlng);
                  map.setCenter(latlng);
                  map.setZoom(13);  

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
    addYourLocationButton(map);    
    // ****************************************************************************************************
  

    // *********************** GET COORDDINATES WITH CLICK & DRAG *****************************************    
    map.addListener('click', function(e) {
      getCoordinates(e.latLng, map);
    });

    function getCoordinates(location, map) {
      marker.setVisible(false);
      marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable:true,
      });
      map.panTo(location);
      marker.setVisible(true);  

      EventBus.$emit('getCoordinates', location)
    }

    map.addListener('dragend',function(e) {
      console.log('Dragged Coords: ', e)
      // EventBus.$emit('getCoordinates', e)
    }); 
    // ****************************************************************************************************

    return map;
  }
}