<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="align-center page-header">
          <h1>React-Redux Audio Player</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <AudioPlayer />
      </div>
    </div>
    <!-- app footer (copyright and stuff) -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Containers
import AudioPlayer from "./containers/AudioPlayer.vue";

// Components
import Footer from "./components/Footer.vue";

@Component({
  components: {
    AudioPlayer,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
