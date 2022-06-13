<template>
  <Container :x="enemy.x" :y="enemy.y" :width="80" :height="80">
    <Sprite :texture="enemyPlaneImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import enemyPlaneImg from '../assets/icon.png';

import { EnemyPlane } from '../game';

const { enemy } = defineProps({
  enemy: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});

enemy.width = 100;
enemy.height = 100;
</script>
