"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _dateFns = require("date-fns");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _merge["default"])({
    post: {
      id: '08a2a5c0-a77b-11e8-a45a-3bfafb0c9405',
      date: '2018-08-22 14:34',
      content: 'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
      campaign: {
        name: 'Campaign',
        color: '#ff0000'
      },
      socialIdentity: {
        id: 'b54ab2fb-0430-4932-b0fa-101b67bf06c2',
        avatar: 'http://foo.com/avatar.jpg',
        displayName: 'Myah Graham',
        provider: 'facebook'
      },
      metrics: [{
        icon: 'like',
        key: 'likes',
        value: 10
      }, {
        icon: 'share',
        key: 'shares',
        value: 5
      }],
      media: [{
        id: 'af712270-b03e-4b1c-98d2-f744f807df2f',
        type: 'image',
        url: 'http://lorempixel.com/640/480'
      }],
      state: 'scheduled',
      tags: ['charity', 'social for good', 'campaigns', 'lightful']
    }
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.PostCard, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<PostCard />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should render with errors', function () {
    var _setup2 = setup({
      errors: ['foo', 'bar']
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
    expect(wrapper.hasClass('post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should pass through other props', function () {
    var _setup4 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup4.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
  it('should handle the draft prop', function () {
    var _setup5 = setup(),
        wrapper = _setup5.wrapper;

    expect(wrapper.hasClass('post-card--draft')).toBe(false);
    wrapper.setProps({
      isDraft: true
    });
    expect(wrapper.hasClass('post-card--draft')).toBe(true);
  });
  it('should handle the invalid prop', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper;

    expect(wrapper.hasClass('post-card--invalid')).toBe(false);
    wrapper.setProps({
      isInvalid: true
    });
    expect(wrapper.hasClass('post-card--invalid')).toBe(true);
  });
  it('should optionally display post date', function () {
    var _setup7 = setup(),
        wrapper = _setup7.wrapper,
        props = _setup7.props;

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toBe('Scheduled for 14:34 on Wednesday, 22 August');
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        date: null
      })
    });
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toBe('Unscheduled');
  });
  it('should handle post state in date message', function () {
    var _setup8 = setup({
      post: {
        date: (0, _dateFns.addDays)(new Date(), 1),
        state: 'scheduled'
      }
    }),
        wrapper = _setup8.wrapper,
        props = _setup8.props;

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).not.toContain('Published');
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toContain('Scheduled');
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        date: (0, _dateFns.subDays)(new Date(), 1),
        state: 'published'
      })
    });
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toContain('Published');
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).not.toContain('Scheduled');
  });
  it('should handle the dateFormat prop', function () {
    var _setup9 = setup(),
        wrapper = _setup9.wrapper;

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toEqual('Scheduled for 14:34 on Wednesday, 22 August');
    wrapper.setProps({
      dateFormat: 'HH:MM [on] DD-MM-YYYY'
    });
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toEqual('Scheduled for 14:08 on 22-08-2018');
  });
  it('should set HTML in the post content', function () {
    var content = 'Hi <a href="">@Buttle</a>';

    var _setup10 = setup({
      post: {
        content: content
      }
    }),
        wrapper = _setup10.wrapper;

    expect(wrapper.find('[data-test-id="post-card-content"]').children().at(0).prop('unsafeHTML')).toEqual(content);
  });
  it('should show PostMedia if has media', function () {
    var _setup11 = setup(),
        wrapper = _setup11.wrapper,
        props = _setup11.props;

    expect(wrapper.find(_.PostMedia).exists()).toBe(true);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: []
      })
    });
    expect(wrapper.find(_.PostMedia).exists()).toBe(false);
  });
  it('should show URLMetaPreview if no media and metaPreview.url value', function () {
    var _setup12 = setup({
      post: {
        media: [{
          id: 1
        }]
      }
    }),
        wrapper = _setup12.wrapper,
        props = _setup12.props;

    expect(wrapper.find(_.PostMedia).exists()).toBe(true);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: []
      }),
      metaPreview: {
        url: 'http://foo.com',
        title: 'Foo'
      }
    });
    expect(wrapper.find(_.PostMedia).exists()).toBe(false);
    expect(wrapper.find(_.URLMetaPreview).exists()).toBe(true);
  });
  it('should display the empty media message if no media and no metaPreview', function () {
    var _setup13 = setup({
      post: {
        media: [{
          id: 1
        }]
      }
    }),
        wrapper = _setup13.wrapper,
        props = _setup13.props;

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: []
      }),
      metaPreview: {
        url: 'http://foo.com',
        title: 'Foo'
      }
    });
    expect(wrapper.find('.post-media--empty').exists()).toBe(false);
    wrapper.setProps({
      metaPreview: {}
    });
    expect(wrapper.find('.post-media--empty').exists()).toBe(true);
  });
  it('should display notes if notesAction', function () {
    var _setup14 = setup({
      notesAction: jest.fn(),
      notesCount: 3
    }),
        wrapper = _setup14.wrapper;

    expect(wrapper.find('[data-test-id="post-card-notes"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="post-card-metric"]')).toHaveLength(0);
  });
});