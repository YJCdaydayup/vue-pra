<template>
    <div>
        page a
        {{$store.state.money.money}}
        <hr>
        <button @click="add(2)">增加</button>
        <button @click="reduce">减少</button>
    </div>
</template>
<style>

</style>

<script>

    import {mapActions} from 'vuex'


    export default {
        data() {
            return {
                msg: "hello vue"
            }
        },
        methods: {
                ...mapActions('money',[
                  'add', 'reduce'
                ])
        }
    }
</script>  
   

