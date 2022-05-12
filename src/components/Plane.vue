<template>
  <Container :x="plane.x" :y="plane.y" :width="100" :height="100">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import planeImg from '../assets/plane.png';
import { setupPlane } from '../game';

const data = reactive({});

const plane = setupPlane(data);
plane.speed = 10;

function move(e) {
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
