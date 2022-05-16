<template>
  <Container width="30" height="30">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import bulletImg from '../assets/bullet.png';

// const { bullet } = defineProps({
//   plane: {
//     type: Object,
//     required: true,
//   },
// });
</script>
