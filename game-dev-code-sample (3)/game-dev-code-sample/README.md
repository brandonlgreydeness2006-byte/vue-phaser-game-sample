# Game Developer Code Sample

A compact technical sample built with **Vue 3, Vite and Phaser**.

## What it demonstrates
- Vue component structure and reactive UI state
- Phaser scene setup and lifecycle cleanup
- Keyboard movement with WASD / arrow keys
- Arcade Physics overlap detection
- Communication from the Phaser scene back to Vue
- A production build using Vite

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Demo
Move the blue player with WASD or the arrow keys and collect five stars. The Phaser scene emits collection events to the Vue interface, which updates the status panel.

## Notes
This repository is a technical demonstration project created to show familiarity with an existing-style frontend game stack. It is intentionally small so the implementation is easy to review.
