<template>
    <div class="modal-box"> 
        <transition name="fade">
        <div class="alert-box" v-if="show">
            <div class="alert">
                <div class="logo">
                    <img class="logo-pic" src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=3482743535,2095459182&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=363427950ada9f4dde21e50e9c89ab49" alt="">
                    <p class="des">说明</p>
                </div>
                <button class="confirm" @click="show=false">X</button>
            </div>
        </div>
        </transition>
    </div> 
</template>

<style lang="css" scoped>

    .alert-box.fade-enter-active {
        transition: all 0.5s linear;
        opacity: 1;
    }

    .alert-box.fade-enter {
        opacity: 0;
    }

    .alert-box.fade-leave-active {
        transition: all 0.5s linear;
        opacity: 1;
    }

    .alert-box.fade-leave-to {
        opacity: 0;
    }

    .alert-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ccc;
        text-align: center;
    }

    .logo {
        width: 200px;
        height: 160px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        position: relative;
    }
    .logo-pic {
        width: 66px;
        height: 66px;
        margin-top: 10px;
        
    }

    .des {
        position: absolute;
        width: 100%;
        bottom: 10px;
    }

    .confirm {
        margin-top: 80px;
        text-align: center;
        width: 44px;
        height: 44px;
        border-radius: 22px;
        border: 1px solid orange;
        font-size: 20px;
        outline: none;
    }



</style>

<script>
export default {
    layout: 'modal',
    data() {
        return {
            show: false
        }
    },
    mounted() {
        setTimeout(()=>{
            this.show = true;
        },1000) 
    }
}
</script>