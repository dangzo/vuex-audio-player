<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <PageHeader className="align-center"> -->
        React-Redux Audio Player
        <!-- </PageHeader> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- <AudioPlayer /> -->
      </div>
    </div>
    <!-- app footer (copyright and stuff) -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import AudioPlayer from "./components/AudioPlayer.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    // AudioPlayer
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
