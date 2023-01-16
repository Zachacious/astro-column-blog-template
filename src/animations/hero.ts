import gsap from 'gsap';

const heroAnimations = () => {
  const hero = document.getElementById('hero');

  const timeline = gsap.timeline({
    defaults: { ease: 'elastic.out(1, 0.3)' },
  });

  const setDefaults = () => {
    return gsap.timeline().set(hero, { left: '-800px' });
  };

  const logoAnimation = () => {
    return gsap.timeline().from('.hero-logo', {
      duration: 0.8,
      scale: 0,
      ease: 'elastic.out(1, 0.2)',
    });
  };

  const heroAnimation = () => {
    return gsap.timeline().to(hero, {
      duration: 0.5,
      left: '0px',
      ease: 'expo.inOut',
    });
  };

  timeline.add(setDefaults());
  timeline.add(heroAnimation());
  timeline.add(logoAnimation());
};

export default heroAnimations;
