import clsx from 'clsx';
import { FC } from 'react';

interface Props {
  label?: string;
  classnames?: string;
}

const commonClassNames =
  'border border-dashed aspect-video p-2 border-secondary-dark flex items-center justify-center rounded cursor-pointer';
const ThumbnailPreview: FC<Props> = ({ label, classnames }): JSX.Element => {
  return (
    <div className={clsx(commonClassNames)}>
      <span>{label}</span>
    </div>
  );
};

export default ThumbnailPreview;
