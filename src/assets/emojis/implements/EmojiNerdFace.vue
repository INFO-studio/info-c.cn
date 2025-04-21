<script setup lang="ts">
import NerdFace from '@/assets/emojis/raw/nerd-face.webp'
</script>

<template>
  <img :src="NerdFace" alt="🤓" class="emoji" />
</template>

<style scoped>
.emoji {
  display: inline;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
}
</style>
