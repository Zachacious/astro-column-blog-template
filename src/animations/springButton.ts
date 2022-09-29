import gsap from 'gsap';

// animate button element when clicked using elastic ease to cause a spring effect
// that yoyos back to original position
export const springButtonAnimation = (button: HTMLElement) => {
  const timeline = gsap.timeline({ defaults: { ease: 'elastic.out(1, 0.3)' } });

  const anim = () => {
    return gsap.timeline().to(button, {
      duration: 0.5,
      scale: 0.8,
      yoyo: true,
      repeat: 1,
    });
  };

  timeline.add(anim());
};

export default springButtonAnimation;
