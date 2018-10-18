// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import icons from './icons';
import type { IconNameType } from './icons';

type Props = {
  className?: string,
  color?: string,
  hoverColor?: string,
  name: IconNameType,
  size?: number,
  style?: { [key: string]: any },
  theme?: string,
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
      theme,
      title,
      viewBox = '0 0 24 24',
      ...other
    } = this.props;
    const classes = classNames(className, 'icon', theme ? `icon-${theme}` : '');

    if (theme) {
      delete style.fill;
    } else {
      style.fill = this.state.hover && hoverColor ? hoverColor : color;
    }

    return (
      <svg
        {...other}
        className={classes}
        width={size}
        height={size}
        viewBox={viewBox}
        style={style}
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
