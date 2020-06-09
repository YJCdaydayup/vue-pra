<template>
    <div ref="appView" id="app" @touchstart="bodyTouchStart" @touchmove="bodyTouchMove" @touchend="bodyTouchEnd">
        <transition :name="direction">
            <keep-alive>
                <router-view class="appView"></router-view>
            </keep-alive>
            <!-- <router-view class="appView" v-if="!$route.meta.keepAlive"/>
            <keep-alive>
                <router-view class="appView" v-if="$route.meta.keepAlive"/>
            </keep-alive>  -->

        </transition>
    </div>
</template>

<script>
    var swidth = document.documentElement.clientWidth;
    export default {
        name: 'app',
        data: () => ({
            // direction 页面切换的过渡动画，配合transition组件使用
            direction: "slide-left",
            // touchLeft 划动起点界限，起点在靠近屏幕左侧时才有效
            touchLeft: swidth * 2 / 5,
            // touchStartPoint 记录起始点X坐标
            touchStartPoint: 0,
            // distance 记录划动的距离
            distance: 0,
            // 回退按钮的dom，根据页面上是否存在此dom来判断该路由是否可回退
            backBtn: null
        }),
        mounted() {
            // 判断当前环境为安卓还是IOS
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('android') >= 0) {
                // 此为安卓环境
                this.$refs.appView.style.top = '28px';
            }
            //安卓端返回监听; customBack - 子页面定制的返回处理
            window["OnBack"] = function () {
                if(window.customBack instanceof Function){
                    window.customBack();
                }else{
                    if (!window.location.hash || window.location.hash == "#/") {
                        __returnToSuperior();
                    } else {
                        window.history.go(-1);
                    }
                }
            };
        },
        created() {
        },
        watch: {
            // 监听路有变化，决定页面过渡动画
            $route(to, from) {
                // //判断是否返回
                let routersArr = sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',') || [];
                if (routersArr.length === 0) {
                    routersArr.push(from.path)
                    routersArr.push(to.path);
                    this.direction = 'slide-left'
                    to.meta.isBack = false;
                } else {
                    if (routersArr.indexOf(to.path) !== -1) {
                        this.direction = 'slide-right'
                        routersArr.splice(routersArr.indexOf(to.path) + 1,)
                        to.meta.isBack = true;
                    } else {
                        this.direction = 'slide-left'
                        routersArr.push(to.path)
                        to.meta.isBack = false;
                    }
                }
                sessionStorage.setItem('routers', routersArr.join(','))
            }
        },

        methods: {
            bodyTouchStart: function (event) {
                this.backBtn = this.$router.history.current.meta.sliderable;
                if (this.backBtn) {
                    this.touchStartPoint = event.targetTouches[0].pageX;
                    this.distance = 0;
                }
            },
            bodyTouchMove: function (event) {
                if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                    // 只监听单指划动，多指划动不作响应
                    if (event.targetTouches.length > 1) {
                        return;
                    }
                    // 实时计算distance
                    this.distance = event.targetTouches[0].pageX - this.touchStartPoint;
                }
            },
            bodyTouchEnd: function (event) {
                if (this.backBtn && this.touchStartPoint < this.touchLeft) {
                    // 划动结束，重置数据
                    this.touchStartPoint = 0;
                    // 当划动距离超过100px时，触发返回事件
                    if (this.distance > 120) {
                        // 返回前修改样式，让过渡动画看起来更快
                        document.getElementById("app").classList.add("quickback");
                        if(window.customBack instanceof Function){
                            window.customBack();
                        }else{
                            if (this.$router.history.current.path === '/') {
                                __returnToSuperior();
                            } else {
                                this.$router.back();
                            }
                        }

                        setTimeout(function () {
                            document.getElementById("app").classList.remove("quickback");
                        }, 250)
                    }
                }
            }
        }
    }
</script>

<style scoped>

    * {
        padding: 0;
        margin: 0;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        overflow-x: hidden;
    }

    #app.quickback .appView {
        transition-duration: 0.3s;
    }

    .appView {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0rem;
        transition: transform 0.3s ease-out;
        background-color: #fff;
        padding-top: 0.64rem;
    }

    .slide-left-enter {
        transform: translate(100%, 0);
    }

    .slide-left-leave-to {
        transform: translate(-100%, 0);
    }

    .slide-left-leave-active {
        transform: translate(-100%, 0);
    }

    .slide-right-enter {
        transform: translate(-100%, 0);
    }

    .slide-right-leave-active {
        transform: translate(100%, 0);
    }

    .slide-right-leave-to {
        transform: translate(100%, 0);
    }

</style>
