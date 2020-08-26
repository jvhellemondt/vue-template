<template>
  <Layout :show-logo="false" :show-footer="false">
    <div>This is the about page!</div>
    <router-link to="/">back to home</router-link>
  </Layout>
</template>

<script>
export default {
  name: 'About',
  components: {},
}
</script>
