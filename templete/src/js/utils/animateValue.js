export const animateValue = (element, start, end, duration) => {
  let tamp = null;
  const step = (timestamp) => {
    if (!tamp) tamp = timestamp;
    const progress = Math.min((timestamp - tamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.textContent = currentValue;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};