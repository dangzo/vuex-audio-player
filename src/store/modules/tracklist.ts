import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Track, EmptyTrack } from "@/models/Track";

@Module({ namespaced: true })
export default class TracklistModelStore extends VuexModule {
  tracklist: Track[] = [];

  selectedTrack: Track = EmptyTrack;

  @Mutation
  setTracklist(newTracklist: Track[]): void {
    this.tracklist = newTracklist;
  }

  @Mutation
  setSelectedTrackByIndex(trackIndex: number): void {
    if (trackIndex < this.tracklist.length) {
      this.selectedTrack = this.tracklist[trackIndex];
    } else {
      this.selectedTrack = this.tracklist[0];
    }
  }

  get selectedTrackIndex(): number {
    return this.tracklist.findIndex(
      track => track.file === this.selectedTrack.file
    );
  }
}
