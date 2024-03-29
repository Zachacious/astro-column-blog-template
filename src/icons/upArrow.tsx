const IconUpArrow = (props: { className?: string | undefined }) => (
  <div className={props.className}>
    <svg
      style={{ width: '100%', height: '100%' }}
      viewBox="0 0 24 24"
      role="img"
    >
      <path
        fill="currentColor"
        d="M14,20H10V11L6.5,14.5L4.08,12.08L12,4.16L19.92,12.08L17.5,14.5L14,11V20Z"
      />
    </svg>
  </div>
);

export default IconUpArrow;
