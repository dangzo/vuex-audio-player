import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { Track, EmptyTrack } from '@/models/Track.ts';

@Module({
  namespaced: true,
  name: 'model/Tracklist',
  stateFactory: true,
})
export default class TrackModelStore extends VuexModule {
  tracklist: Track[] = [];

  selectedTrack: Track = EmptyTrack;

  @Mutation
  setTracklist(newTracklist: Track[]): void {
    this.Tracklist = newTracklist;
  }

  @Mutation
  setSelectedTrackByIndex(trackIndex: number): void {
    if (this.Tracklist < this.Tracklist.length) {
      this.selectedTrack = this.Tracklist[trackIndex];
    } else {
      this.selectedTrack = this.Tracklist[0];
    }
  }

  get getTracklist(): Track[] {
    return this.Tracklist;
  }

  get getSelectedTrack(): Track {
    return this.selectedTrack;
  }
}
