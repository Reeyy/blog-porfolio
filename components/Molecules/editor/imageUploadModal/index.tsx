import { FC } from 'react';
import ModalContainer, { ModalImage } from '../ModalContainer';

interface Props extends ModalImage {}

const ImageUploadGalery: FC<Props> = ({ visible, onClose }): JSX.Element => {
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className='bg-secondary-dark p-20 text-black'>
        <button className='bg-white p-3'> Click me</button>
      </div>
    </ModalContainer>
  );
};

export default ImageUploadGalery;
