"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _URLMetaPreview = _interopRequireDefault(require("./URLMetaPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    title: "National Living Wage 'fails to cover families' basic needs",
    description: "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says.",
    image: 'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg',
    url: 'https://www.bbc.co.uk/news/business-45242008'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_URLMetaPreview["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<URLMetaPreview />', function () {
  it('should return null if no url', function () {
    var _setup = setup({
      url: null
    }),
        wrapper = _setup.wrapper;

    expect(wrapper.type()).toBe(null);
  });
  it('should render', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render in vertical mode', function () {
    var _setup3 = setup({
      isVertical: true
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the className prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('url-meta-preview')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle no image', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="url-meta-preview-image"]').exists()).toBe(true);
    wrapper.setProps({
      image: null
    });
    expect(wrapper.find('[data-test-id="url-meta-preview-image"]').exists()).toBe(false);
  });
  it('should handle no description', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.find('[data-test-id="url-meta-preview-description"]').exists()).toBe(true);
    wrapper.setProps({
      description: null
    });
    expect(wrapper.find('[data-test-id="url-meta-preview-description"]').exists()).toBe(false);
  });
  it('should format the url', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.find('[data-test-id="url-meta-preview-url"]').text()).toBe('bbc.co.uk/news/business-45242008');
  });
  it('should pass through other props', function () {
    var _setup8 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup8.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});