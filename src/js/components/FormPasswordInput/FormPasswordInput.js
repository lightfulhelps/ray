// @flow
import * as React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';

type Props = {
  className?: string,
  id?: string,
  name?: string,
  onBlur: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  onChange: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value: string,
};

type State = {
  hidePassword: boolean,
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
    const { className, onChange, onBlur, value, id, name, placeholder, ...other } = this.props;
    const { hidePassword } = this.state;
    const classes = classNames(className, 'form-password-input', 'input-group');

    return (
      <div {...other} className={classes}>
        <input
          className="form-control"
          data-test-id="password-input"
          name={name}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type={hidePassword ? 'password' : 'text'}
          value={value}
        />
        <div className="input-group-append">
          <Button
            data-test-id="password-input-button"
            icon={hidePassword ? 'preview' : 'previewHide'}
            isOutline
            onClick={this.togglePassword}
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
