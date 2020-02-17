"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _PostMedia = _interopRequireDefault(require("./PostMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    media: []
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_PostMedia["default"], props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<PostMedia />', function () {
  it('should render with no media', function () {
    var _setup = setup({
      media: []
    }),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with a video', function () {
    var _setup2 = setup({
      media: [{
        type: 'video',
        url: 'http://foo.com/video.mov'
      }]
    }),
        wrapper = _setup2.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  var dummyImages = [{
    type: 'image',
    url: 'http://foo.com/image1.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image2.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image3.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image4.jpg'
  }];

  var _loop = function _loop(i) {
    it("should render ".concat(i, " image"), function () {
      var _setup4 = setup({
        media: dummyImages.slice(0, i)
      }),
          wrapper = _setup4.wrapper;

      expect(wrapper).toMatchSnapshot();
    });
  };

  for (var i = 1; i <= dummyImages.length; i++) {
    _loop(i);
  }

  it('should pass through other props', function () {
    var _setup3 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup3.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});