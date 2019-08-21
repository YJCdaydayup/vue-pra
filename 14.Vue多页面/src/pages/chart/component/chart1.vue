<template>
    <div>
        <ve-line
                :data="chartData"
                :loading="loading"
                :data-empty="dataEmpty"
                :settings="chartSettings">
                height="200px"
        </ve-line>
    </div>
</template>
<script>
    const DATA_FROM_BACKEND = {
        columns: ['date', 'PV', 'Order'],
        rows: [
            { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },
            { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },
            { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }
        ]
    }
    const EMPTY_DATA = {
        columns: [],
        rows: []
    }
    export default {
        data () {
            this.chartSettings = {
                yAxisType: ['0,0a']
            }
            return {
                chartData: {
                    columns: [],
                    rows: []
                },
                loading: false,
                dataEmpty: false
            }
        },
        methods: {
            getData () {
                this.loading = true
                // ajax get data ....
                setTimeout(() => {
                    this.chartData = this.chartData.rows.length
                        ? EMPTY_DATA
                        : DATA_FROM_BACKEND
                    this.dataEmpty = !this.chartData.rows.length
                    this.loading = false
                }, 5000)
            }
        },
        created () {
            this.getData()
        }
    }
</script>
