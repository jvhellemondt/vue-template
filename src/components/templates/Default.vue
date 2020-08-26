<template>
  <v-app>
    <Appbar :show-logo="showLogo" />
    <v-main>
      <v-container>
        <v-row align="start" justify="start">
          <v-col>
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer :show-footer="showFooter" />
  </v-app>
</template>

<script>
import Appbar from '@/components/organisms/Appbar'
import Footer from '@/components/organisms/Footer'

export default {
  props: {
    showLogo: { default: true },
    showFooter: { default: true },
  },
  components: { Appbar, Footer },
}
</script>
