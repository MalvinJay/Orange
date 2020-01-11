<template>
    <div class="ticketsNdrivers">
        <div class="content">
            <div class="body">
                <el-tabs v-model="activeName" class="default-tab position-relative" stretch type="border-card" @tab-click="handleClick">
                    <el-tab-pane label="TICKETS" name="1">

                    </el-tab-pane>

                    <el-tab-pane label="DRIVERS" name="2">

                    </el-tab-pane>
                </el-tabs>                    
            </div>
            <div class="legal dm-lsb-b-tickets d-flex justify-content-between">
                <div class="col-md-4 col-xs-4 dashboard-col-left-btns">
                    <i class="material-icons">search</i>
                </div>
                <div class="col-md-4 col-xs-4 dashboard-col-left-btns">
                    <i class="material-icons">merge_type</i>
                </div>
                <div class="col-md-4 col-xs-4 dashboard-col-left-btns js-right-sidebar-routes">
                    <i class="material-icons">directions</i>
                </div>                            
            </div>
        </div>
    </div>    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ticketsNdrivers {
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    font-family: "Roboto", sans-serif;
    background: #fdfdfd;
    width: 280px;
    overflow: hidden;
    display: inline-block;
    height: calc(100vh - 51px);
    position: fixed;
    top: 51px;
    left: 0;
    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 11 !important;    
}
.dashboard .sidebar .legal {
    background-color: #fff;
    z-index: 100;
    overflow: visible;
}
</style>
