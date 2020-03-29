<template>
    <div>
        <button @click="ch">中文</button>
        <button @click="en">English</button>
        <router-view></router-view>
    </div>
</template>

<script>

    import i18n from './../plugins/i18n'
    import {SUPPORT_LOCALES} from './../constants/locales'

    function getLocale(locale = 'en') {
        return SUPPORT_LOCALES.find(loc => loc.code === locale)
    }

    export default {
        data() {
            return {
                msg: '123'
            }
        },
        methods: {
            ch() {
                let locale = getLocale('ch')
                this.$store.dispatch('setLocale', locale)
                i18n.locale = locale.code
            },
            en() {
                let locale = getLocale('en')
                this.$store.dispatch('setLocale', locale)
                i18n.locale = locale.code
            }
        }
    }
</script>