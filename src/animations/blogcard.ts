import gsap from 'gsap';

const blogCardAnimations = () => {
  const timeline = gsap.timeline({
    defaults: { ease: 'elastic.out(1, 0.3)' },
  });

  const blogCardAnimation = () => {
    return gsap.timeline().from('.blog-card, .featured-card', {
      duration: 0.3,
      stagger: 0.1,
      bottom: '-1000px',
      ease: 'expo.inOut',
      // bottom: '-100px',
      // ease: 'expo.inOut',
    });
  };

  timeline.add(blogCardAnimation());

  return timeline;
};

export default blogCardAnimations;
