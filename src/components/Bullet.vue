<template>
  <Container :x="bullet.x" :y="bullet.y" :width="30" :height="30">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import bulletImg from '../assets/icon.png';
import { Bullet } from '../game';

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});
bullet.width = 100;
bullet.height = 100;
</script>
