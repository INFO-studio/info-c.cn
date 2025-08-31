<script setup lang="ts">
import FaceWithMonocle from "@/assets/emojis/raw/face-with-monocle.webp";
</script>

<template>
  <img :src="FaceWithMonocle" alt="🧐" class="emoji" />
</template>

<style scoped>
.emoji {
  display: inline;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
}
</style>
