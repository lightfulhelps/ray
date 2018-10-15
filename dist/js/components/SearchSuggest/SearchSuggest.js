'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightMatches = exports.findMatches = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var findMatches = exports.findMatches = function findMatches(option, search, exclude) {
  return option.toLowerCase().includes(search.replace(exclude, '').toLowerCase());
};

var highlightMatches = exports.highlightMatches = function highlightMatches(option, search) {
  if (!search) return option;

  var regex = new RegExp('(' + search + ')', 'gi');
  var ret = option.replace(regex, '<strong class="text-gray-900">$&</strong>');

  return ret;
};

var SearchSuggest = function SearchSuggest(_ref) {
  var className = _ref.className,
      exclude = _ref.exclude,
      isLoading = _ref.isLoading,
      isOpen = _ref.isOpen,
      limit = _ref.limit,
      onClear = _ref.onClear,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onSelect = _ref.onSelect,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? [] : _ref$options,
      _ref$search = _ref.search,
      search = _ref$search === undefined ? '' : _ref$search,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ['className', 'exclude', 'isLoading', 'isOpen', 'limit', 'onClear', 'onClick', 'onRemove', 'onSelect', 'options', 'search', 'title']);

  var classes = (0, _classnames2.default)(className, 'search-suggest');
  var count = limit && limit > 0 ? limit : 10;
  var filteredOptions = options.filter(function (option) {
    return findMatches(option, search, exclude);
  });

  if (!isLoading && !options.length) return null;
  if (search.length > 0 && !filteredOptions.length) return null;

  return React.createElement(
    _.DropdownMenu,
    _extends({}, other, {
      className: classes,
      'data-test-id': 'search-suggest',
      isOpen: isOpen,
      onClick: onClick
    }),
    title && React.createElement(
      _.DropdownItem,
      {
        className: 'd-flex justify-content-between align-items-center',
        'data-test-id': 'search-suggest-header',
        isHeader: true
      },
      title,
      ' ',
      !isLoading && onClear && React.createElement(
        'div',
        {
          className: 'ml-1 text-danger cursor-pointer text-capitalize',
          'data-test-id': 'search-suggest-clear',
          onClick: onClear
        },
        'Clear All'
      )
    ),
    isLoading && React.createElement(
      _.DropdownItem,
      { 'data-test-id': 'search-suggest-loading', isDisabled: true },
      'Loading...'
    ),
    !isLoading && filteredOptions.slice(0, count).map(function (option, i) {
      return React.createElement(
        _.DropdownItem,
        {
          className: 'd-flex justify-content-between align-items-center text-body',
          'data-test-id': 'search-suggest-item',
          key: i,
          onClick: function onClick() {
            return onSelect(option, i);
          }
        },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: highlightMatches(option, search) } }),
        onRemove && React.createElement(_.Icon, {
          className: 'ml-1',
          'data-test-id': 'search-suggest-remove',
          name: 'close',
          onClick: function onClick(e) {
            e.stopPropagation();
            onRemove(i);
          }
        })
      );
    })
  );
};

exports.default = SearchSuggest;