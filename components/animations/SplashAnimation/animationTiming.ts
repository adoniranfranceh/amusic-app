const TOTAL_DURATION = 3000;

export const percent = (value: number) => (value / 100) * TOTAL_DURATION;

export const timings = {
  needle: percent(32.5),
  glowIn: percent(10),
  logoScale: percent(50),
};
