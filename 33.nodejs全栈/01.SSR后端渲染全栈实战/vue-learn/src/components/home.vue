<template>
    <div>
        123
        <hr>
        {{locale.name}}
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: '123'
            }
        },
        computed: {
            locale() {
                return this.$store.state.locale.translations
            }
        }
    }
</script>