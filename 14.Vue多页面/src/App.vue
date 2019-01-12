<template>
    <div @click="show" class="box">{{message}}</div>
</template>

<style>
</style>

<script>

    import './index.scss'

    export default {
        data() {
            return {
                visible: false,
                message: "擦拭吃洒"
            }
        },
        methods: {
            show() {
                alert('showding');
            }
        }
    }

</script>
