<template>
    <div class=".center">
        <form  @submit.prevent="verifyUser">
            <h1 class="h3 mb-3 fw-normal">Page de connection</h1>

            <input type="email" class="form-control" placeholder="Adresse_Mail" required v-model="email">
            
            <input type="password" class="form-control" placeholder="Mot de passe" required v-model="password">

            <br><button class="w-100 btn btn-lg btn-primary" type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions("account", ["login"]),
        mounted() {
            this.login();
        },
        verifyUser() {
            const data = {
                email: this.email,
                password: this.password
            };
            this.login(data);
        }
    }
}
</script>

<style scoped>
.center {
  margin: 0 auto;
  width: 100%;
}
form {
  margin: 0 auto;
  width: 500px; /*find your value*/
  text-align: center;
}
</style>
