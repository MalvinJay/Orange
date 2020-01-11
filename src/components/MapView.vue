<template>
    <div class="google-map h-100 w-100" 
        :id="mapName" 
    >
    </div>
</template>

<script>
import MapUtil from '@/utils/map'
export default {
    name: 'MapView',
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

</style>
