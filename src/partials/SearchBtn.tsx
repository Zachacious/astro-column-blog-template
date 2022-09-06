import { useEffect, useState } from 'react';

import IconClose from '@/icons/close';
import IconSearch from '@/icons/search';
import debounce from '@/utils/debounce';

const SearchBtn = (props: {
  className?: string | undefined;
  onclick: () => void;
  // model: boolean;
}) => {
  const [model, setModel] = useState(false);

  console.log(props.onclick);

  useEffect(() => {
    setModel(false);
  }, []);

  const onClick = () => {
    if (props.onclick) props.onclick();
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
          {/* <span className="text-lg font-bold uppercase">Search</span> */}
        </span>
      )}
    </div>
  );
};

export default SearchBtn;
