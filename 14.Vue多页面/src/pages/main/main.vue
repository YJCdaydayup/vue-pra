<template>
    <div @click.prevent.stop="show" class="box">
        {{message}}
        <div class="part1">ascascsacs</div>
        <div class="part2"></div>
    </div>
</template>

<style>
</style>

<script>

    import './index.scss'

    export default {
        data() {
            return {
                visible: false,
                message: "擦拭吃洒"
            }
        },
        methods: {
            show() {
                alert('showding');
            }
        }
    }

</script>
