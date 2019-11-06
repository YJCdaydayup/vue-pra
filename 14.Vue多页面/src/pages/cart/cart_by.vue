<template>
    <div>
        <transition :name="direction">
            <router-view class="appView"></router-view>
        </transition>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .appView
        transition all 0.5s linear
        transform translate3d(0, 0, 0)
    .appView.slide-left-enter
            transform translate3d(100%, 0, 0)

    .appView.slide-left-leave-to
            transform translate3d(-100%, 0, 0)

    .appView.slide-right-enter
            transform translate3d(-100%, 0, 0)

    .appView.slide-right-leave-to
            transform translate3d(100%, 0, 0)
</style>

<script>

    import {setStore, getStore, LOCAL_KEYS} from './../../tools/tool.js'

    export default {
        data() {
            return {
                direction: ''
            };
        },
        watch: {
            '$route'(to, from) {
                // //判断是否返回
                let routersArr = getStore(LOCAL_KEYS.TRANSITION_ANIMATION) && getStore(LOCAL_KEYS.TRANSITION_ANIMATION).split(',') || [];
                if (routersArr.length == 0) {
                    routersArr.push(from.path)
                    routersArr.push(to.path);
                    this.direction = 'slide-left'
                } else {
                    if (routersArr.indexOf(to.path) != -1) {
                        this.direction = 'slide-right'
                        routersArr.splice(routersArr.indexOf(to.path) + 1,)
                    } else {
                        this.direction = 'slide-left'
                        routersArr.push(to.path)
                    }
                }
                setStore(LOCAL_KEYS.TRANSITION_ANIMATION, routersArr.join(','))
            }
        }
    }
</script>
