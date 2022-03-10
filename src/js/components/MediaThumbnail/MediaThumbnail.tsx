import React from 'react';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { FormGroup, FormInput, FormLabel } from '../../index';

type Props = {
  alt?: string;
  className?: string;
  checkbox?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  onClick?: (src: string) => void;
  src: string;
  [key: string]: any;
};

const MediaThumbnail: React.FC<Props> = ({
  className,
  checkbox,
  isDisabled,
  isSelected,
  onClick,
  src,
  alt = '',
  ...other
}) => {
  const classes = classNames(
    className,
    'media-thumbnail',
    { selected: isSelected },
    { disabled: isDisabled },
    { 'cursor-pointer': typeof onClick === 'function' && !isDisabled }
  );
  const testId = `media-thumbnail-${nanoid()}`;

  return (
    <div {...other} className={classes} data-test-id={`${testId}`}>
      <div className="media-thumbnail-inner d-flex justify-content-center overflow-hidden align-items-center bg-gray-300 rounded-sm">
        <img className="mw-100 mh-100" src={src} alt={alt} />
      </div>
      {checkbox && (
        <FormGroup className="media-thumbnail-checkbox-group" isCheck>
          <FormInput
            type="checkbox"
            checked={isSelected}
            id={`${testId}-checkbox`}
            onClick={e => {
              e.preventDefault();
            }}
          />
          <FormLabel isCheck htmlFor={`${testId}-checkbox`}>
            {' '}
          </FormLabel>
        </FormGroup>
      )}
      <div
        onClick={() => !isDisabled && typeof onClick === 'function' && onClick(src)}
        className="stretched-link"
      />
    </div>
  );
};

export default MediaThumbnail;
