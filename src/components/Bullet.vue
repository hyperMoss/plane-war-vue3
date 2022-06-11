<template>
  <Container :x="bullet.x" :y="bullet.y" :width="30" :height="30">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import bulletImg from '../assets/icon.png';
import { Bullet } from '../game';

defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});
</script>
