import gsap from 'gsap';

// create animation for element that uses elastic ease to scale in
// for element passed in
export const springIn = (element: HTMLElement) => {
  return gsap.timeline().from(element, {
    duration: 0.8,
    scale: 0,
    ease: 'elastic.out(1, 0.2)',
  });
};
