<template lang="pug">
  q-layout(view="hHh lpr fFf")
    crypt-header

    q-page-container
      router-view

    crypt-footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CryptHeader from 'components/Header.vue';
import CryptFooter from 'components/Footer.vue';

@Component({
  components: {
    CryptHeader,
    CryptFooter,
  },
})
export default class MainLayout extends Vue {}
</script>
