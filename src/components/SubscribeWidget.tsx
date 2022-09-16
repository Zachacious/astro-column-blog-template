import React, { useState } from 'react';

const SubscribeWidget = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-4 flex w-full flex-wrap justify-end rounded-md  text-primarydark   dark:text-textdark">
      <div className="text-exo w-full text-left text-2xl font-bold">Hey</div>
      <div className="w-full text-left text-sm font-bold">
        If you're interested in weekly updates, resources and other cool
        stuff...
      </div>
      <input
        id="searchbox"
        className="my-2 w-full border-b-2 border-primarydark bg-transparent text-xl font-bold text-primarydark placeholder:text-primarydark focus:outline-none dark:border-textdark dark:text-textdark dark:placeholder:text-textdark dark:focus:border-textdark"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="email@domain.com"
      />
      <div className="my-2 cursor-pointer rounded-md bg-boom p-2 text-lg font-bold text-primarydark  dark:bg-boomdark">
        Subscribe
      </div>
    </div>
  );
};

export default SubscribeWidget;
