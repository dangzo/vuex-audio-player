<template>
  <div class="player-container">
    <audio class="player" preload="true" controls="controls">
      <!-- <source :src=`tracks/${tracks[index].file}` type="audio/mpeg" /> -->
      Your browser does not support HTML5 Audio!
    </audio>
    <!-- <Playlist /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AudioPlayer extends Vue {
  /*
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import { connect } from 'react-redux';

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

  const mapDispatchToProps = dispatch => ({
    playNextSong: () => dispatch(playNext()),
  });

  AudioPlayer.propTypes = {
    playNextSong: PropTypes.func.isRequired,
    playing: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
  };
  */
}
</script>

<style scoped lang="scss"></style>
