<template>

    <transition name="fade">
        <div class="container" v-if="show">
            <div class="alert">
                <div class="loading-pic"></div>
                <p class="des">{{text}}</p>
            </div>
        </div>
    </transition>
</template>

<style>

    .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(29,29,29,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
    }

    .container.fade-enter-active, .container.fade-leave-active {
        transition: opacity 0.5s linear;
    }

    .container.fade-enter, .container.fade-leave-to {
        opacity: 0;
    }

    .alert {
        padding: 20px 20px 10px 20px;
        background-color: #fff;
        border-radius: 6px;
        width: 50%;
        height: 15%
    }

    .loading-pic {
        padding: 20px;
        background: url("./timg.gif") no-repeat;
        background-size: 108px 64px;
        background-position: center center;
        margin-bottom: 30px;
    }

    .des {
        text-align: center;
        font-size: 13px;
    }

</style>

<script>
    export default {
        data() {
            return {
                show: false,
                text: ''
            }
        },
        components: {}
    }
</script>  
   

