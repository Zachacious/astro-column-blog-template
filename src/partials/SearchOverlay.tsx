import '@/css/search-overlay.scss';

import React, { useState } from 'react';

const SearchOverlay = (props: { id: string | undefined }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div
      id={props.id}
      className="search-overlay mt-4 flex h-full w-full justify-center px-2 opacity-0"
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
      </div>
    </div>
  );
};

export default SearchOverlay;
