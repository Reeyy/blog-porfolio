import { FC } from 'react';

interface Props {
  className: string;
}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      fill='none'
      className={props.className}
      viewBox='0 0 16 16'
    >
      <g fill='#fff' clipPath='url(#clip0_209_918)'>
        <path d='M6.836 5.092v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417H6.836z'></path>
        <path d='M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm3.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5V4.002z'></path>
      </g>
      <defs>
        <clipPath id='clip0_209_918'>
          <path fill='#fff' d='M0 0H16V16H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
