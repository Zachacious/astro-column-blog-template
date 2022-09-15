import React, { useState } from 'react';

const SubscribeWidget = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-4 flex w-full flex-wrap justify-end rounded-md bg-boomred p-4 text-textdark drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] dark:bg-boomdark dark:text-primarydark">
      <div className="text-exo w-full text-left text-2xl font-bold">Hey</div>
      <div className="w-full text-left text-sm font-bold">
        If you're interested in weekly updates, resources and other cool stuff
      </div>
      <input
        id="searchbox"
        className="my-2 w-full border-b-2 border-accent bg-transparent text-xl font-bold placeholder:text-accent focus:border-textdark focus:outline-none"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="email@domain.com"
      />
      <div className="my-2 cursor-pointer rounded-md bg-primarydark p-2 text-lg text-textdark">
        Subscribe
      </div>
    </div>
  );
};

export default SubscribeWidget;
