'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CampaignTemplateCard = function CampaignTemplateCard(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      title = _ref.title,
      description = _ref.description,
      image = _ref.image,
      other = _objectWithoutProperties(_ref, ['className', 'onClick', 'title', 'description', 'image']);

  var classes = (0, _classnames2.default)(className, 'card shadow-lg h-100 rounded-lg', 'campaign-template-card');

  var imgStyles = {
    backgroundImage: 'url(' + image + ')',
    height: 0,
    paddingBottom: '50%',
    backgroundPosition: 'center'
  };

  return React.createElement(
    'div',
    _extends({}, other, { className: classes }),
    React.createElement('div', {
      style: imgStyles,
      className: 'bg-cover bg-gray-900 w-100 rounded-top-lg',
      'data-test-id': 'campaign-template-card-image'
    }),
    React.createElement(
      'div',
      { className: 'p-2 d-flex h-100 flex-column justify-content-between' },
      React.createElement(
        'div',
        null,
        React.createElement(
          'h5',
          { 'data-test-id': 'campaign-template-card-title' },
          title
        ),
        React.createElement(
          'div',
          { 'data-test-id': 'campaign-template-card-description' },
          description
        )
      ),
      React.createElement(
        _.Button,
        {
          'data-test-id': 'campaign-template-card-button',
          className: 'mt-2',
          onClick: onClick,
          isBlock: true
        },
        'Use your template'
      )
    )
  );
};

exports.default = CampaignTemplateCard;