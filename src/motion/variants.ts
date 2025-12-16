import {motionTokens} from './tokens';

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.easeOut
    }
  }
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.easeOut
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTokens.stagger.normal
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: motionTokens.duration.normal,
      ease: motionTokens.easing.easeOut
    }
  }
};

export const container = {
  hidden: {},
  visible: (stagger = motionTokens.stagger.normal) => ({
    transition: {staggerChildren: stagger}
  })
};

