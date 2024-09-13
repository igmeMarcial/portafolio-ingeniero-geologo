export const fadeInX = (value) => ({
  hidden: {
    opacity: 0,
    x: value === "positive" ? 45 : value === "negative" ? -45 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.5 },
  },
});

export const fadeInY = (delay) => ({
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

export const stagger = (value) => ({
  hidden: {
    opacity: 0,
    y: value === "positive" ? 45 : value === "negative" ? -45 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.25,
      staggerChildren: 0.2,
    },
  },
});

export const dropDownFadeInY = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const popOut = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      duration: 0.5,
    },
  },
};
