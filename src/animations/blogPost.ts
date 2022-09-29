import gsap from 'gsap';

const blogPostAnimations = () => {
  const timeline = gsap.timeline({ defaults: { ease: 'power1.out' } });

  const rightCol = document.getElementById('right-column-large');

  const rightColAnimation = () =>
    gsap.timeline().from(rightCol, {
      right: '-400px',
      duration: 1,
      ease: 'bounce.out',
    });

  timeline.add(rightColAnimation());
};

export default blogPostAnimations;
