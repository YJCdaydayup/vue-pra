<template>
    <div class="toast-container">
        <div class="mask"></div>
        <transition name="fade">
            <div ref="toast" class="toast" v-show="visible">
                <p class="des">{{message}}</p>
                <div id="confirm" class="confirm" ref="confrimBtn">确定</div>
            </div>
        </transition>
    </div>
</template>

<style lang="css" rel="stylesheet/css" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .toast-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .toast {
        width: 70%;
        border-radius: 10px;
        text-align: center;
        background-color: white;
        transform: scale(1);
        color: #404040;
        font-size: 16px;
        line-height: 22px;
    }

    .des {
        padding: 22px;
        border-bottom: 1px solid #E8E8E8;
        text-align: left;
        font-family: PingFangSC-Regular;
    }

    .confirm {
        line-height: 51px;
        color: #306CFF;
    }

    .fade-enter-active, .fade-enter {
        animation: fadeIn 0.5s;
    }

    .fade-leave-active, .fade-leave-to {
        animation: fadeOut 0.5s;
    }

    @keyframes fadeIn {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.8);
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

</style>

<script>

    export default {
        data() {
            return {
                visible: false,
                message: "",
            }
        },
        mounted() {
            this.confrimBtn = this.$refs.confrimBtn
        },
        methods: {

        }
    }
</script>