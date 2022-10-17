import { useEffect, useState } from 'react';

import IconClose from '@/icons/close';
import IconMenu from '@/icons/menu';
import debounce from '@/utils/debounce';

const onClickMenu = () => {
  const overlay = document.getElementById('main-overlay');
  const menu = document.getElementById('menu');
  const menuWrapper = document.getElementById('menu-wrapper');
  const title = document.getElementById('title');
  const heroMidSection = document.getElementById('hero-mid-section');

  if (overlay?.classList.contains('active')) {
    overlay?.classList.remove('active');
    overlay?.classList.remove('fade-in');
    overlay?.classList.add('fade-out');

    menu?.classList.remove('active');
    menu?.classList.remove('fade-in');
    menu?.classList.add('fade-out');

    title?.classList.remove('fade-out');
    title?.classList.add('fade-in-full');
    title?.classList.remove('hidden');

    heroMidSection?.classList.remove('fade-out');
    heroMidSection?.classList.add('fade-in-full');
    heroMidSection?.classList.remove('hidden');

    menu?.classList.add('pointer-events-none');
    menuWrapper?.classList.add('hidden');
  } else {
    overlay?.classList.add('active');
    overlay?.classList.add('fade-in');
    overlay?.classList.remove('fade-out');
    overlay?.classList.remove('opacity-0');

    menu?.classList.add('active');
    menu?.classList.add('fade-in');
    menu?.classList.remove('fade-out');
    menu?.classList.remove('opacity-0');
    menuWrapper?.classList.remove('hidden');

    title?.classList.remove('fade-in-full');
    title?.classList.add('fade-out');
    title?.classList.add('hidden');

    heroMidSection?.classList.remove('fade-in-full');
    heroMidSection?.classList.add('fade-out');
    heroMidSection?.classList.add('hidden');

    menu?.classList.remove('pointer-events-none');
  }
};

const MenuBtn = (props: { className?: string | undefined }) => {
  const [model, setModel] = useState(false);

  useEffect(() => {
    setModel(false);
  }, []);

  const onClick = () => {
    // if (window.matchMedia('(max-width: 640px)').matches) {
    //   window.location.href = `/menu?s=`;
    //   return;
    // }
    onClickMenu();
    setModel(!model);
  };

  return (
    <div
      className={`${props.className} flex cursor-pointer items-center text-textdark`}
      onClick={debounce(() => onClick(), 10)}
    >
      {model ? (
        <IconClose className="icon-lg" />
      ) : (
        <span className="flex items-center text-textdark">
          <IconMenu className="icon-lg" />
        </span>
      )}
    </div>
  );
};

export default MenuBtn;
