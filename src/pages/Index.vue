<template lang="pug">
  q-page.row.items-center.justify-center
    h1.text-center
      | Hi!
      br
      | I'm Alamgir.
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class PageIndex extends Vue {}
</script>
