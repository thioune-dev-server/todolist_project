<template>
    <div class=".center">
        <form  @submit.prevent="handleSubmit()">
            <h1 class="h3 mb-3 fw-normal">Page d'insciprtion</h1>

            <input type="text" class="form-control" placeholder="Nom" required v-model="name">

            <input type="email" class="form-control" placeholder="Adresse_Mail" required v-model="email">
            
            <input type="password" class="form-control" placeholder="Mot de passe" required v-model="password">

            <br><button class="w-100 btn btn-lg btn-primary" type="submit">S'enregistrer</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions("account", ["register"]),
        mounted() {
            this.register();
        },
        handleSubmit() {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            this.register(data);
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