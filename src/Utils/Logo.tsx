type LogoProp = {
  stroke: string;
  width: string;
  height: string;
  strokeWidth: string;
};

function Logo({ stroke, width, height, strokeWidth }: LogoProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116.41 85.42"
      fill="#fff"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      width={width}
      height={height}
    >
      <g id="Layer_1">
        <path
          className="cls-1"
          d="m108.31,44.77l-13.99,13.83-19.74,19.51c-9.27,9.16-24.2,9.07-33.36-.19l-19.51-19.73-13.83-14C3.04,39.29.59,32.9.5,26.49c-.09-6.75,2.44-13.52,7.58-18.61,10.04-9.92,26.38-9.83,36.3.21l13.83,13.99,14-13.83c4.9-4.83,11.29-7.3,17.7-7.38,6.75-.09,13.52,2.44,18.61,7.59,9.92,10.04,9.83,26.37-.21,36.3Z"
        />
      </g>
      <g id="Layer_2">
        <path
          className="cls-1"
          d="m42.82,78.59c10.95-27.52,32.53-46.67,34.7-47.89.91-.51-30.92,33.9-12.27,36.76,8.11,1.24,28.46-17.94,28.19-36.31-.19-13.21-3.13-14.4-9.4-10.41-9.36,5.96-25.01,5.86-31.83,13.55-8.41,9.49-8.33,19.97-7.88,24.69"
        />
      </g>
    </svg>
  );
}

export default Logo;
