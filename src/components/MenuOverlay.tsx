// import autoAnimate from "@formkit/auto-animate";
// import type { MarkdownInstance } from "astro";
// import React, { useEffect, useRef, useState } from "react";

import '@/css/menu.scss';

import { useState } from 'react';

import menuLinks from '@/data/menuLinks';
// import menuAnimations from '@/animations/menu';
import IconSearch from '@/icons/search';

// import MiniBlogCard from "@/components/MiniBlogCard";
// import type { PostFrontmatter } from "@/types/PostFrontmatter";

const MenuOverlay = (props: { id: string | undefined }) => {
  // const [menuValue] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onMenuBtnClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div
      id={props.id}
      className="menu-overlay mt-8 flex h-full w-full justify-center px-2 opacity-0"
    >
      <div className="w-full">
        <form
          action={`/search?s=${searchValue}`}
          method="post"
          className="menu-item bg-transparent relative mb-4 flex w-1/2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]"
        >
          <input
            id="searchbox"
            className="menu-searchbox w-full rounded-l-md border-l-2 border-y-2 border-textdark bg-transparent p-3 text-xl font-bold placeholder:text-textdark  focus:outline-none"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
          />
          <button
            type="submit"
            className="border-r-2 border-y-2 rounded-r-md border-textdark p-3 text-textdark"
          >
            <IconSearch className="icon-md" />
          </button>
        </form>

        <nav>
          {menuLinks.map((link: { name: string; url: string }) => (
            <div
              key={link.name}
              className="menu-item text-exo relative text-3xl py-2 px-1 cursor-pointer hover:brightness-125"
              onClick={() => onMenuBtnClick(link.url)}
            >
              {link.name}
            </div>
          ))}
        </nav>

        {/* <div>
          <div className="menu-item relative cursor-pointer hover:brightness-125">
            <a
              href="https://github.com/Zachacious"
              target="_blank"
              title="Github"
            >
              <IconGithub className="icon-lg" />
            </a>
          </div>
        </div> */}

        {/* <div className="mt-8">
          <SubscribeWidget />
        </div> */}
      </div>
    </div>
  );
};

export default MenuOverlay;
