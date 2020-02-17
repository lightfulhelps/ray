"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Dropdown', module);
stories.addDecorator(_addonKnobs.withKnobs);
var menuThemes = {
  light: 'Light',
  dark: 'Dark'
};
var menuPositions = {
  left: 'Left',
  right: 'Right'
};
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Dropdown"), _react["default"].createElement(_.Row, null, _react["default"].createElement("div", {
    className: "col-6"
  }, _react["default"].createElement(_.Dropdown, {
    isBlock: (0, _addonKnobs["boolean"])('Block', false),
    render: function render(isOpen, onToggle) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.DropdownToggle, {
        isBlock: (0, _addonKnobs["boolean"])('Block', false),
        isOpen: isOpen,
        onClick: onToggle
      }, "Dropdown"), _react["default"].createElement(_.DropdownMenu, {
        isOpen: isOpen,
        onClick: onToggle,
        position: (0, _addonKnobs.select)('Menu Position', menuPositions, 'left'),
        theme: (0, _addonKnobs.select)('Menu Theme', menuThemes, 'light')
      }, _react["default"].createElement(_.DropdownItem, {
        onClick: (0, _react2.action)('Edit')
      }, _react["default"].createElement(_.Icon, {
        className: "mr-1",
        name: "edit"
      }), "Edit"), _react["default"].createElement(_.DropdownItem, {
        onClick: (0, _react2.action)('Comment')
      }, _react["default"].createElement(_.Icon, {
        className: "mr-1",
        name: "comment"
      }), "Comment"), _react["default"].createElement(_.DropdownItem, {
        isDisabled: true,
        onClick: (0, _react2.action)('Edit')
      }, _react["default"].createElement(_.Icon, {
        className: "mr-1",
        name: "edit"
      }), "Delete")));
    }
  })), _react["default"].createElement("div", {
    className: "col-6"
  }, _react["default"].createElement(_.Dropdown, {
    render: function render(isOpen, onToggle) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Button, {
        icon: "menu",
        theme: "light",
        onClick: onToggle
      }), _react["default"].createElement(_.DropdownMenu, {
        isOpen: isOpen,
        onClick: onToggle,
        position: (0, _addonKnobs.select)('Menu Position', menuPositions, 'left'),
        theme: (0, _addonKnobs.select)('Menu Theme', menuThemes, 'light'),
        footer: (0, _addonKnobs.text)('Menu Footer', 'Created by: Bruno')
      }, _react["default"].createElement(_.DropdownItem, {
        isHeader: true
      }, "Header"), _react["default"].createElement(_.DropdownItem, null, "Option 1"), _react["default"].createElement(_.DropdownItem, null, "Option 2"), _react["default"].createElement(_.DropdownItem, {
        isHeader: true
      }, "Header"), _react["default"].createElement(_.DropdownItem, null, "Option 3"), _react["default"].createElement(_.DropdownItem, null, "Option 4")));
    }
  }))));
});