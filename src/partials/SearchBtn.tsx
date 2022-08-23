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
      className={`${props.className} flex items-center`}
      onClick={debounce(() => onClick(), 100)}
    >
      {model ? (
        <IconClose className="icon-sm" />
      ) : (
        <span className="flex items-center">
          <IconSearch className="icon-sm" />
          <span className="text-lg">Search</span>
        </span>
      )}
    </div>
  );
};

export default SearchBtn;
