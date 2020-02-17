"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@sambego/storybook-state");

var _ = require("../");

var _ToggleSwitch = _interopRequireDefault(require("../components/ToggleSwitch/ToggleSwitch"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ToggleSwitch', module);
var store = new _storybookState.Store({
  checked: true
});
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "ToggleSwitch"), _react["default"].createElement(_storybookState.State, {
    store: store
  }, function (state) {
    return _react["default"].createElement(_ToggleSwitch["default"], {
      isDisabled: (0, _addonKnobs["boolean"])('Disabled', false),
      onClick: function onClick() {
        return store.set({
          checked: !store.get('checked')
        });
      },
      label: (0, _addonKnobs.text)('Label', 'Noice!'),
      checked: state.checked,
      labelAlign: (0, _addonKnobs.select)('Align Label', {
        left: 'Left',
        right: 'Right',
        bottom: 'Bottom',
        top: 'Top'
      }, 'right')
    });
  }));
});