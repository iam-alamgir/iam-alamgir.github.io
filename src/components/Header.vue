<template lang="pug">
  q-header.q-px-lg
    q-toolbar.justify-center
      .col-10
        q-toolbar-title
          | Alamgir
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>

<style scoped lang="scss">
.q-header {
  height: 80px;
  background: darken($white, 5);
}

.q-toolbar {
  height: 100%;
}

.q-toolbar__title {
  color: $default_text_color;
  font-size: 26px;
}
</style>
