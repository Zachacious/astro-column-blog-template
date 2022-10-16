// import autoAnimate from "@formkit/auto-animate";
// import type { MarkdownInstance } from "astro";
// import React, { useEffect, useRef, useState } from "react";

import { useState } from 'react';

// import MiniBlogCard from "@/components/MiniBlogCard";
// import type { PostFrontmatter } from "@/types/PostFrontmatter";

const MenuOverlay = (props: { id: string | undefined }) => {
  const [menuValue] = useState((window as any).menuActive || false);
  const [searchValue] = useState('');

  return (
    <div
      id={props.id}
      className="menu-overlay mt-8 flex h-full w-full justify-center px-2 opacity-0"
    >
      <div className="w-full">
        <form
          action={`/search?s=${searchValue}`}
          method="post"
          className="w-full"
        >
          <input
            id="searchbox"
            className="w-full border-b-2 border-accent bg-transparent text-2xl font-bold placeholder:text-accent focus:border-textdark focus:outline-none"
            type="text"
            value={menuValue}
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default MenuOverlay;
