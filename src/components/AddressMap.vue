<template>
    <div>
        <div class="map" :id="mapName">

        </div>
    </div>
</template>

<script>
import MapUtil from '@/utils/address'
export default {
    name: 'AddressMap',
    props: ['name'],
    data() {
        return {
            mapName: this.name + "-map",
        }
    },
    mounted() {
        const element = document.getElementById(this.mapName)
        const options = { }

        MapUtil.createMap(element, options)
    }

}
</script>

<style lang="scss" scoped>
    .map {
        // height: 100%;
        width: 100%;
        border: 1px solid #d8d8d8;
        min-height: 400px;   
    }
</style>
