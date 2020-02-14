import * as React from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../..';

type Props = {
  className?: string;
  id?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  name?: string;
  onBlur: (arg0: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange: (arg0: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  value: string;
};

type State = {
  hidePassword: boolean;
};

class FormPasswordInput extends React.Component<Props, State> {
  state = {
    hidePassword: true,
  };

  static defaultProps = {
    name: 'password',
  };

  togglePassword = () => {
    this.setState(prevState => ({
      hidePassword: !prevState.hidePassword,
    }));
  };

  render() {
    const {
      className,
      onChange,
      onBlur,
      value,
      id,
      isInvalid,
      isValid,
      name,
      placeholder,
      size,
      ...other
    } = this.props;
    const { hidePassword } = this.state;
    const classes = classNames(className, 'form-control');

    return (
      <div className="form-password-input input-group">
        <FormInput
          {...other}
          className={classes}
          data-test-id="password-input"
          isInvalid={isInvalid}
          isValid={isValid}
          name={name}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          type={hidePassword ? 'password' : 'text'}
          value={value}
        />
        <div className="input-group-append">
          <Button
            data-test-id="password-input-button"
            icon={hidePassword ? 'preview' : 'previewHide'}
            isOutline
            onClick={this.togglePassword}
            size={size}
            theme="gray-600"
          >
            <span className="form-password-input__toggle-password-text">
              {hidePassword ? 'Show' : 'Hide'}
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

export default FormPasswordInput;
