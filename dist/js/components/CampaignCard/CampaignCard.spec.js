"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _CampaignCard = _interopRequireDefault(require("./CampaignCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    cover: 'http://lorempixel.com/640/480',
    title: 'THX distributed',
    state: 'Live'
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_CampaignCard["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<CampaignCard />', function () {
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
    expect(wrapper.hasClass('campaign-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle the cover prop', function () {
    var cover = 'http://lorempixel.com/b924f7e6-5434-4ef4-bdc6-2670b799f27c';

    var _setup3 = setup({
      cover: cover
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.find('[data-test-id="campaign-card-cover"]').prop('style').backgroundImage).toContain(cover);
  });
  it('should handle the title prop', function () {
    var title = 'azure Handcrafted Wooden Car';

    var _setup4 = setup({
      title: title
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('[data-test-id="campaign-card-title"]').text()).toEqual(title);
  });
  it('should handle the Live state', function () {
    var _setup5 = setup({
      state: 'Live'
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="campaign-card-state"]').text()).toEqual('Live');
    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).toContain('text-primary');
    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).not.toContain('text-warning');
  });
  it('should handle the Draft state', function () {
    var _setup6 = setup({
      state: 'Draft'
    }),
        wrapper = _setup6.wrapper;

    expect(wrapper.find('[data-test-id="campaign-card-state"]').text()).toEqual('Draft');
    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).not.toContain('text-primary');
    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).toContain('text-warning');
  });
  it('should handle the tag prop', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper;

    expect(wrapper.type()).toBe('div');
    wrapper.setProps({
      tag: 'a'
    });
    expect(wrapper.type()).toBe('a');
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