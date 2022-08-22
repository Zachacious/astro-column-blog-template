import IconSearch from '@/icons/search';
import debounce from '@/utils/debounce';

const SearchBtn = (props: {
  className: string | undefined;
  onClick: Function;
}) => (
  <div
    className={`${props.className} flex items-center`}
    onClick={debounce(() => props.onClick(), 100)}
  >
    <IconSearch className="icon-sm" />
    <span className="text-lg">Search</span>
  </div>
);

export default SearchBtn;
