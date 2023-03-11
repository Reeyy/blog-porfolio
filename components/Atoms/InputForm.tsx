import { FC } from 'react';
import clsx from 'clsx';
interface Props {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}
const inputClassNames =
  'w-full  bg-transparent outline-none border-2 border-secondary-dark focus:border-primary-dark rounded-md transition p-2 text-primary-dark ';

const InputForm: FC<Props> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  error,
}): JSX.Element => {
  return (
    <label className='block relative'>
      <span className='absolute pl-1 top-1/2 -translate-y-1/2 text-sm font-semibold text-secondary-dark '>
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={clsx(inputClassNames, 'italic pl-12')}
        onChange={onChange}
      />
    </label>
  );
};

export default InputForm;
