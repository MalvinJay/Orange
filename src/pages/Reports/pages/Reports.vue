<template>
    <coming-soon />
</template>

<script>
import EventBus from '@/event-bus.js'
import { mapGetters } from 'vuex'

export default {
    name: 'Reports',
    data(){
        return {

        }
    },
    mounted() {
        EventBus.$emit('sideNavClick', 'Reports')
    },
    created(){
        EventBus.$emit('sideNavClick', 'Reports')
    }
}
</script>

<style>

</style>
