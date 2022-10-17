import React, { useState } from 'react';

import IconSend from '@/icons/send';

const SubscribeWidget = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-4 flex w-full flex-wrap justify-end rounded-md py-4  text-primarydark   dark:text-textdark">
      <div className="text-exo w-full text-left text-2xl font-bold">Hey</div>
      <div className="w-full text-left text-sm font-bold">
        If you're interested in weekly updates, resources and other cool
        stuff...
      </div>
      <div className="my-2 flex w-full ">
        <input
          id="searchbox"
          className="w-full rounded-l-md border-2 border-accent bg-transparent p-3 text-xl font-bold text-primarydark placeholder:text-accent focus:outline-none  dark:text-textdark  dark:focus:border-textdark"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="email"
        />
        <div className="text-text-dark cursor-pointer rounded-r-md border-2 border-accent bg-boom p-3 text-lg font-bold  hover:brightness-75 dark:bg-accent">
          <IconSend className="icon-md" />
        </div>
      </div>
    </div>
  );
};

export default SubscribeWidget;
