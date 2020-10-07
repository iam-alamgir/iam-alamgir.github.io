<template lang="pug">
  q-footer
    p.copyright.q-my-sm
      | &copy; 2020 Alamgir Hossain
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style scoped lang="scss">
.q-footer {
  background: darken($white, 15);
}
.copyright {
  color: $default-text_color;
  text-align: center;
}
</style>
