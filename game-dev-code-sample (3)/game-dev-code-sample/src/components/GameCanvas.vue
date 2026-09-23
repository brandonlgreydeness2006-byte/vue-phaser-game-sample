<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Phaser from 'phaser';
import DemoScene from '../game/DemoScene.js';
const host = ref(null); let game;
const emit = defineEmits(['collected']);
onMounted(() => { game = new Phaser.Game({ type: Phaser.AUTO, width: 800, height: 480, parent: host.value, backgroundColor:'#121827', physics:{default:'arcade',arcade:{debug:false}}, scene:[new DemoScene((n)=>emit('collected',n))] }); });
onBeforeUnmount(() => game?.destroy(true));
</script>
<template><section class="game"><div ref="host"></div></section></template>
