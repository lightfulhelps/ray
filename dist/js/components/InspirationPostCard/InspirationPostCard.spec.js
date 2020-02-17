"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _lodash = require("lodash");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setup = function setup() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var props = (0, _lodash.merge)({
    post: {
      id: '08a2a5c0-a77b-11e8-a45a-3bfafb0c9405',
      title: 'Hope For Children',
      date: '2018-08-22 14:34',
      content: 'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
      campaign: {
        name: 'Campaign',
        color: '#ff0000'
      },
      socialIdentity: {
        id: '1',
        avatar: 'http://foo.com/avatar.jpg'
      },
      metrics: {
        likes: 10,
        shares: 5
      },
      tags: ['charity', 'social for good', 'campaigns', 'lightful']
    },
    inspirationActions: [{
      icon: 'follow',
      isActive: false,
      onClick: jest.fn(),
      theme: 'gray-500'
    }, {
      icon: 'like',
      isActive: true,
      onClick: jest.fn(),
      theme: 'gray-500'
    }]
  }, overrides);
  var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_.InspirationPostCard, props));
  return {
    wrapper: wrapper,
    props: props
  };
};

describe('<InspirationPostCard />', function () {
  it('should render', function () {
    var _setup = setup(),
        wrapper = _setup.wrapper;

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle the className prop', function () {
    var _setup2 = setup(),
        wrapper = _setup2.wrapper;

    wrapper.setProps({
      className: 'custom'
    });
    expect(wrapper.hasClass('inspiration-post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });
  it('should optionally display post date', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper,
        props = _setup3.props;

    expect(wrapper.find('.inspiration-post-card__date').text()).toBe('22 Aug 18 - 14:34');
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        date: null
      })
    });
    expect(wrapper.find('.inspiration-post-card__date').text()).toBe('Unscheduled');
  });
  it('should handle the dateFormat prop', function () {
    var _setup4 = setup(),
        wrapper = _setup4.wrapper;

    expect(wrapper.find('.inspiration-post-card__date').text()).toEqual('22 Aug 18 - 14:34');
    wrapper.setProps({
      dateFormat: 'HH:MM [on] DD-MM-YYYY'
    });
    expect(wrapper.find('.inspiration-post-card__date').text()).toEqual('14:08 on 22-08-2018');
  });
  it('should set HTML in the post content', function () {
    var content = 'Hi <a href="">@Buttle</a>';

    var _setup5 = setup({
      post: {
        content: content
      }
    }),
        wrapper = _setup5.wrapper;

    expect(wrapper.find('.inspiration-post-card__content').children().at(0).prop('unsafeHTML')).toEqual(content);
  });
  it('should show PostMedia if has media', function () {
    var _setup6 = setup(),
        wrapper = _setup6.wrapper,
        props = _setup6.props;

    expect(wrapper.find(_.PostMedia).exists()).toBe(false);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: [{
          id: 1
        }]
      })
    });
    expect(wrapper.find(_.PostMedia).exists()).toBe(true);
  });
  it('should show URLMetaPreview if no media and metaPreview.url value', function () {
    var _setup7 = setup({
      post: {
        media: [{
          id: 1
        }]
      }
    }),
        wrapper = _setup7.wrapper,
        props = _setup7.props;

    expect(wrapper.find(_.PostMedia).exists()).toBe(true);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: []
      }),
      metaPreview: {
        url: 'http://foo.com'
      }
    });
    expect(wrapper.find(_.PostMedia).exists()).toBe(false);
    expect(wrapper.find(_.URLMetaPreview).exists()).toBe(true);
  });
  it('should display the empty media message if no media and no metaPreview', function () {
    var _setup8 = setup({
      post: {
        media: [{
          id: 1
        }]
      }
    }),
        wrapper = _setup8.wrapper,
        props = _setup8.props;

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        media: []
      }),
      metaPreview: {
        url: 'http://foo.com'
      }
    });
    expect(wrapper.find('.post-media--empty').exists()).toBe(false);
    wrapper.setProps({
      metaPreview: {}
    });
    expect(wrapper.find('.post-media--empty').exists()).toBe(true);
  });
  it('should optionally display inspirationActions', function () {
    var _setup9 = setup({
      inspirationActions: [{
        icon: 'follow'
      }]
    }),
        wrapper = _setup9.wrapper;

    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(true);
    wrapper.setProps({
      inspirationActions: []
    });
    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(false);
    wrapper.setProps({
      inspirationActions: null
    });
    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(false);
  });
  it('should handle the inspirationActions prop', function () {
    var follow = jest.fn();
    var like = jest.fn();

    var _setup10 = setup({
      inspirationActions: [{
        icon: 'follow',
        isActive: false,
        onClick: follow,
        theme: 'gray-500'
      }, {
        icon: 'like',
        isActive: true,
        onClick: like,
        theme: 'gray-500'
      }]
    }),
        wrapper = _setup10.wrapper;

    var inspirationActions = wrapper.find('.inspiration-post-card__inspiration-actions').find(_.Icon);
    expect(inspirationActions).toHaveLength(2);
    expect(inspirationActions.at(0).prop('name')).toEqual('follow');
    expect(inspirationActions.at(0).prop('theme')).toEqual('gray-500');
    expect(inspirationActions.at(1).prop('name')).toEqual('like');
    expect(inspirationActions.at(1).prop('theme')).toEqual('gray-500');
    inspirationActions.at(0).simulate('click');
    inspirationActions.at(1).simulate('click');
    expect(follow).toHaveBeenCalledTimes(1);
    expect(like).toHaveBeenCalledTimes(0); // because like isActive
  });
  it('should optionally display post metrics', function () {
    var _setup11 = setup({
      post: {
        metrics: {
          likes: 3
        }
      }
    }),
        wrapper = _setup11.wrapper,
        props = _setup11.props;

    expect(wrapper.find('.inspiration-post-card__metrics').exists()).toBe(true);
    wrapper.setProps({
      post: _objectSpread({}, props.post, {
        metrics: {}
      })
    });
    expect(wrapper.find('.inspiration-post-card__metrics').exists()).toBe(false);
  });
  it('should pass through other props', function () {
    var _setup12 = setup({
      tabIndex: 1,
      id: 'test'
    }),
        wrapper = _setup12.wrapper;

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});