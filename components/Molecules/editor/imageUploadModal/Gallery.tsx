import { FC } from 'react';
import { BsCardImage } from 'react-icons/bs';
import CustomImages from './CustomImages';

interface Props {
  images: { src: string }[];
  onSelected: (src: string) => void;
  uploading?: boolean;
  selectedImage: string;
}

const Gallery: FC<Props> = ({
  images,
  onSelected,
  uploading,
  selectedImage = '',
}): JSX.Element => {
  return (
    <div className='flex flex-wrap'>
      {uploading && (
        <div className='basis-1/4 animate-pulse  p-2 rounded aspect-square flex flex-col  space-y-4 items-center justify-center bg-secondary-light text-primary-dark'>
          <BsCardImage size={60} />
          <p>Uploading .....</p>
        </div>
      )}
      {images.map(({ src }, index) => {
        return (
          <div key={index} className='basis-1/4 p-2 '>
            <CustomImages
              src={src}
              selected={selectedImage == src}
              onClick={() => onSelected(src)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
