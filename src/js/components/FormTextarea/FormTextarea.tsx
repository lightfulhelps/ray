import * as React from 'react';
import classNames from 'classnames';

interface Props {
  children?: string;
  className?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
}

// Size is an attibute of the textArea html element so there was a conflict with our size props.
// Hence the need to omit this atribute
type TextAreaAttribute = Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'>;

const FormTextarea: React.FC<Props & TextAreaAttribute> = ({
  children,
  className,
  isInvalid,
  isValid,
  size,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'form-control',
    size ? `form-control-${size}` : false,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  return (
    <textarea {...other} className={classes}>
      {children}
    </textarea>
  );
};

export default FormTextarea;
