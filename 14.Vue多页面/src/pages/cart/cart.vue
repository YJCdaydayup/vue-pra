<template>
    <div class="box">
        <p @click="click">{{msg}}</p>
        <a href="index.html">回到首页</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '我是购物车页面'
            }
        },
        methods: {
            click() {
                alert('13456789opuytre')
            }
        }
    }

</script>
