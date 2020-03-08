import * as React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: string;
}

// Size is an attibute of the input html element so there was a conflict with our size props.
// Hence the need to omit this atribute
type InputAttribute = Omit<React.HTMLProps<HTMLInputElement>, 'size'>;

const FormInput: React.FC<Props & InputAttribute> = ({
  className,
  isInvalid,
  isValid,
  size,
  type = 'text',
  ...other
}: Props) => {
  const checkInput = type === 'radio' || type === 'checkbox';
  const fileInput = type === 'file';
  const classes = classNames(
    className,
    checkInput ? 'form-check-input' : fileInput ? 'form-control-file' : 'form-control',
    size ? `form-control-${size}` : false,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  return <input {...other} className={classes} type={type} />;
};

export default FormInput;
