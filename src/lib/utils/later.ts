export const later = (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
