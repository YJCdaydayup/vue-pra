<template>
    <div class="list">
        <div class="nav-bread">
            <a-breadcrumb>
                <a-breadcrumb-item><router-link to="/home">Home</router-link></a-breadcrumb-item>
                <a-breadcrumb-item><router-link to="/home/center">Application Center</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>Application List</a-breadcrumb-item>
            </a-breadcrumb>
        </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .list
        .nav-bread
            text-align left
</style>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
