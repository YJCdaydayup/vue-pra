<template>
    <div class="toast-container">

        <!--        <div class="toast" :class="[visible? 'fadeIn':'fadeOut']">-->
        <transition name="fade">
            <div ref="toast" class="toast" v-show="visible">
                <span>{{ message }}</span>
            </div>
        </transition>
    </div>
</template>

<style lang="css" rel="stylesheet/css" scoped>
    .toast-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toast {
        width: 180px;
        height: 60px;
        border-radius: 10px;
        line-height: 60px;
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.61);
        transform: scale(1);
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

    /*.fadeIn {*/
    /*    animation-name: fadeIn;*/
    /*    animation-duration: 0.3s;*/
    /*    animation-fill-mode: both;*/
    /*}*/

    /*.fadeOut {*/
    /*    animation-name: fadeOut;*/
    /*    animation-duration: 0.3s;*/
    /*    animation-fill-mode: both;*/
    /*}*/
</style>

<script>

    // import "./toast.css"
    export default {
        data() {
            return {
                visible: false,
                message: ""
            }
        },
        // watch: {
        //     'visible'(newv,oldv) {
        //         if (!newv) {
        //
        //         }
        //     }
        // }
    }
</script>