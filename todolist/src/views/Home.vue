<template>
    <div>
        <form @submit.prevent="handlePlus()">
            <button class="w-100 btn btn-lg btn-primary" type="submit" @click="waiting()">
                <div v-if="loading" class="spinner-border spinner-border-sm"></div>
            PRESS
            </button>
        </form>   
        <div v-if="this.getUserInfos===null">Bonjour</div>
        <div v-else>Bonjour {{this.getUserInfos.name}}</div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Home',
    data() {
        return {
            loading: false
        }
    },
    methods: {
        ...mapActions("account", ["getUser"]),
        mounted() {
            this.getUser()
        },
        handlePlus() {
            this.getUser(this.getToken)
        },
        waiting() {
            this.loading=!false
            setTimeout(()=>{
                this.loading=!true
            },2000)
        }
    },
    computed: {
        ...mapGetters("account", ["getToken", "getUserInfos"])
    }

}
</script>
