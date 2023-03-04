import {
  FC,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useId,
} from 'react';

export interface ModalImage {
  visible?: boolean;
  onClose?(): void;
}
interface Props extends ModalImage {
  children: ReactNode;
}

const ModalContainer: FC<Props> = ({
  visible,
  children,
  onClose,
}): JSX.Element | null => {
  const containerId = useId();
  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);
  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target }: any) => {
    if (target.id === containerId) handleClose();
  };
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleClose]);

  if (!visible) return null;
  return (
    <div
      id={containerId}
      onClick={handleClick}
      className='fixed inset-0 bg-primary dark:bg-primary-dark dark:bg-opacity-5 bg-opacity-5 backdrop-blur-[2px] z-50 flex items-center justify-center'
    >
      {children}
    </div>
  );
};

export default ModalContainer;
