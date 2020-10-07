<template lang="pug">
  div.fullscreen.bg-blue.text-white.text-center.q-pa-md.flex.flex-center
    div
      div(style="font-size: 30vh")
        | 404

      div.text-h2(style="opacity:.4")
        | Oops. Nothing here...

      q-btn(
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Error404 extends Vue {}
</script>
