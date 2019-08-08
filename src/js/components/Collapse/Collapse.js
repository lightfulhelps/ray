// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  children: React.Node,
  className?: string,
  label: string,
};

type State = {
  isOpen: boolean,
};

class Collapse extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { children, className, label, ...other } = this.props;
    const classes = classNames(className);

    return (
      <div {...other} className={classes}>
        <div
          className="h5 cursor-pointer"
          data-test-id="collapse-toggle"
          onClick={this.handleToggle}
        >
          {label} <Icon theme="gray-600" name={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
        </div>
        {this.state.isOpen && <div data-test-id="collapse-children">{children}</div>}
      </div>
    );
  }
}

export default Collapse;
