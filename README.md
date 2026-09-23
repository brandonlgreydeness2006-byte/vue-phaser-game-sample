# Vue 3 + Vite + Phaser Game Sample

A small game-development technical sample built with Vue 3, Vite and Phaser.

## What I Implemented

- Vue 3 application structure
- Phaser game integration inside a Vue component
- Player movement and keyboard controls
- Phaser physics
- Collectible objects and collision/overlap handling
- Score/game-state updates
- Communication between Phaser and the Vue UI
- Game scene lifecycle and cleanup
- Responsive game interface

## What I Debugged / Fixed

During testing, Vite initially failed to process the `.vue` single-file components.

I traced the problem to the Vue plugin not being configured in Vite and added `@vitejs/plugin-vue` through `vite.config.js`.

After the fix, the Vue components could be processed correctly by Vite.

## Run

```bash
npm install
npm run dev
