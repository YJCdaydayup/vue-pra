<template>
    <div id="box">
        <div class="borad"></div>
        <button @click="sendMsg">发送消息</button>
    </div>
</template>

<style>
        .borad {
            width: 200px;
            height: 200px;
            border: 1px solid blue;
        }
</style>

<script>
export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        sendMsg() {

        }
    }
}
</script>