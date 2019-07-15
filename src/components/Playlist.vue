<template>
  <ul class="playlist">
    <!-- <li className={`${currentPlaying(isActive)}`} onClick={this.clickSong}> -->
    <li v-for="(track, index) in tracks" :key="`track-${index}`" :class="{ 'isPlaying': track.active }">
      <SongItem :index="index" :author="track.author" :length="track.length" :title="track.title" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SongItem from "@/components/SongItem.vue";

@Component({
  components: {
    SongItem
  }
})
export default class Playlist extends Vue {
  @Prop({ type: Array, required: true, default: () => [] })
  tracks!: [];
}
</script>
