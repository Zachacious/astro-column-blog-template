import { useEffect, useState } from 'react';

import IconClose from '@/icons/close';
import IconSearch from '@/icons/search';
import debounce from '@/utils/debounce';

const SearchBtn = (props: {
  className: string | undefined;
  onClick: Function;
  // model: boolean;
}) => {
  const [model, setModel] = useState(false);

  const onClick = () => {
    props.onClick();
    setModel(!model);
  };

  useEffect(() => {
    setModel(false);
  }, []);

  return (
    <div
      className={`${props.className} flex cursor-pointer items-center`}
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
