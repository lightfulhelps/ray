"use strict";

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('icons', function () {
  it('should match the snapshot', function () {
    expect(_icons["default"]).toMatchSnapshot();
  });
});