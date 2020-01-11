<template>
  <div class="h-100">
    <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute gradient-color m-0">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <div class="navbar-toggle">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbar"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler collapsed"
            >
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <router-link to="/app/dashboard" class="s-20 gradient-color" style="text-decoration: none;">Dashboard</router-link>
        </div>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
        <div id="navigation" class="collapse navbar-collapse justify-content-end show">
          <ul class="Navbar-nav d-flex align-items-center m-0 p-0">
            <form action>
              <div class="input-group no-border m-0">
                <div class="form-group input-group m-0 p-2">
                  <input
                    aria-describedby="addon-right addon-left"
                    placeholder="Search..."
                    class="form-control"
                  >
                  <span class="input-group-addon input-group-append search-end">
                    <i class="now-ui-icons ui-1_zoom-bold"></i>
                  </span>
                </div>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#pablo" class="nav-link">
                  <i class="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li aria-haspopup="true" class="dropdown nav-item dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle nav-link">
                  <i class="now-ui-icons location_world"></i>
                  <span class="no-icon"></span>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <a href="#" class="dropdown-item">Action</a>
                  <a href="#" class="dropdown-item">Another action</a>
                  <a href="#" class="dropdown-item">Something else here</a>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#pablo" class="nav-link">
                  <i class="now-ui-icons users_single-02"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>

    <div class="gradient-graph p-3 pb-5" style="height: 55%">
      <line-chart id="time-line-chart" :data="chartData" :labels="chartOptions"></line-chart>
    </div>

    <div class="content">
      <div>
        <div class="col-md-12">
          <div class="card card-stats card-raised">
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <div class="statistics">
                    <div class="info">
                      <div class="icon icon-primary">
                        <i class="now-ui-icons transportation_bus-front-12"></i>
                      </div>
                      <h3 class="info-title">
                        <span>20</span>
                      </h3>
                      <h6 class="stats-title">TOTAL VEHICLES</h6>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="statistics">
                    <div class="info">
                      <div class="icon icon-primary">
                        <i class="now-ui-icons objects_support-17"></i>
                      </div>
                      <h3 class="info-title">
                        <span>15</span>
                      </h3>
                      <h6 class="stats-title">TOTAL COURIERS</h6>
                    </div>
                  </div>
                </div>                
                <div class="col-md-3">
                  <div class="statistics">
                    <div class="info">
                      <div class="icon icon-primary">
                        <i class="now-ui-icons shopping_delivery-fast"></i>
                      </div>
                      <h3 class="info-title">
                        <span>76</span>
                      </h3>
                      <h6 class="stats-title">TOTAL DELIVERIES</h6>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="statistics">
                    <div class="info">
                      <div class="icon icon-primary">
                        <i class="now-ui-icons business_money-coins"></i>
                      </div>
                      <h3 class="info-title">
                        <small style="font-size: 80%">$</small>
                        <span>3521</span>
                      </h3>
                      <h6 class="stats-title">TODAY REVENUE</h6>
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/event-bus.js";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      chartData: {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ],
        datasets: [
          {
            data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95],
            fill: true,
            borderWidth: 2,
            lineTension: 0,
            pointRadius: 5,
            pointHitRadius: 5,
            pointHoverHitRadius: 8,
            pointHoverRadius: 8,
            pointHoverBorderColor: '#fff',
            pointBorderColor: "#fff",
            pointBackgroundColor: "#91dc5a",
            borderColor: "#fa8964"
          }
        ]
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                display: true,
                stepSize: 50,
                fontColor: "#c7c7c7",
                fontStyle: "bold",
                fontSize: "12",
                padding: 15,
                margin: 20
              },
              gridLines: {
                display: true,
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: false
              }
            }
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                beginAtZero: true,
                display: true,
                color: "#c7c7c7",
                lineHeight: 2,
                padding: 2,
                fontSize: "12",
                fontColor: "#c7c7c7",
                fontStyle: "bold",
                padding: 15,
                margin: 20
              },
              gridLines: {
                display: false,
                color: "rgba(255, 255, 255, 0.1)",
                drawBorder: true
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: 'white',
          titleFontColor: 'black',
          footerFontColor: 'black',
          bodyFontColor: 'black',
          borderColor: '#dcdfe6',
          borderWidth: 1,
          displayColors: false
        },        
      }
    };
  },
  mounted() {
    // EventBus.$emit("sideNavClick", "dashboard");
  }
};
</script>

<style lang="scss" scoped>
.navbar a:not(.btn):not(.dropdown-item) {
  color: #18ce0f;
}
.search-end {
  padding: 11px 19px 11px 0;
  border-radius: 0 30px 30px 0;
  margin-left: 0;
}

.input-group.no-border {
  .form-control,
  .search-end {
    transition: none;
    color: #fff;
    // background-color: hsla(0,0%,87%,.3);
    background-color: rgba(161, 161, 161, 0.75);

    &::placeholder {
      color: #fff;
    }

    &:focus,
    &:focus + .search-end {
      transition: none;
      background-color: rgba(161, 161, 161, 1);
    }
  }
}

li i {
  // color: rgba(161, 161, 161, 1);
  color: #18ce0f !important;
}

.card {
  border: 0;
  border-radius: 0.1875rem;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  -webkit-box-shadow: 0 1px 15px 1px rgba(39, 39, 39, 0.1);
  box-shadow: 0 1px 15px 1px rgba(39, 39, 39, 0.1);

  .card-body {
    padding: 15px 15px 10px 15px;
    }
  .card-body.table-full-width {
    padding-left: 0;
    padding-right: 0;
  }
  .card-header {
    padding: 15px 15px 0;
    border: 0;
  }
  .card-header:not([data-background-color]) {
    background-color: transparent;
  }
  .card-header .card-title {
    margin-top: 10px;
  }
  .map {
    border-radius: 0.1875rem;
  }
  .map.map-big {
    height: 400px;
  }
}
.card[data-background-color="orange"],
.card[data-background-color="orange"] .card-header {
  background-color: #f96332;
}
.card[data-background-color="orange"] .card-footer .stats {
  color: #fff;
}
.card[data-background-color="red"] {
  background-color: #ff3636;
}
.card[data-background-color="yellow"] {
  background-color: #ffb236;
}
.card[data-background-color="blue"] {
  background-color: #2ca8ff;
}
.card[data-background-color="green"] {
  background-color: #18ce0f;
}

.info {
  .icon>i {
    font-size: 2.3em;
  }

  .info-title {
    margin: 15px 0 5px;
    padding: 0 15px;
    color: #2c2c2c;
    font-weight: 700;
  }  
}

.card-stats-mini .card-title {
  margin-top: 0;
  margin-bottom: 5px;
}
.card-stats-mini .info-area {
  text-align: left;
  width: 40%;
  float: left;
  padding: 15px 0;
}
.card-stats-mini .info-area .icon > i {
  font-size: 2em;
}
.card-stats-mini .chart-area {
  float: left;
  width: 60%;
}
.card-stats-mini .stats {
  text-align: left;
  color: #fff;
}
.card-contributions hr,
.card-stats hr {
  margin: 5px 15px;
}
.card-stats .statistics {
  position: relative;
  text-align: center;
  padding: 15px 0;
}
.card-stats .statistics .title {
  margin-bottom: 0;
}
.card-stats .statistics .stats-title {
  margin-bottom: 5px;
  color: #9a9a9a;
  font-weight: 400;
}
.card-stats .statistics.statistics-horizontal,
.card-stats .statistics.statistics-horizontal .info-title {
  padding: 0;
}
.card-stats .icon {
  display: inline-block;
  vertical-align: top;
  margin: 0 15px;
}
.card-stats .stats-information {
  display: inline-block;
  margin-bottom: 15px;
}
.card-stats .stats-information .stats-text {
  font-size: 29px;
}
.card-stats .stats-information .stats-details {
  display: block;
  color: #888;
}
.card-stats .dots {
  text-align: right;
}
.card-stats .dots .dot {
  background-color: #2c2c2c;
  height: 3px;
  width: 3px;
  border-radius: 50%;
  display: inline-block;
}
.card-stats [class*="col-"] .statistics:after {
  position: absolute;
  right: 0;
  top: 20px;
  width: 1px;
  height: calc(100% - 40px);
  content: "";
  background: #ddd;
}
.card-stats [class*="col-"]:last-child .statistics:after {
  display: none;
}
.card-subcategories .card-body {
  padding-bottom: 30px;
}
.card-body {
  padding-top: 25px;
}
.card-description + .card-title {
  margin-top: 20px;
}
.card-footer {
  margin-top: 0;
  margin-bottom: 2.5rem;
}
.card-description + .card-title {
  margin-top: 30px;
}
.icon i {
  font-size: 32px;
}
.icon.icon-primary i {
  color: #f96332;
}
.icon.icon-info i {
  color: #2ca8ff;
}
.icon.icon-danger i {
  color: #ff3636;
}
.icon.icon-warning i {
  color: #ffb236;
}
.icon.icon-success i {
  color: #18ce0f;
}
.card-wizard .card-header {
  padding-bottom: 40px;
}
.footer {
  padding: 24px 0;
}
</style>
