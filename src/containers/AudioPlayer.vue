<template>
  <div class="player-container">
    <audio class="player" preload="true" controls="controls">
      <source
        v-if="selectedTrack"
        :src="`tracks/${selectedTrack.file}`"
        type="audio/mpeg"
      />
      Your browser does not support HTML5 Audio!
    </audio>
    <Playlist
      :tracks="tracks"
      :selected-track-index="selectedTrackIndex"
      @song-clicked="doHandleSongClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

import tracks from "@/assets/tracks";

// Components
import Playlist from "@/components/Playlist.vue";

// Models
import { Track } from "@/models/Track";

const tracklistVuexModule = namespace("tracklist");

@Component({
  components: {
    Playlist
  }
})
export default class AudioPlayer extends Vue {
  // Vuex state
  @tracklistVuexModule.State
  tracklist!: Track[];

  @tracklistVuexModule.State
  selectedTrack!: Track;

  // Vuex mutations
  @tracklistVuexModule.Mutation
  setTracklist!: (newTracklist: Track[]) => void;

  @tracklistVuexModule.Mutation
  setSelectedTrackByIndex!: (trackIndex: number) => void;

  // Vuex getters
  @tracklistVuexModule.Getter
  selectedTrackIndex!: number;

  // Local state
  tracks: Track[] = tracks;

  player: any = null;

  // Play song at selected index
  doPlaySong(index: number) {
    if (this.player) {
      this.setSelectedTrackByIndex(index);
      // Load selected song, then play it
      this.player.load(this.selectedTrack.file);
      this.player.play();
    }
  }

  // Play the next available song, cycling to the first one if currently
  // playing the last song.
  doPlayNextSong() {
    const nextIndex = this.selectedTrackIndex + 1;
    const playIndex = nextIndex < this.tracks.length ? nextIndex : 0;
    this.doPlaySong(playIndex);
  }

  // Put the song into play. This also creates the effect of restarting the
  // current song if something was already on play.
  doHandleSongClick(songIndex: number) {
    this.doPlaySong(songIndex);
  }

  created() {
    // Load track list
    this.setTracklist(this.tracks);
    // Load first track into player
    this.setSelectedTrackByIndex(0);
  }

  mounted() {
    // Add an event listener to the actual player so we can play the next
    // song when the current one ends.
    this.player = document.getElementsByClassName("player")[0];
    if (this.player) {
      this.player.addEventListener("ended", () => this.doPlayNextSong());
    }
  }
}
</script>

<style scoped lang="scss"></style>
