<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Accueil</router-link>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/login" class="nav-link active">Connection</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link active">Inscription</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

}
</script>
