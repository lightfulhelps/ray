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
  title?: string,
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
      color = 'currentColor',
      hoverColor,
      name,
      size = '1em',
      style = {},
      title,
      viewBox = '0 0 24 24',
      ...other
    } = this.props;
    const classes = classNames(className, 'icon');

    return (
      <svg
        {...other}
        className={classes}
        width={size}
        height={size}
        viewBox={viewBox}
        style={Object.assign({ fill: this.state.hover && hoverColor ? hoverColor : color }, style)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {title && <title>{title}</title>}
        {icons[name]}
      </svg>
    );
  }
}

export default Icon;
