<template>
  <Layout :show-logo="true" :show-footer="true">
    <div>{{ greeting }}</div>
    <div><v-icon large>mdi-code-tags</v-icon></div>
  </Layout>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({ greeting: 'Hello world!' }),
  components: {},
}
</script>
