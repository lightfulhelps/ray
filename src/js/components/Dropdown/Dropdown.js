// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  isBlock?: boolean,
  render: (boolean, () => void) => React.Node,
};

type State = {
  isOpen: boolean,
};

class Dropdown extends React.Component<Props, State> {
  node = null;

  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleDocumentClick = (e: Event) => {
    if (
      !e ||
      (e && !e.target) ||
      (this.node && this.node.contains((e.target: any)) && this.node !== e.target)
    ) {
      return;
    }

    this.setState({ isOpen: false });
  };

  render() {
    const { className, isBlock, render, ...other } = this.props;
    const classes = classNames(className, 'dropdown', isBlock ? 'd-block' : 'd-inline-block');

    return (
      <div
        {...other}
        className={classes}
        ref={node => {
          this.node = node;
        }}
      >
        {render(this.state.isOpen, this.handleToggle)}
      </div>
    );
  }
}

export default Dropdown;
