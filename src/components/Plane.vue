<template>
  <Container :x="plane.x" :y="plane.y" :width="100" :height="100">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import planeImg from '../assets/plane.png';
import { Plane } from '../game';

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

function move(e) {
  if (e.code === 'Space') {
    plane.attack();
    // return;
  }
  switch (e.code) {
    case 'ArrowUp':
      plane.moveUp();
      break;
    case 'ArrowDown':
      plane.moveDown();
      break;
    case 'ArrowLeft':
      plane.moveLeft();
      break;
    case 'ArrowRight':
      plane.moveRight();
      break;
    default:
      break;
  }
}

window.addEventListener('click', () => {
  window.addEventListener('keydown', move);
});

window.addEventListener('mouseover', (e) => {
  window.removeEventListener('keydown', move, false);
});
</script>

<style></style>
