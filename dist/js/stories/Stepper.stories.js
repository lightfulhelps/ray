"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _ = require("../");

var _Button = _interopRequireDefault(require("../components/Button/Button"));

require("../../scss/ray.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Stepper', module);
var store = new _storybookState.Store({
  step: 1
});
stories.add('Default', function () {
  var steps = [{
    label: 'Step one',
    value: 1,
    onClick: (0, _addonActions.action)('clicked 1')
  }, {
    label: 'Step two',
    value: 2,
    onClick: (0, _addonActions.action)('clicked 2')
  }, {
    label: 'Step three',
    value: 3
  }];
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Stepper"), _react["default"].createElement("div", {
    className: "mb-4"
  }, _react["default"].createElement(_storybookState.State, {
    store: store
  }, function (state) {
    return _react["default"].createElement(_.Stepper, {
      steps: steps,
      activeStep: state.step
    });
  })), _react["default"].createElement(_Button["default"], {
    className: "mr-1 mt-2",
    onClick: function onClick() {
      return store.set({
        step: store.get('step') - 1
      });
    }
  }, "Back"), _react["default"].createElement(_Button["default"], {
    className: "mt-2",
    theme: "dark",
    onClick: function onClick() {
      return store.set({
        step: store.get('step') + 1
      });
    }
  }, "Next"));
});