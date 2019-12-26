<template>
    <div id="box">
        <div class="borad">{{msg}}</div>
        <button @click="sendMsg">妹妹发送消息</button>
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

    import {eventBus} from './../EventBus'

    export default {
        data() {
            return {
                msg: ''
            }
        },
        created() {
            eventBus.$on('gege',(data)=>{
                this.msg = data;
            })
        },
        methods: {
           sendMsg() {
                eventBus.$emit('meimei','我是妹妹');
            }
        }
    }
</script>