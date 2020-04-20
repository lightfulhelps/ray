// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  children: React.Node,
  className?: string,
  defaultOpen?: boolean,
  label: string,
};

type State = {
  isOpen: boolean,
};

class Collapse extends React.Component<Props, State> {
  state = {
    isOpen: !!this.props.defaultOpen,
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
          className="collapse-toggle h6 mb-0 cursor-pointer d-flex justify-content-between align-items-center"
          data-test-id="collapse-toggle"
          onClick={this.handleToggle}
        >
          {label}{' '}
          <Icon isActive theme="gray-600" name={this.state.isOpen ? 'chevronUp' : 'chevronDown'} />
        </div>
        {this.state.isOpen && (
          <div className="collapse-children" data-test-id="collapse-children">
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default Collapse;