<template>
  <div class="song-item">
    <span class="song-num">
      {{ getPrintableSongIndex }}
    </span>
    <span class="song-title">{{ title }} - {{ author }}</span>
    <span class="song-length">{{ length }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SongItem extends Vue {
  @Prop({ type: Number, required: true })
  index!: number;

  @Prop({ type: String, required: true })
  author!: string;

  @Prop({ type: String, required: true })
  length!: string;

  @Prop({ type: String, required: true })
  title!: string;

  get getPrintableSongIndex() {
    return `${(this.index < 10 ? "0" : "") + (this.index + 1)}.`;
  }
}
</script>

<style scoped></style>
