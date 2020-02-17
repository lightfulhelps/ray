"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _CampaignTemplateCard = _interopRequireDefault(require("./CampaignTemplateCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    title: 'Create your own',
    description: "Don't use a template, do your own thing.",
    image: 'http://foo.com/bar.jpg',
    onClick: function onClick() {}
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_CampaignTemplateCard["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<CampaignTemplateCard />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render when isSelected', function () {
    var _setup2 = setup({
      isSelected: true
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle className', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('campaign-template-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should handle title', function () {
    var title = 'My title';

    var _setup4 = setup({
      title: title
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('[data-test-id="campaign-template-card-title"]').text()).toEqual(title);
  });
  it('should handle description', function () {
    var description = 'My description';

    var _setup5 = setup({
      description: description
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('[data-test-id="campaign-template-card-description"]').text()).toEqual(description);
  });
  it('should handle background image', function () {
    var image = 'bar.com/foo.jpg';

    var _setup6 = setup({
      image: image
    }),
        wrapper = _setup6.wrapper;

    var style = wrapper.find('[data-test-id="campaign-template-card-image"]').prop('style');
    expect(style).toHaveProperty('backgroundImage', 'url(bar.com/foo.jpg)');
  });
  it('should run onClick event when button is clicked', function () {
    var onClick = jest.fn();

    var _setup7 = setup({
      onClick: onClick
    }),
        wrapper = _setup7.wrapper;

    wrapper.find('[data-test-id="campaign-template-card-button"]').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
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