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
    export default {
        data() {
            return {}
        }
    }
</script>
