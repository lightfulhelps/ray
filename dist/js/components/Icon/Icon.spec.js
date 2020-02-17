"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.mock('./icons', function () {
  return {
    analytics: _react["default"].createElement("path", {
      fillRule: "nonzero",
      d: "M6.5883 20h-3.727C2.3855 20 2 19.6427 2 19.2017V5.7983C2 5.3573 2.3855 5 2.8613 5h3.727c.4758 0 .8613.3573.8613.7983v13.4034c-.0007.441-.3862.7983-.8613.7983zm7.2749 0h-3.727c-.4759 0-.8613-.3573-.8613-.7983V8.6765c0-.441.3854-.7983.8612-.7983h3.727c.4759 0 .8614.3573.8614.7983v10.5252c0 .441-.3855.7983-.8613.7983zm7.2755 0h-3.727c-.4758 0-.8613-.3573-.8613-.7983V11.258c0-.441.3855-.7983.8613-.7983h3.727c.4758 0 .8613.3573.8613.7983v7.9436c0 .441-.3855.7983-.8613.7983z"
    }),
    comment: _react["default"].createElement("path", {
      fillRule: "nonzero",
      d: "M15.2995 5.016c-.0656-.0064-.1312-.0128-.2-.016-.95.0032-1.9.0043-2.85.0032-.2406 0-1.5687 0-3.0812-.0032-.3907.0192-.675.0416-.775.0608-2.872.5149-4.8125 3.406-4.3157 6.3514.4657 2.7664 2.6407 4.6565 5.3844 4.6725.7406.0032 1.4813-.0096 2.2219.0096.1734.006.341.065.4812.1695.7625.6076 1.5063 1.244 2.2688 1.8517.2625.2079.5531.3965.8562.518.5657.224 1.047-.0287 1.2438-.6236a2.651 2.651 0 0 0 .1281-.678 15.506 15.506 0 0 0 .0094-1.3208c-.0094-.2366.0594-.3646.275-.4765 2.1094-1.1002 3.2156-3.1374 3.0344-5.552-.1938-2.552-2.1994-4.73-4.6813-4.9666z"
    })
  };
});

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    name: 'analytics',
    size: 30
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_Icon["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<Icon />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the className prop', function () {
    var _setup2 = setup({
      className: 'custom'
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper.hasClass('icon')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the name prop', function () {
    var _setup3 = setup({
      name: 'analytics'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.contains(_icons["default"].analytics)).toBe(true);
    wrapper.setProps({
      name: 'comment'
    });
    expect(wrapper.contains(_icons["default"].comment)).toBe(true);
  });
  it('should handle the size prop', function () {
    var _setup4 = setup({
      size: 20
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.prop('width')).toEqual(20);
    expect(wrapper.prop('height')).toEqual(20);
  });
  it('should handle the viewBox prop', function () {
    var _setup5 = setup({
      viewBox: '0 0 16 16'
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.prop('viewBox')).toEqual('0 0 16 16');
  });
  it('should update state on mouse enter and mouse leave', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.state('hover')).toBe(false);
    wrapper.simulate('mouseEnter');
    expect(wrapper.state('hover')).toBe(true);
    wrapper.simulate('mouseLeave');
    expect(wrapper.state('hover')).toBe(false);
  });
  it('should handle the style prop', function () {
    var _setup7 = setup({
      style: {
        marginTop: '5px'
      }
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.prop('style')).toEqual({
      fill: 'currentColor',
      marginTop: '5px'
    });
  });
  it('should handle the color prop', function () {
    var _setup8 = setup({
      color: '#ffff00'
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.prop('style')).toEqual({
      fill: '#ffff00'
    });
  });
  it('should handle the theme prop', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper;

    expect(wrapper.hasClass('icon-primary')).toBe(false);
    wrapper.setProps({
      theme: 'primary'
    });
    expect(wrapper.hasClass('icon-primary')).toBe(true);
  });
  it('should not use color if theme is provided', function () {
    var _setup10 = setup({
      color: 'blue'
    }),
        wrapper = _setup10.wrapper;

    expect(wrapper.prop('style').fill).toBe('blue');
    wrapper.setProps({
      theme: 'primary'
    });
    expect(wrapper.prop('style').fill).toBe(undefined);
  });
  it('should not use hoverColor if theme is provided', function () {
    var _setup11 = setup({
      hoverColor: 'blue'
    }),
        wrapper = _setup11.wrapper;

    wrapper.setState({
      hover: true
    });
    expect(wrapper.prop('style').fill).toBe('blue');
    wrapper.setProps({
      theme: 'primary'
    });
    expect(wrapper.prop('style').fill).toBe(undefined);
  });
  it('should not update fill color on hover if hoverColor is not provided', function () {
    var _setup12 = setup({
      color: 'red',
      hoverColor: null
    }),
        wrapper = _setup12.wrapper;

    expect(wrapper.prop('style')).toEqual({
      fill: 'red'
    });
    wrapper.simulate('mouseEnter');
    expect(wrapper.prop('style')).toEqual({
      fill: 'red'
    });
    wrapper.simulate('mouseLeave');
    expect(wrapper.prop('style')).toEqual({
      fill: 'red'
    });
  });
  it('should update fill color on hover if hoverColor is provided', function () {
    var _setup13 = setup({
      color: 'red',
      hoverColor: 'blue'
    }),
        wrapper = _setup13.wrapper;

    expect(wrapper.prop('style')).toEqual({
      fill: 'red'
    });
    wrapper.simulate('mouseEnter');
    expect(wrapper.prop('style')).toEqual({
      fill: 'blue'
    });
    wrapper.simulate('mouseLeave');
    expect(wrapper.prop('style')).toEqual({
      fill: 'red'
    });
  });
  it('should pass through other props', function () {
    var _setup14 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup14.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
  it('should have cursor pointer if onClick and not disabled', function () {
    var _setup15 = setup(),
        wrapper = _setup15.wrapper;

    expect(wrapper.hasClass('cursor-pointer')).toBe(false);
    wrapper.setProps({
      onClick: jest.fn()
    });
    expect(wrapper.hasClass('cursor-pointer')).toBe(true);
    wrapper.setProps({
      isDisabled: true
    });
    expect(wrapper.hasClass('cursor-pointer')).toBe(false);
  });
});