// import autoAnimate from "@formkit/auto-animate";
// import type { MarkdownInstance } from "astro";
// import React, { useEffect, useRef, useState } from "react";

import { useState } from 'react';

import SubscribeWidget from './SubscribeWidget';

// import MiniBlogCard from "@/components/MiniBlogCard";
// import type { PostFrontmatter } from "@/types/PostFrontmatter";

const MenuOverlay = (props: { id: string | undefined }) => {
  // const [menuValue] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
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
          className="mb-4 flex w-full "
        >
          <input
            id="searchbox"
            className="w-full rounded-l-md border-2 border-accent bg-transparent p-3 text-xl font-bold placeholder:text-accent focus:border-textdark focus:outline-none"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
          />
          <button
            type="submit"
            className="rounded-r-md border-2 border-accent bg-accent p-3 text-textdark"
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <SubscribeWidget />
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
