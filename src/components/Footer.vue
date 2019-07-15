<template>
  <footer>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div className="align-center">
          <p>Coded by Daniele Gazzelloni</p>
          <p>
            <a href="https://github.com/dangzo/vue-audio-player" target="_new">
              https://github.com/dangzo/vue-audio-player
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss"></style>
