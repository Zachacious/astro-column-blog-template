const IconEmail = (props: { className?: string | undefined }) => (
  <div className={props.className}>
    <svg
      style={{ width: '100%', height: '100%' }}
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        fill="currentColor"
        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
      />
    </svg>
  </div>
);

export default IconEmail;
