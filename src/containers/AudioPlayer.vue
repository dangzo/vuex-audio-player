<template>
  <div class="player-container">
    <audio class="player" preload="true" controls="controls">
      <!-- <source :src=`tracks/${tracks[index].file}` type="audio/mpeg" /> -->
      Your browser does not support HTML5 Audio!
    </audio>
    <Playlist :tracks="tracks" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import Playlist from "@/components/Playlist.vue";

import tracks from "@/assets/tracks";

// Model
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
  tracklist: Track[] | undefined;

  // Vuex mutations
  @tracklistVuexModule.Mutation
  setTracklist!: (newTracklist: Track[]) => void;

  // Local state
  tracks: Track[] = tracks;
  /*
  import { playNext } from '../actions/audioPlayer.actions';

  import Playlist from './Playlist';
  import tracks from '../tracks';

  class AudioPlayer extends Component {
    componentDidMount() {
      const player = document.getElementsByClassName('player')[0];
      // eslint-disable-next-line  no-shadow
      const { playNextSong } = this.props;
      player.addEventListener('ended', () => playNextSong());
    }

    componentDidUpdate() {
      const player = document.getElementsByClassName('player')[0];
      const { index, playing } = this.props;

      player.load(tracks[index].file);
      if (playing) {
        player.play();
      }
    }

    render() {
      const { index } = this.props;
      return (
        
      );
    }
  }

  const mapStateToProps = state => ({
    tracks: state.playlist.tracks,
    playing: state.audioPlayer.playing,
    index: state.audioPlayer.index,
  });
  */
  created() {
    this.setTracklist(tracks);
  }
}
</script>

<style scoped lang="scss"></style>
