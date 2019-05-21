<template>
    <div class="box">
        <div>{{food.count}}</div>
        <div>{{food.num}}</div>
        <button @click="addCount">ADD</button>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus">
    .box
        width 100px
        height 30px
        line-height 30px
        text-align center
        background-color bisque
</style>

<script>
    export default {
        props: {
            food: {
                type: Object,
                default() {
                    return {
                        count: 10
                    }
                }
            },
            show: {
                type: Boolean,
                default() {
                    return true;
                }
            }
        },
        methods: {
            addCount() {
//                this.show = false;
                this.food.count += 1;
                if (!this.food.num) {
                    this.$set(this.food,'num', 1);
                }else {
//                    alert('123')
                    this.food.num += 1;
                }
            }
        }
    }
</script>
