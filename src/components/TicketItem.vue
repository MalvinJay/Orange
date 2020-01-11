<template>
    <div @click="getDirection" class="w-100 h-100 cursor">
        <div class="progress bg-white" style="height: 95%">
            <div class="row m-0 w-100 py-2">
                <div class="col-md-8 p-0 d-flex justify-content-start">
                    <div class="px-2">
                        <img :class="[fade? 'white-filter-color': '']" src="../assets/images/TicketItem.png" alt="">
                    </div>
                    <div class="ticket_details d-flex flex-column px-2">
                        <div class="time pb-1">
                            <span class="s-14 bold-600">11:14 am</span>
                        </div>
                        <div class="customers_name d-flex flex-column">
                            <span class="name pb-1 s-14">
                                {{ticket.customer_name}}
                            </span>
                            <span class="address pb-1 s-10 menu-gray-text">
                                <i>{{ticket.to_name || 'N/A'}}</i>
                            </span>
                        </div>
                        <div class="courier s-13">
                            <span>{{ticket.courier_id || 'None Assigned'}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 p-0">
                    <div class="ticketId bg-color-grey d-flex justify-content-center align-items-center p-1">
                        <span class="s-13 bold-600 elipse">{{ticket.reference}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from "@/event-bus.js";
import Services from "@/utils/services"

export default {
    name: 'TicketItem',
    props: ['ticket', 'fade'],
    data() {
        return {
            hd: '',
        }
    },
    mounted() {

    },
    methods: {
        getDirection() {
           EventBus.$emit('GetDirection', this.ticket)
        }
    }
}
</script>

<style lang="scss" scoped>
    .elipse {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;        
    }
</style>
