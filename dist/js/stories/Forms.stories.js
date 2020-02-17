"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = require("../");

var _sizes = _interopRequireDefault(require("./utils/sizes"));

require("../../scss/ray.scss");

var _FormPasswordInput = _interopRequireDefault(require("../components/FormPasswordInput/FormPasswordInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('Forms', module);
var selectOptions = [{
  label: 're',
  value: 're',
  icon: 'tag'
}, {
  label: 'act',
  value: 'act',
  icon: 'tag'
}, {
  label: 'sel',
  value: 'sel',
  icon: 'tag'
}, {
  label: 'ect',
  value: 'ect',
  icon: 'tag'
}];
stories.addDecorator(_addonKnobs.withKnobs);
stories.add('Default', function () {
  return _react["default"].createElement(_.Container, null, _react["default"].createElement("h1", {
    className: "my-4"
  }, "Forms"), _react["default"].createElement(_.Row, {
    className: "mb-4"
  }, _react["default"].createElement(_.Col, null, _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Name"), _react["default"].createElement(_.FormInput, {
    isInvalid: true,
    name: "name",
    type: "text",
    size: (0, _addonKnobs.select)('Select Size', _sizes["default"], _sizes["default"].md)
  }), _react["default"].createElement(_.FormFeedback, null, "This field is invalid")), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Email"), _react["default"].createElement(_.FormInput, {
    name: "email",
    placeholder: "e.g. foo@bar.com",
    type: "email",
    size: (0, _addonKnobs.select)('Select Size', _sizes["default"])
  })), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Password"), _react["default"].createElement(_FormPasswordInput["default"], {
    size: (0, _addonKnobs.select)('Select Size', _sizes["default"])
  })), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Select"), _react["default"].createElement(_.FormSelect, {
    isInvalid: (0, _addonKnobs["boolean"])('Select Invalid', false),
    onChange: action('Select change'),
    options: selectOptions,
    placeholder: "Some placeholder text...",
    size: (0, _addonKnobs.select)('Select Size', _sizes["default"])
  })), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Multiple Select"), _react["default"].createElement(_.FormSelect, {
    isCreatable: true,
    isMulti: true,
    onChange: action('Multiple Select change'),
    options: selectOptions,
    size: (0, _addonKnobs.select)('Select Size', _sizes["default"])
  })), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "Textarea"), _react["default"].createElement(_.FormTextarea, {
    name: "textarea"
  }, "Here is some textarea text")), _react["default"].createElement(_.FormGroup, null, _react["default"].createElement(_.FormLabel, null, "File"), _react["default"].createElement(_.FormInput, {
    type: "file",
    name: "file"
  })), _react["default"].createElement(_.FormGroup, {
    className: "bg-white p-2 rounded-sm border"
  }, _react["default"].createElement(_.FormGroup, {
    className: "mb-1",
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    name: "radios",
    type: "radio",
    id: "radio1"
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "radio1"
  }, "Radio 1")), _react["default"].createElement(_.FormGroup, {
    className: "mb-1",
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    name: "radios",
    type: "radio",
    id: "radio2"
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "radio2"
  }, "Radio 2")), _react["default"].createElement(_.FormGroup, {
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    name: "radios",
    type: "radio",
    id: "radio3",
    disabled: true
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "radio3"
  }, "Radio 3 (disabled)"))), _react["default"].createElement(_.FormGroup, {
    className: "bg-white p-2 rounded-sm border"
  }, _react["default"].createElement(_.FormGroup, {
    className: "mb-1",
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    type: "checkbox",
    id: "checkbox1"
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "checkbox1"
  }, "Checkbox 1")), _react["default"].createElement(_.FormGroup, {
    className: "mb-1",
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    type: "checkbox",
    id: "checkbox2",
    disabled: true
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "checkbox2"
  }, "Checkbox 2 (disabled)")), _react["default"].createElement(_.FormGroup, {
    className: "mb-2",
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    type: "checkbox",
    id: "checkbox3"
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "checkbox3"
  }, "Checkbox 3")), _react["default"].createElement(_.FormGroup, {
    isCheck: true
  }, _react["default"].createElement(_.FormInput, {
    type: "checkbox",
    id: "checkbox4"
  }), _react["default"].createElement(_.FormLabel, {
    isCheck: true,
    htmlFor: "checkbox4"
  }, _react["default"].createElement("div", {
    className: "d-flex align-items-center"
  }, _react["default"].createElement("div", {
    style: {
      width: '50px',
      height: '50px'
    }
  }, _react["default"].createElement(_.Avatar, {
    url: "https://randomuser.me/api/portraits/women/30.jpg",
    provider: "facebook"
  })), _react["default"].createElement("div", {
    className: "ml-1"
  }, "Checkbox with markup"))))))));
});