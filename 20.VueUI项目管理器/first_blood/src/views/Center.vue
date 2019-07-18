<template>
    <div class="center">
        <div class="nav-bread">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/home">Home</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>Application Center</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
        <StickFooter @close="close" v-show="showStick"></StickFooter>
        <button class="btn" @click="showDetail">Detail</button>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .center
        .nav-bread
            text-align left
            a-breadcrumb-item
                router-link
                    color



</style>

<script>

    import StickFooter from './../components/StickFooter'

    export default {
        data() {
            return {
                showStick: false
            }
        },
        methods:{
            showDetail() {
                this.showStick = true;
            },
            close() {
                this.showStick = false;
            }
        },
        components: {
            StickFooter
        }
    }
</script>
