import { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';

interface Props {
  visible: boolean;
}

const Mark: FC<Props> = ({ visible }): JSX.Element | null => {
  if (!visible) return null;
  return (
    <div className='bg-action p-[5px] text-primary rounded-full bg-opacity-90 backdrop-blur-sm'>
      <BsCheckLg width={20} height={20} />
    </div>
  );
};

export default Mark;
