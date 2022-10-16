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

  const socialBtnAnimation = () => {
    return gsap.timeline().from('.hero-social-btn', {
      duration: 0.3,
      scale: 0,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.2)',
    });
  };

  const leftToolbarAnimation = () => {
    return gsap.timeline().from('.left-button', {
      duration: 0.5,
      left: '-100px',
      ease: 'bounce.out',
    });
  };

  const heroTagAnimation = () => {
    return gsap.timeline().from('.hero-tag', {
      duration: 0.5,
      scale: 0,
      stagger: 0.2,
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
  // timeline.add(postTitleAnimation());
  timeline.add(logoAnimation());
  timeline.add(leftToolbarAnimation(), '-=0.5');
  timeline.add(socialBtnAnimation(), '-=0.25');
  timeline.add(heroTagAnimation());
};

export default heroAnimations;
