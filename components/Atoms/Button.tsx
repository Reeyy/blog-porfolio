import clsx from 'clsx';
import { FC, MouseEventHandler, ReactNode, useCallback } from 'react';
interface Props {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const Button: FC<Props> = ({
  children,
  active,
  disabled,
  onMouseDown,
  onClick,
}): JSX.Element => {
  const getActiveClass = useCallback((): string => {
    if (active) {
      return 'bg-white text-secondary-dark';
    } else return 'text-secondary-light bg-secondary-dark';
  }, [active]);

  const commonClasses =
    'p-2 rounded text-lg hover:sclae-110 hover:shadow-md transition ';
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      onMouseDown={onMouseDown}
      className={clsx(commonClasses + getActiveClass())}
    >
      {children}
    </button>
  );
};

export default Button;
