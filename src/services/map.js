// import libraries here

const google = window.google;

export default {
    markFarmers(coordinate, map, agent = {}) {
      let _this = this;

      const marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        label: {
          text: agent.farmer_count.toString(),
          color: "white",
          fontSize: "10px",
          fontFamily: "GothamRnd-Medium",
          fontWeight: "bold"
        }
      });

      let url = "/images/agent_default.png";

      let agent_image = '/images/img/CONTACT.svg'; // DEFAULT IMAGE
      if (agent.image) agent_image = agent.image;

      marker.setIcon({
        url: url,
        scaledSize: new google.maps.Size(80, 80),
        // labelOrigin: new google.maps.Point(10, 12)
      });

      const content = `
        <div class="iw-container" style="width: 280px;">
        <div class="triangle"></div>
        <div class="iw-content">
        <div class="left pb-0">
        <img src=${agent_image} class="image border-0">
        </div>
        
        <div class="right d-flex flex-column justify-content-center align-items-center" style="padding-top: 5px;">
        <p class="first-name align-self-start">${agent.name}</p>
        <p class="last-name align-self-start">Total Contacts: ${agent.farmer_count}</p>
        </div>
        </div>
        </div>
      `;

      let ibOptions = {
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-22, -230),
        zIndex: null,
        alignBottom: false,
        boxStyle: {
          padding: "0px 0px 0px 0px",
          width: "180px",
          height: "100px"
        },
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
      };

      const boxText = document.createElement('div');
      boxText.innerHTML = content;
      boxText.style.cssText = "margin-top: 8px; background: #fff; padding: 0px;";

      ibOptions.content = boxText;
      const ib = new InfoBox(ibOptions);

      marker.addListener('mouseover', () => ib.open(map, marker));
      marker.addListener('mouseout', () => ib.close());

      marker.addListener('click', () => {
        _this.get('events').trigger('Farmers', [agent.id, false]);
        ib.close();
      })

      return marker;
    },

    markAgents(coordinate, map, agent = {}) {
      let _this = this;

      const marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        label: {
          text: agent.agent_count.toString(),
          color: "white",
          fontSize: "10px",
          fontFamily: "GothamRnd-Medium",
          fontWeight: "bold"
        }
      });

      let url = "/images/agent_default.png";

      let agent_image = '/images/img/AGENT.svg'; // DEFAULT IMAGE
      if (agent.image) agent_image = agent.image;

      marker.setIcon({
        url: url,
        scaledSize: new google.maps.Size(80, 80),
        // labelOrigin: new google.maps.Point(10, 12)
      });

      const content = `
        <div class="iw-container" style="width: 280px;">
        <div class="triangle"></div>
        <div class="iw-content">
        <div class="left pb-0">
        <img src=${agent_image} class="image border-0">
        </div>
        
        <div class="right d-flex flex-column justify-content-center align-items-center" style="padding-top: 5px;">
        <p class="first-name align-self-start">${agent.name}</p>
        <p class="last-name align-self-start">Total Agents: ${agent.agent_count}</p>
        </div>
        </div>
        </div>
      `;

      let ibOptions = {
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-22, -230),
        zIndex: null,
        alignBottom: false,
        boxStyle: {
          padding: "0px 0px 0px 0px",
          width: "180px",
          height: "100px"
        },
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
      };

      const boxText = document.createElement('div');
      boxText.innerHTML = content;
      boxText.style.cssText = "margin-top: 8px; background: #fff; padding: 0px;";

      ibOptions.content = boxText;
      const ib = new InfoBox(ibOptions);

      marker.addListener('mouseover', () => ib.open(map, marker));
      marker.addListener('mouseout', () => ib.close());

      marker.addListener('click', () => {
        _this.get('events').trigger('Farmers', [agent.id, false]);
        ib.close();
      })

      return marker;
    },

    markClients(coordinate, map, agent = {}) {
      let _this = this;

      const marker = new google.maps.Marker({
        position: coordinate,
        map: map,
        label: {
          text: agent.client_count.toString(),
          color: "white",
          fontSize: "10px",
          fontFamily: "GothamRnd-Medium",
          fontWeight: "bold"
        }
      });

      let url = "/images/agent_default.png";

      let agent_image = '/images/img/ORG.svg'; // DEFAULT IMAGE
      if (agent.image) agent_image = agent.image;

      marker.setIcon({
        url: url,
        scaledSize: new google.maps.Size(80, 80),
        // labelOrigin: new google.maps.Point(10, 12)
      });

      const content = `
        <div class="iw-container" style="width: 280px;">
        <div class="triangle"></div>
        <div class="iw-content">
        <div class="left pb-0">
        <img src=${agent_image} class="image border-0">
        </div>
        
        <div class="right d-flex flex-column justify-content-center align-items-center" style="padding-top: 5px;">
        <p class="first-name align-self-start">${agent.name}</p>
        <p class="last-name align-self-start">Total Clients: ${agent.client_count}</p>
        </div>
        </div>
        </div>
      `;

      let ibOptions = {
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-22, -230),
        zIndex: null,
        alignBottom: false,
        boxStyle: {
          padding: "0px 0px 0px 0px",
          width: "180px",
          height: "100px"
        },
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
      };

      const boxText = document.createElement('div');
      boxText.innerHTML = content;
      boxText.style.cssText = "margin-top: 8px; background: #fff; padding: 0px;";

      ibOptions.content = boxText;
      const ib = new InfoBox(ibOptions);

      marker.addListener('mouseover', () => ib.open(map, marker));
      marker.addListener('mouseout', () => ib.close());

      marker.addListener('click', () => {
        _this.get('events').trigger('Farmers', [agent.id, false]);
        ib.close();
      })

      return marker;
    },

    clusterMarkers(map, markers) {
      return new MarkerClusterer(map, markers, {
        imagePath: '/images/marker-clusterer-images/m',
        maxZoom: 20
      });
    },

    triggerResizeEvent(map) {
      if (!google) return;
      this.simulateResizeEvent();
      google.maps.event.trigger(map, 'resize');
    },

    simulateResizeEvent() {
      let evt = document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    }
}
