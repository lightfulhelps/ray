"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _ResourceCard = _interopRequireWildcard(require("./ResourceCard"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    campaign: 'Fireside Storytelling',
    gradientStart: '#fafafa',
    gradientEnd: '#000000',
    resource: 'http://foo.com/bar.pdf',
    title: 'Useful storytelling guide'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_ResourceCard["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<ResourceCard />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle className', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('resource-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle campaign', function () {
    var campaign = 'My campaign';

    var _setup3 = setup({
      campaign: campaign
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.find('[data-test-id="resource-card-campaign"]').text()).toEqual(campaign);
  });
  it('should handle title', function () {
    var title = 'My title';

    var _setup4 = setup({
      title: title
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('[data-test-id="resource-card-title"]').text()).toEqual(title);
  });
  it('should display background image if valid backgroundImage URL is passed', function () {
    var _setup5 = setup({
      imageForBackground: 'https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80'
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.prop('style')).toEqual(expect.objectContaining({
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80')"
    }));
  });
  it('should display background image in perference of gradients if backgroundImage URL is passed', function () {
    var _setup6 = setup({
      gradientStart: '#ff0000',
      gradientEnd: '#fafafa',
      imageForBackground: 'https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80'
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.prop('style')).toEqual(expect.objectContaining({
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('https://images.unsplash.com/photo-1566996533071-2c578080c06e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80')"
    }));
  });
  it('should not have a gradient background if gradientStart is an invalid HEX code', function () {
    var _setup7 = setup({
      gradientStart: 'foo',
      gradientEnd: '#ff0000'
    }),
        wrapper = _setup7.wrapper;

    expect(wrapper.prop('style').backgroundImage).toBeUndefined();
  });
  it('should not have a gradient background if gradientEnd is an invalid HEX code', function () {
    var _setup8 = setup({
      gradientStart: '#ff0000',
      gradientEnd: 'foo'
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.prop('style').backgroundImage).toBeUndefined();
  });
  it('should have a gradient background if gradientStart and gradientEnd are valid HEX codes', function () {
    var _setup9 = setup({
      gradientStart: '#ff0000',
      gradientEnd: '#fafafa'
    }),
        wrapper = _setup9.wrapper;

    expect(wrapper.prop('style').backgroundImage).toEqual('linear-gradient(90deg, #ff0000 0%, #fafafa 100%)');
  });
  it('should handle the tag prop', function () {
    var _setup10 = setup(),
        wrapper = _setup10.wrapper;

    expect(wrapper.type()).toBe('a');
    wrapper.setProps({
      tag: 'div'
    });
    expect(wrapper.type()).toBe('div');
  });
  it('should pass through other props', function () {
    var _setup11 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup11.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
describe('isHex', function () {
  it('should return true for hex-like strings', function () {
    expect((0, _ResourceCard.isHex)('#000')).toBe(true);
    expect((0, _ResourceCard.isHex)('#FFF')).toBe(true);
    expect((0, _ResourceCard.isHex)('#fff')).toBe(true);
    expect((0, _ResourceCard.isHex)('#FF0000')).toBe(true);
    expect((0, _ResourceCard.isHex)('#ff0000')).toBe(true);
    expect((0, _ResourceCard.isHex)('#FAFAFA')).toBe(true);
    expect((0, _ResourceCard.isHex)('#fafafa')).toBe(true);
  });
  it('should return false for non hex-like strings', function () {
    expect((0, _ResourceCard.isHex)('foo')).toBe(false);
    expect((0, _ResourceCard.isHex)('000')).toBe(false);
    expect((0, _ResourceCard.isHex)('FFF')).toBe(false);
    expect((0, _ResourceCard.isHex)('#f')).toBe(false);
    expect((0, _ResourceCard.isHex)('#ff')).toBe(false);
    expect((0, _ResourceCard.isHex)('#ffff')).toBe(false);
    expect((0, _ResourceCard.isHex)('#fffff')).toBe(false);
    expect((0, _ResourceCard.isHex)('#fffffff')).toBe(false);
  });
});