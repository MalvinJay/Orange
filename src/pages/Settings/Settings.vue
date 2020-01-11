<template>
    <coming-soon />
</template>

<script>
import EventBus from '@/event-bus.js'
import { mapGetters } from 'vuex'

export default {
    name: 'Settings',
    data() {
        return {
            
        }
    },
    mounted() {
        // EventBus.$emit('sideNavClick', 'settings')
    }
}
</script>

<style>

</style>
