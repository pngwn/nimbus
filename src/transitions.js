import { quintIn } from 'svelte/easing';

export const squish = (node, { duration = 500, delay = 0 }) => ({
  duration,
  delay,
  // easing: quintOut,
  css: t => `transform: scaleY(${t});`,
});

export const fade = (node, { duration = 1750, delay = 0 }) => ({
  duration,
  delay,
  //ease: quintIn,
  css: t => `transform: translateY(${(t - 1) * -30}px); opacity: ${t};`,
});

// 30  t= 0 t+30

// 25

// 0 t = 1 * 30
