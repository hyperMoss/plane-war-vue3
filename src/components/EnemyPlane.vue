<template>
  <Container :x="enemy.x" :y="enemy.y" :width="80" :height="80">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import enemyPlaneImg from '../assets/bullet.png';

import { EnemyPlane } from '../game';

defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});
</script>
