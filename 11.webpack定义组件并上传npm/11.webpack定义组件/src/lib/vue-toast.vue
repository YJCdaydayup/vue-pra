<template>
        <div class="toast-container">
            <div v-bind:class="[visible ? 'fadeIn' : 'fadeOut']"  class="toast">
                <span>{{ message }}</span>
            </div>
        </div>
</template>

<script>
    import "./toast.css"

    export default {
        data() {
            return {
                visible: false,
                message: ""
            }
        },
        components: {}
    }
</script>  
   

