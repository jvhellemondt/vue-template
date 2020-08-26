<template>
  <v-app-bar app color="deep-orange" dark collapse-on-scroll>
    <v-app-bar-nav-icon v-if="showLogo">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
    /></v-app-bar-nav-icon>

    <v-toolbar-title>jvh.one vue template</v-toolbar-title>

    <v-spacer></v-spacer>

    <div v-if="!!isLoggedIn">
      <v-btn text small color="white" to="/">Home</v-btn>
      <v-btn text small color="white" to="/about">About</v-btn>
      <v-btn text small color="white" @click="logout">Logout</v-btn>
    </div>

    <div v-else>
      <v-btn
        text
        small
        color="white"
        @click="login"
        :disabled="!isPending"
        :loading="!isPending"
        >Login</v-btn
      >
    </div>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Appbar',
  computed: mapGetters(['isLoggedIn', 'isPending']),
  methods: mapActions(['login', 'logout']),
  props: ['showLogo'],
}
</script>

<style></style>
