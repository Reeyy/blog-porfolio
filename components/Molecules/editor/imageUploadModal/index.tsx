import { ChangeEventHandler, FC, useCallback, useState } from 'react';
import ModalContainer, { ModalImage } from '../ModalContainer';
import Gallery from './Gallery';
import Image from 'next/image';
import ActionButton from 'components/Atoms/ActionButton';
import { AiOutlineCloudUpload } from 'react-icons/ai';

export interface ImageSelectionResult {
  src: string;
  altText: string;
}
interface Props extends ModalImage {
  images: { src: string }[];
  uploading?: boolean;
  onFileSelect: (image: File) => void;
  onSelect: (result: ImageSelectionResult) => void;
}

const ImageUploadGalery: FC<Props> = ({
  visible,
  uploading,
  onClose,
  onSelect,
  onFileSelect,
  images,
}): JSX.Element => {
  const [selectImage, setSelectedImage] = useState<string>('');

  const [altText, setAltText] = useState<string>('');

  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);
  const handleOnImageChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { files } = target;
    if (!files) return;
    const file = files[0];
    if (!file.type.startsWith('image')) return onClose && onClose();
    onFileSelect(file);
  };
  const handleSelect = () => {
    if (!selectImage) return handleClose();
    onSelect({ src: selectImage, altText });
    handleClose();
  };
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className='max-w-4xl p-2 bg-primary-dark rounded'>
        <div className='flex'>
          {/* gallery */}
          <div className='basis-[75%] max-h-[450px] overflow-y-auto custom-scrollbar'>
            <Gallery
              onSelected={(src) => setSelectedImage(src)}
              images={images}
              selectedImage={selectImage}
              uploading={uploading}
            />
          </div>
          <div className='basis-1/4 px-2'>
            <div className='space-y-4'>
              <div>
                <input
                  onChange={handleOnImageChange}
                  hidden
                  type='file'
                  id='input-image'
                />
                <label htmlFor='input-image'>
                  <div className='w-full rounded-lg border-2 border-action text-action flex items-center justify-center space-x-2 p-2 cursor-pointer'>
                    <AiOutlineCloudUpload />
                    <span>UploadImage</span>
                  </div>
                </label>
              </div>
              {selectImage ? (
                <>
                  <textarea
                    value={altText}
                    onChange={(e) => setAltText(e.target.value)}
                    placeholder='Input your alt image here...'
                    className='resize-none   focus:ring-1 w-full rounded text-primary-dark h-32 text-left bg-secondary-light animate-reveal z-50  shadow-md p-2'
                  ></textarea>
                  <ActionButton onClick={handleSelect} busy title='Select' />
                  <div className='relative mt-2  bg-png-pattern aspect-video'>
                    <Image
                      fill
                      sizes='(max-width: 768px) 100vw, 768px'
                      src={selectImage}
                      alt='gallery'
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ImageUploadGalery;
