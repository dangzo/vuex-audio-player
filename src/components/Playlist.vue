<template>
  <ul class="playlist" data-cy="playlist">
    <li
      v-for="(track, index) in tracks"
      :key="`track-${index}`"
      :class="{ isPlaying: index === selectedTrackIndex }"
      @click="doEmitSongClicked(index)"
    >
      <SongItem
        :index="index"
        :author="track.author"
        :length="track.length"
        :title="track.title"
      />
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
  @Prop({ type: Array, required: true })
  tracks!: [];

  @Prop({ type: Number, required: true })
  selectedTrackIndex!: number;

  // Clicked on a song: put it into pause or play it
  // (but the AudioPlayer will manage it).
  doEmitSongClicked(songIndex: number) {
    this.$emit("song-clicked", songIndex);
  }
}
</script>
