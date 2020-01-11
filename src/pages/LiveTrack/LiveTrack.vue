<template>
  <div class="h-100 w-100 d-flex">
    <!-- Map -->
    <div class="w-100">
      <map-view 
        name="base"
        v-loading="googleFound"
        element-loading-text="Loading Map Data"
        element-loading-background="rgba(0, 0, 0, 0.7)"    
      >
      </map-view>
    </div>

    <!-- Tickets and Drivers Overview -->
    <div class="ticketsNdrivers">
      <div class="content h-100">
        <div class="body h-100 customEL">
          <el-tabs v-model="activeName" class="default-tab position-relative h-100 side" stretch type="border-card" @tab-click="handleClick">
            <el-tab-pane label="TICKETS" name="tickets" class="h-100">
              <div class="bg-white">
                <div class="d-flex justify-content-center block py-2 border-bottom">
                  <el-date-picker
                    v-model="filterDate"
                    size="mini"
                    type="date"
                    placeholder="Filter date range"
                    :picker-options="pickerOptions1"
                    class="my-2 w-90"
                  >
                  </el-date-picker>
                </div>
              </div>

              <div class="t_d">
                <el-tabs
                  v-model="model2"
                  class="default-tab position-relative customEL h-100"
                  stretch
                  type="border-card"
                  @tab-click="handleClick"
                >
                  <el-tab-pane name="unassigned">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 unassigned">{{unassignedTickets.length}}</div>
                      <div class="text-lineHeight--20 s-8">UNASSIGNED</div>
                    </li>
                      <div class="unassigned h-100">
                        <div class="hd bg-orange p-1">
                            <div class="row m-0 w-100 d-flex justify-content-start align-items-center">
                                <div class="col-md-3">
                                    <img class="white-filter-color" src="@/assets/images/app/home.svg" alt="">
                                </div>
                                <div class="col-md-9">
                                    <span class="bold-600 white-text">Unassigned</span>
                                </div>
                            </div>
                        </div>     
                        <ticket-item v-for="(unassigned, index) in unassignedTickets" :key="index" :ticket="unassigned" :fade="false">
                          <div class="notAvailable">
                                <h4>No Ticket Available</h4>
                            </div>
                        </ticket-item>                    
                        
                      </div>
                  </el-tab-pane>

                  <el-tab-pane name="assigned">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 assigned">{{assignedTickets.length}}</div>
                      <div class="text-lineHeight--20 s-8">ASSIGNED</div>
                    </li>

                      <div class="assigned h-100">
                        <div class="hd bg-orange p-1">
                            <div class="row m-0 w-100 d-flex justify-content-start align-items-center">
                                <div class="col-md-3">
                                    <img class="white-filter-color" src="@/assets/images/app/home.svg" alt="">
                                </div>
                                <div class="col-md-9">
                                    <span class="bold-600 white-text">Assigned</span>
                                </div>
                            </div>
                        </div>                      
                        <ticket-item v-for="(assigned, index) in assignedTickets" :key="index" :ticket="assigned" :fade="true">
                          <template v-if="assigned">
                            <div class="notAvailable">
                                <h4>No Ticket Available</h4>
                            </div>
                          </template>
                        </ticket-item>
                      </div>

                  </el-tab-pane>
                  <el-tab-pane name="failed">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 failed">{{failedTickets.length}}</div>
                      <div class="text-lineHeight--20 s-8">FAILED</div>
                    </li>

                      <div class="failed h-100">
                        <div class="hd bg-orange p-1">
                            <div class="row m-0 w-100 d-flex justify-content-start align-items-center">
                                <div class="col-md-3">
                                    <img class="white-filter-color" src="@/assets/images/app/home.svg" alt="">
                                </div>
                                <div class="col-md-9">
                                    <span class="bold-600 white-text">Failed</span>
                                </div>
                            </div>
                        </div>                         
                        <ticket-item v-for="(failed, index) in failedTickets" :key="index" :ticket="failed" :fade="false">
                          <div class="notAvailable">
                                <h4>No Ticket Available</h4>
                            </div>
                        </ticket-item>
                      </div>

                  </el-tab-pane>
                  <el-tab-pane name="completed">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 completed">{{completeTickets.length}}</div>
                      <div class="text-lineHeight--20 s-8">COMPLETED</div>
                    </li>

                      <div class="completed h-100">
                        <div class="hd bg-orange p-1">
                            <div class="row m-0 w-100 d-flex justify-content-start align-items-center">
                                <div class="col-md-3">
                                    <img class="white-filter-color" src="@/assets/images/app/home.svg" alt="">
                                </div>
                                <div class="col-md-9">
                                    <span class="bold-600 white-text">Completed</span>
                                </div>
                            </div>
                        </div>                      
                        <ticket-item v-for="(complete, index) in completeTickets" :key="index" :ticket="complete" :fade="true">
                          <div class="notAvailable">
                                <h4>No Ticket Available</h4>
                            </div>
                        </ticket-item>
                      </div>

                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>

            <el-tab-pane label="COURIERS" name="drivers">
              <div class="bg-white">
                <div class="d-flex justify-content-center block py-2 border-bottom">
                  <el-select 
                    size="mini" 
                    v-model="value2" 
                    clearable 
                    placeholder="Select A Courier"
                    class="w-90 my-2"
                  >
                    <el-option
                      v-for="item in filteredCouriers"
                      :key="item.id"
                      :label="item.full_name"
                      :value="item.id">
                    </el-option>
                  </el-select>                  
                </div>
              </div>
              <div>
                <el-tabs
                  v-model="model2"
                  class="default-tab position-relative customEL"
                  stretch
                  type="border-card"
                  @tab-click="handleClick"
                >
                  <el-tab-pane name="unassigned">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 unassigned">0</div>
                      <div class="text-lineHeight--20 s-10">ONLINE</div>
                    </li>

                    <div class="online p-3">
                      <h5>Online</h5>
                    </div>

                  </el-tab-pane>
                  <el-tab-pane name="assigned">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 assigned">0</div>
                      <div class="text-lineHeight--20 s-10">OFFLINE</div>
                    </li>

                    <div class="offline p-3">
                      <h5>Offline</h5>
                    </div>

                  </el-tab-pane>
                  <el-tab-pane name="failed">
                    <li class="d-flex flex-column" slot="label">
                      <div class="text-lineHeight--30 s-24 failed">0</div>
                      <div class="text-lineHeight--20 s-10">ALL</div>
                    </li>

                    <div class="all p-3">
                      <h5>All</h5>
                    </div>

                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="d-flex legal bg-white cursor">
          <div class="col-md-4 col-xs-4 d-flex justify-content-center align-items-center">
            <img class="mr-10" src="@/assets/images/app/search.svg" alt="">
          </div>
          <div class="col-md-4 col-xs-4 d-flex justify-content-center align-items-center">
            <img class="mr-10" src="@/assets/images/app/merge_type.svg" alt="">
          </div>
          <div class="col-md-4 col-xs-4 d-flex justify-content-center align-items-center">
            <img class="mr-10" src="@/assets/images/app/directions.svg" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Map Controls -->
    <section class="dm-rp">
      <div class="search-team-container">
        <div class="search-team-wrap">
          <div class="position-relative">
            <img class="white-filter-color search-icon white-text" src="@/assets/images/app/search.svg" alt="">
            <div class="geos-wrap" id="geos-wrap">
              <input placeholder="Search location" type="search" id="search_map">

                <div id="infowindow-content">
                  <img src="" width="16" height="16" id="place-icon" >
                  <span id="place-name" class="bold-600"></span> 
                  <br>
                  <span id="place-address"></span>
                </div>

            </div>
          </div>
        </div>
      </div>
      <el-button-group>
        <el-button icon="el-icon-arrow-left" @click="getDirection">Route to location</el-button>
      </el-button-group>            

      <div id="right-toolbar" class>
        <ul class="cursor">
          <el-tooltip
            class="item"
            effect="dark"
            content="Learn About the Dashboard"
            placement="left"
          >
            <li class="tipl" data-original-title="Learn About the Dashboard">
              <a data-toggle="modal" data-target="#color-key-mdl">
                <i class="el-icon-question"></i>
                <!-- <i class="material-icons">help_outline</i> -->
                <!-- <img class="white-filter-color white-text" src="@/assets/images/app/help_outline.svg" alt=""> -->
              </a>
            </li>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Toggle Night Mode" placement="left">
            <li class="map-helper-sub-menu relative">
              <a @click="toggleMode">
                <i class="el-icon-refresh"></i>
                <!-- <i class="material-icons">compass_calibration</i> -->
              </a>
            </li>
          </el-tooltip>
          <!-- <el-tooltip class="item" effect="dark" content="Show Driver Zones" placement="left">
                    <li class="tipl" data-original-title="Show Driver Zones">
                        <a @click="setZones('GetZones', 'driver')">
                            <i class="material-icons">directions_car</i>
                        </a>
                    </li>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Show Delivery Zones" placement="left">
                    <li class="tipl" data-original-title="Show Delivery Zones">
                        <a @click="setZones('GetZones', 'delivery')">
                            <i class="material-icons">layers</i>
                        </a>
                    </li>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="Hide All Zones From Map" placement="left">
                    <li class="mb20 tipl" data-original-title="Hide All Zones From Map">
                        <a @click="removePolygon()">
                            <i class="material-icons">layers_clear</i>
                        </a>
                    </li>
          </el-tooltip>-->
          <el-tooltip class="item" effect="dark" content="Map Zoom In" placement="left">
            <li class="tipl" data-original-title="Map Zoom In">
              <a @click="zoom('in')">
                <!-- <i class="material-icons">zoom_in</i> -->
                <!-- <img class="white-filter-color white-text" src="@/assets/images/app/zoom_in.svg" alt=""> -->
                <i class="el-icon-zoom-in"></i>
              </a>
            </li>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Map Zoom Out" placement="left">
            <li class="tipl" data-original-title="Map Zoom Out">
              <a @click="zoom('out')">
                <!-- <i class="material-icons">zoom_out</i> -->
                <!-- <img class="white-filter-color white-text" src="@/assets/images/app/zoom_out.svg" alt=""> -->
                <i class="el-icon-zoom-out"></i>
              </a>
            </li>
          </el-tooltip>
        </ul>
      </div>

      <div id="online-drivers-wrap"></div>
    </section>
  </div>
</template>

<script>
import EventBus from "@/event-bus.js"
import Services from "@/utils/services"
import { mapGetters } from "vuex";
import TicketItem from '@/components/TicketItem'

export default {
  name: "LiveTrack",
  components: {
    'ticket-item': TicketItem
  },
  data() {
    return {
      googleFound: false,
      forceUpdate: 0,
      toggle: true,
      activeName: "tickets",
      model2: "unassigned",
      pickerOptions1: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        }, 
        {
          value: 'Option2',
          label: 'Option2'
        }, 
        {
          value: 'Option3',
          label: 'Option3'
        }, 
        {
          value: 'Option4',
          label: 'Option4'
        }, 
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],      
      value2: "",
      filterDate: ""
    };
  },

  mounted() {
    // EventBus.$emit("sideNavClick", "livetrack");
    EventBus.$on('googleNotFound', (()=>{
      console.log('Value for event: ', val)
      this.googleFound = val
    }));
    this.handleClick()    
  },
  updated(){
    this.handleClick()
  },

  created() {
    this.$store.dispatch('getTickets')
    this.$store.dispatch('getCouriers')
  },
  methods: {
    handleClick() {
      this.forceUpdate += 1;
    },
    toggleMode(val) {

    },
    setZones() {
      EventBus.$emit("setZones");
    },
    zoom(type) {
      EventBus.$emit("zoom", type);
    },
    removePolygon() {
      EventBus.$emit("zoom", type);
    },
    getDirection() {
        EventBus.$emit('GetDirection')
    }    
  },
    computed: {
    ...mapGetters({
      tickets: 'tickets',
      ticketsState: 'ticketsState',
      couriers: 'couriers',
      couriersState: 'couriersState'
    }),

    filteredTickets() {        
      return this.tickets
    },
    unassignedTickets() {
      let unassigned = []
      if(this.tickets) {
        this.tickets.map((el)=>{
          if(el.status === 'unassigned'){
            unassigned.push(el)
          }
        })
      }

      return unassigned
    },
    assignedTickets() {
      let assigned = []
      if(this.tickets) {
        this.tickets.map((el)=>{
          if(el.status === 'assigned'){
            unassigned.push(el)
          }
        })
      }

      return assigned
    },
    failedTickets() {
      let failed = []
      if(this.tickets) {
        this.tickets.map((el)=>{
          if(el.status === 'failed'){
            failed.push(el)
          }
        })
      }

      return failed
    },     
    completeTickets() {
      let complete = []
      if(this.tickets) {
        this.tickets.map((el)=>{
          if(el.status === 'complete'){
            complete.push(el)
          }
        })
      }

      return complete
    },        
    error() {
      return this.ticketsState === 'ERROR' && this.ticketsState !== 'LOADING'
    },
    loading() {
      return this.ticketsState === 'LOADING'
    },
    filteredCouriers() {        
      return this.couriers
    },  
  }  
};
</script>

<style lang="scss" scoped>
.t_d {
    height: calc(100% - 62px);
    overflow-y: scroll;
  }
#search_map::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-image: url('../../assets/images/cancel.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 50%;
  background-color: #fff;
  cursor: pointer;
}

ul, li {
  list-style: none !important;
}
ul#tabs {
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin: 0;
  background: #fff;

  &.ticket-tabs li {
    width: 23.5%;
    text-transform: uppercase;
    font-size: 0.6em;
    box-sizing: border-box;
    font-weight: bold;
  }

  li {
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    color: #515253;
    width: 30%;
    border-bottom: 0px !important;

    &.active {
      color: #89d541;
      border-bottom: 4px solid #89d541 !important;
    }

    span {
      display: block;
      text-align: center;
      font-size: 30px;
      line-height: 130%;
    }
  }
}
.ticketsNdrivers {
  position: relative;
  background: #fdfdfd;
  width: 360px;
  height: calc(100vh - 60px);
  z-index: 1;
  right: 0px;
  // position: absolute;
  // left: 0px;
  // top: 60px;
  // border-left: solid 1px #e6e6e6;
}
.content {
  .legal {
    position: absolute;
    bottom: 0;
    width: 100%;
    // border-top: 1px solid #eee;
    padding: 15px;
    overflow: hidden;
  }
}

.slimScrollDiv {
  height: 80%;
  background: #f3f3f3;
}

section.dm-rp {
  position: absolute;
  width: 300px;
  right: 280px;

  .search-icon {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 22px;
  }
}
.search-team-container {
  margin: 10px 10px 0px 0px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
}
.search-team-wrap {
  display: block;
}
.geos-wrap {
  position: relative;
  width: inherit;
}
#search_map {
  width: 280px;
  background: transparent;
  color: #fff;
  border: 0px;
  padding: 5px 8px 5px 30px;
  -webkit-box-sizing: border-box;
  margin: 0 !important;
  box-sizing: border-box;
  font-size: 13px;
  height: inherit !important;

  &::placeholder {
    color: inherit;
  }
}
.geos-container {
  background-color: #fff;
  position: absolute !important;
  z-index: 1000;
  border-radius: 2px;
  border-top: 1px solid #d9d9d9;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 38px;
  width: 100%;
  left: 0;
  max-height: 190px;
  display: none;
}
#right-toolbar {
  background: transparent;
  z-index: 1;
  font-size: 10px;
  right: 10px;
  top: 110px;
  position: absolute;
  font-weight: 700;

  li {
    float: left;
    clear: left;
    margin-bottom: 2px;

    a {
      display: inline-block;
      background: rgba(0, 0, 0, 0.55);
      padding: 7px 10px;
      // line-height: 38px;
      vertical-align: middle;
      height: 100% !important;

      i {
        color: #fff;
        font-size: 28px;
      }
    }
  }
}

// map
  #description {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
  }

  #infowindow-content .title {
    font-weight: bold;
  }

  #infowindow-content {
    display: none;
  }

  #map #infowindow-content {
    display: inline;
  }

  .pac-card {
    margin: 10px 10px 0 0;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    font-family: Roboto;
  }

  #pac-container {
    padding-bottom: 12px;
    margin-right: 12px;
  }

  .pac-controls {
    display: inline-block;
    padding: 5px 11px;
  }

  .pac-controls label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
  }

  #pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 0 11px 0 13px;
    text-overflow: ellipsis;
    width: 400px;
  }

  #pac-input:focus {
    border-color: #4d90fe;
  }

  #title {
    color: #fff;
    background-color: #4d90fe;
    font-size: 25px;
    font-weight: 500;
    padding: 6px 12px;
  }
</style>
