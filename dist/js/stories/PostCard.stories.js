"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("..");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('PostCard', module);
var defaultDate = new Date();
var socialProviders = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  linkedin: 'LinkedIn'
};
var media = [// {
//   type: 'video',
//   url: 'https://cdn.filestackcontent.com/roASZkRQhOaPEFdzyiYu',
// },
{
  type: 'image',
  url: 'https://images.unsplash.com/photo-1529008922463-fd89b925364e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d640027f2e2e7cc661a9d382fd5f409f&auto=format&fit=crop&w=2250&q=80'
}, {
  type: 'image',
  url: 'https://images.unsplash.com/photo-1526301352057-62f44bf4e826?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1400da29033cf0a472e536788e02b0be&auto=format&fit=crop&w=2252&q=80'
}, {
  type: 'image',
  url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4c057ea9163ee6155a71e04dc58dfa5&auto=format&fit=crop&w=2250&q=80'
} // {
//   type: 'image',
//   url:
//     'https://images.unsplash.com/photo-1494451930944-8998635c2123?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6fc9d727accaab5052cd754f634e768&auto=format&fit=crop&w=2251&q=80',
// },
];
var tags = ['Social For Good', 'Charity', 'Lightful', 'Giving', 'Tech For Good'];
var states = ['scheduled', 'published', 'review'];
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  var showMeta = (0, _addonKnobs["boolean"])('Show meta', true);
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "PostCard"), _react["default"].createElement(_.PostCard, {
    className: "mb-4",
    post: {
      campaign: {
        name: (0, _addonKnobs.text)('Campaign Name', 'Wildlife'),
        color: (0, _addonKnobs.color)('Campaign Color', '#D72E85')
      },
      date: (0, _addonKnobs.date)('Date', defaultDate),
      socialIdentity: {
        id: '123',
        avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
        provider: (0, _addonKnobs.select)('Social Provider', socialProviders, 'twitter'),
        displayName: 'Save the rabbits'
      },
      content: (0, _addonKnobs.text)('Content', 'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most". Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school.'),
      media: !showMeta && media,
      metrics: [{
        icon: 'like',
        key: 'likes',
        value: 10
      }, {
        icon: 'comment',
        key: 'comments',
        value: 2
      }, {
        icon: 'share',
        key: 'shares',
        value: 5
      }, {
        icon: 'click',
        key: 'clicks',
        value: 0
      }],
      state: (0, _addonKnobs.select)('Post State', states, 'scheduled'),
      tags: tags
    },
    actions: [{
      children: 'Approve',
      onClick: (0, _addonActions.action)('Approve')
    }, {
      children: 'Preview',
      onClick: (0, _addonActions.action)('Preview')
    }, {
      children: 'Edit',
      onClick: (0, _addonActions.action)('Edit')
    }, {
      children: 'Delete',
      onClick: (0, _addonActions.action)('Delete')
    } // { children: 'Reschedule', onClick: action('Reschedule') },
    ],
    isDraft: (0, _addonKnobs["boolean"])('Draft', false),
    isInvalid: (0, _addonKnobs["boolean"])('Invalid', false),
    isImported: (0, _addonKnobs["boolean"])('Imported', false),
    metaPreview: showMeta && {
      title: (0, _addonKnobs.text)('Meta Title', "National Living Wage 'fails to cover families' basic needs"),
      description: (0, _addonKnobs.text)('Meta Description', "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says."),
      image: (0, _addonKnobs.text)('Meta Image', 'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg'),
      url: (0, _addonKnobs.text)('Meta URL', 'https://www.bbc.co.uk/news/business-45242008')
    },
    notesAction: (0, _addonActions.action)('Notes'),
    notesCount: 3,
    errors: (0, _addonKnobs["boolean"])('Show errors', false) && ['Error string', 'Error string two with a much longer string than the other one', 'Error string two with a much longer string than the other one kinda long', 'Error string two with a much longer string than the other one much much longer its long']
  }));
});