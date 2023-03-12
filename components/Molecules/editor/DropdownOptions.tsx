import { FC, ReactNode, useState } from 'react';

interface Props {
  options: { label: string; onClick(): void }[];
  head: ReactNode;
}

const DropdownOptions: FC<Props> = ({ head, options }): JSX.Element => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <button
      onBlur={() => setShowOptions(false)}
      onMouseDown={() => setShowOptions(!showOptions)}
      className='relative'
    >
      {head}
      {showOptions && (
        <div className='min-w-max absolute top-full mt-4 right-2 z-10 border-2 border-primary-dark  rounded text-left bg-secondary-light'>
          <ul className='p-3 space-y-3 '>
            {options.map(({ label, onClick }, idx) => {
              return (
                <li className='font-semibold' key={idx} onMouseDown={onClick}>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;
