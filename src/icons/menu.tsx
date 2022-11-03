const IconMenu = (props: { className?: string | undefined }) => (
  <div className={props.className}>
    <svg
      style={{ width: '100%', height: '100%' }}
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        fill="currentColor"
        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
      />
    </svg>
  </div>
);

export default IconMenu;
