export const countUpAnimation = (element: Element, start: number, end: number, duration: number) => {
  console.log({element})
  let tamp: number | null = null;
  const step = (timestamp: number) => {
    if (!tamp) tamp = timestamp;
    const progress = Math.min((timestamp - tamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    (element as Element).textContent = currentValue.toString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};