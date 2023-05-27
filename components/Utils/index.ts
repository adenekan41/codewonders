export const getTransitions = (delay?: number) => ({
  transition: { duration: 0.5, delay },
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.98 },
});
