import gsap from 'gsap';

const menuAnimations = (reverse: bool = false) => {
  const timeline = gsap.timeline({
    defaults: { ease: 'elastic.out(1, 0.3)' },
  });

  const animButtonsIn = () => {
    return gsap.timeline().from('.menu-item', {
      duration: 0.4,
      left: '-400px',
      stagger: 0.1,
      ease: 'expo.inOut',
    });
  };

  // if reverse is true, reverse the animation
  // otherwise, play the animation

  if (reverse) {
    timeline.add(animButtonsIn().reverse());
  } else {
    timeline.add(animButtonsIn());
  }

  return timeline;
};

export default menuAnimations;
