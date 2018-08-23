// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import icons from './icons';

type Props = {
  className?: string,
  color?: string,
  hoverColor?: string,
  name: string,
  size?: number,
  style?: { [key: string]: any },
  viewBox?: string,
};

type State = {
  hover: boolean,
};

class Icon extends Component<Props, State> {
  state = {
    hover: false,
  };

  handleMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const {
      className,
      color = '#adb5bd',
      hoverColor = '#212529',
      name,
      size = 24,
      style = {},
      viewBox = '0 0 24 24',
    } = this.props;
    const classes = classNames(className, 'icon');

    return (
      <svg
        className={classes}
        width={size}
        height={size}
        viewBox={viewBox}
        style={Object.assign({ fill: this.state.hover ? hoverColor : color }, style)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {icons[name]}
      </svg>
    );
  }
}

export default Icon;
