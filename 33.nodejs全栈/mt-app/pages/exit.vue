<template>
    <div>

    </div>
</template>
<style>

</style>

<script>
    export default {
        layout: 'blank',
        data() {
            return {
                msg: "hello vue"
            }
        },
        middleware: async (ctx) => {
          let {status, data} = await ctx.$axios.get('/users/exit')
          if (status === 200 && data && data.code === 0) {
            window.location.href = '/'
          }
        }

    }
</script>


