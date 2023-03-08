import { FC } from 'react';
import Image from 'next/image';
import Mark from 'components/Atoms/Mark';
interface Props {
  src: string;
  selected?: boolean;
  onClick?: () => void;
}

const CustomImages: FC<Props> = ({ src, selected, onClick }): JSX.Element => {
  return (
    <div onClick={onClick} className='rounded relative overflow-hidden'>
      <Image
        className='bg-secondary-dark hover:scale-110 transition'
        src={src}
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
        alt='gallery'
      />
      <div className='absolute top-1 left-2 '>
        <Mark visible={selected || false} />
      </div>
    </div>
  );
};

export default CustomImages;
