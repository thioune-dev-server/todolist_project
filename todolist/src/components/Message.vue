<template>
  <div class="home" v-show="this.getToken===null">
            <h1>Bienvenue</h1>
            <h4>Vous êtes sur la page d'accueil de notre application de todolist</h4>
            <h4>Veuillez créer un compte pour accéder aux listes ou vous connecter directement si c'est déjà fait.</h4>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
      name: "Message",
      computed: {
          ...mapGetters("account", ["getToken"])
      }
}
</script>

<style>

.home {
    text-align: center;
}

</style>