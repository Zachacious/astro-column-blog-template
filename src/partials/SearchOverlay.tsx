import '@/css/search-overlay.scss';

import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import React, { useState } from 'react';

import MiniBlogCard from '@/partials/MiniBlogCard';

const filterPosts = (
  posts: MarkdownInstance<IFrontmatter>[],
  query: string
) => {
  return posts.filter((post) => {
    return (
      post.frontmatter.title.toLowerCase().includes(query.toLowerCase()) ||
      post.frontmatter.description.toLowerCase().includes(query.toLowerCase())
    );
  });
};

const SearchOverlay = (props: {
  id: string | undefined;
  posts: MarkdownInstance<IFrontmatter>[];
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(props.posts);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setFilteredPosts(filterPosts(props.posts, event.target.value));
  };

  return (
    <div
      id={props.id}
      className="search-overlay mt-8 flex h-full w-full justify-center px-2 opacity-0"
    >
      <div className="w-full">
        <form action="/" method="post">
          <input
            id="searchbox"
            className="w-full border-b-2 border-accent bg-transparent text-2xl font-bold placeholder:text-accent focus:border-textdark focus:outline-none"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search"
          />
        </form>

        <div className="my-8 flex w-full flex-wrap justify-center">
          {filteredPosts.map((post) => (
            <div className="mr-4 mb-4" key={post.url}>
              <MiniBlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
