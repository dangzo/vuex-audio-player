export interface Track {
  title: string | undefined;
  author: string | undefined;
  file: string | undefined;
  length: string | undefined;
}

export const EmptyTrack: Track = {
  title: undefined,
  author: undefined,
  file: undefined,
  length: undefined
};
