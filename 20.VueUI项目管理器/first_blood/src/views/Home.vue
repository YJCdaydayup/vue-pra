<template>
    <div class="home">
        <router-link to="/login">登录</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import Login from './../components/Login.vue'

    @Component({
        components: {
            HelloWorld,
            Login
        },
    })
    export default class Home extends Vue {
    }
</script>
