import { useEffect, useState } from 'react';

import IconClose from '@/icons/close';
import IconSearch from '@/icons/search';
import debounce from '@/utils/debounce';

const onClickSearch = () => {
  const overlay = document.getElementById('main-overlay');
  const search = document.getElementById('search');
  const searchWrapper = document.getElementById('search-wrapper');
  const title = document.getElementById('title');
  const heroMidSection = document.getElementById('hero-mid-section');

  if (overlay?.classList.contains('active')) {
    overlay?.classList.remove('active');
    overlay?.classList.remove('fade-in');
    overlay?.classList.add('fade-out');

    search?.classList.remove('active');
    search?.classList.remove('fade-in');
    search?.classList.add('fade-out');

    title?.classList.remove('fade-out');
    title?.classList.add('fade-in-full');
    title?.classList.remove('hidden');

    heroMidSection?.classList.remove('fade-out');
    heroMidSection?.classList.add('fade-in-full');
    heroMidSection?.classList.remove('hidden');

    search?.classList.add('pointer-events-none');
    searchWrapper?.classList.add('hidden');
  } else {
    overlay?.classList.add('active');
    overlay?.classList.add('fade-in');
    overlay?.classList.remove('fade-out');
    overlay?.classList.remove('opacity-0');

    search?.classList.add('active');
    search?.classList.add('fade-in');
    search?.classList.remove('fade-out');
    search?.classList.remove('opacity-0');
    searchWrapper?.classList.remove('hidden');

    title?.classList.remove('fade-in-full');
    title?.classList.add('fade-out');
    title?.classList.add('hidden');

    heroMidSection?.classList.remove('fade-in-full');
    heroMidSection?.classList.add('fade-out');
    heroMidSection?.classList.add('hidden');

    search?.classList.remove('pointer-events-none');
  }
};

const SearchBtn = (props: { className?: string | undefined }) => {
  const [model, setModel] = useState(false);

  useEffect(() => {
    setModel(false);
  }, []);

  const onClick = () => {
    if (window.matchMedia('(max-width: 640px)').matches) {
      window.location.href = `/search?s=`;
      return;
    }
    onClickSearch();
    setModel(!model);
  };

  return (
    <div
      className={`${props.className} flex cursor-pointer items-center text-textdark`}
      onClick={debounce(() => onClick(), 10)}
    >
      {model ? (
        <IconClose className="icon-sm" />
      ) : (
        <span className="flex items-center text-textdark">
          <IconSearch className="icon-sm" />
        </span>
      )}
    </div>
  );
};

export default SearchBtn;
