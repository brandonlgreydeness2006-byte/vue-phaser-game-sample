<script setup>
import { ref } from 'vue';
import GameCanvas from './components/GameCanvas.vue';
const score = ref(0);
const status = ref('Collect all 5 stars.');
function collected(count) { score.value = count; status.value = count === 5 ? 'Complete — all stars collected!' : `Collected ${count} / 5 stars`; }
</script>
<template><main><section class="panel"><p class="eyebrow">TECHNICAL SAMPLE</p><h1>Vue 3 + Vite + Phaser</h1><p>A small interactive demo showing component lifecycle management, Phaser scenes, keyboard input, collisions and Vue ↔ game communication.</p><div class="stats"><strong>Stars: {{ score }}/5</strong><span>{{ status }}</span></div><p class="controls">Move: WASD or arrow keys</p></section><GameCanvas @collected="collected" /></main></template>
