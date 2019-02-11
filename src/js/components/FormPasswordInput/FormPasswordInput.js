// @flow
import * as React from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';

type Props = {
  className?: string,
};

type State = {
  hidePassword: boolean,
};

class FormPasswordInput extends React.Component<Props, State> {
  state = {
    hidePassword: true,
  };

  togglePassword = () => {
    this.setState(prevState => ({
      hidePassword: !prevState.hidePassword,
    }));
  };

  render() {
    const { className, ...other } = this.props;
    const { hidePassword } = this.state;
    const classes = classNames(className, 'form-password-input', 'input-group');

    const inputType = hidePassword ? 'password' : 'text';
    const buttonText = hidePassword ? 'Show' : 'Hide';
    const icon = hidePassword ? 'preview' : 'previewHide';

    return (
      <div className={classes}>
        <input type={inputType} className="form-control" {...other} />
        <div className="input-group-append">
          <Button onClick={this.togglePassword} icon={icon} isOutline theme="gray-600">
            <span className="form-password-input__toggle-password-text">{buttonText}</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default FormPasswordInput;
