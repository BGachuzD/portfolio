export const motionTokens = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6
  },
  easing: {
    easeOut: [0.16, 1, 0.3, 1],
    easeInOut: [0.4, 0, 0.2, 1]
  },
  stagger: {
    small: 0.06,
    normal: 0.1
  }
} as const;
