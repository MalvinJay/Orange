<template>
    <div class="line-chart">
        <canvas :id=id class="line-chart" ref="line" aria-label="courier service" height="80px" role="img"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
import EventBus from '@/event-bus.js'

export default {
    name: 'LineChart',
    props: ['id', 'labels', 'data'],
    data(){
        return {
            graph: {

            }
        }
    },
    methods: {
        changeGraph (myChart) {
            myChart.config.data = this.data
            
            myChart.update()
        },
        destroyGraph (myChart) {
            myChart.destroy()
        },
    },
    mounted () {
        EventBus.$on('updateGraph', () => {
            this.changeGraph(myLineChart)
        })

        var line = document.getElementById(this.id)
        var ctx = document.getElementById(`${this.id}`).getContext("2d")
        var gradientFill = ctx.createLinearGradient(0, 0, 0, 600);
        gradientFill.addColorStop(0, "rgba(145, 227, 103, 0.9)");
        gradientFill.addColorStop(0.3, "rgba(145, 227, 103, 0.2)");
        gradientFill.addColorStop(0.5, "rgba(255,255,255, 0)");
        gradientFill.addColorStop(1, "rgba(255,255,255, 0)");

        this.data.datasets["0"].backgroundColor = gradientFill

        var myLineChart = new Chart(line, {
            type: 'line',
            data: this.data,
            options: this.labels
        })
    },
    computed: {
        plotNiceGraph() {
            
        }
    },
}
</script>

<style lang='scss' scoped>
    .line-chart {
        // height: 100px;
    }
    #canvas-holder {
        width: 100%;
        margin-top: 50px;
        text-align: center;
    }

    #chartjs-tooltip {
        opacity: 1;
        position: absolute;
        color: rgba(0, 0, 0, .7)!important;
        background: white!important;
        border-radius: 3px;
        -webkit-transition: all .1s ease;
        transition: all .1s ease;
        pointer-events: none;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }

    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
    }
</style>

