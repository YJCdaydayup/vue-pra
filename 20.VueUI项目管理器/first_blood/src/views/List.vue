<template>
    <div class="list">
        <div class="nav-bread">
            <a-breadcrumb>
                <a-breadcrumb-item><router-link to="/home">Home</router-link></a-breadcrumb-item>
                <a-breadcrumb-item><router-link to="/home/center">Application Center</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>Application List</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <div class="food-box">{{food.num}}</div>
        <Child :food="food" :show="show"></Child>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .list
        .nav-bread
            text-align left
        .food-box
            width 50px
            height 30px
            background-color lightcoral
            line-height 30px
            text-align center
</style>

<script>

    import Child from './../components/Child.vue'

    export default {
        data() {
            return {
                food: {
                    count: 1
                },
                show: true
            }
        },
        components: {
            Child
        }
    }
</script>
