<template>
    <div class="toast-container">
        <div class="toast" :class="[visible? 'fadeIn':'fadeOut']">
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
        }
    }
</script>