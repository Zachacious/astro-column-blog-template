const IconDate = (props: { className: string | undefined }) => (
  <div className={props.className}>
    <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"
      />
    </svg>
  </div>
);

export default IconDate;
