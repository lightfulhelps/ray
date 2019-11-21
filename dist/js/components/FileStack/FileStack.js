'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _filestackReact = require('filestack-react');

var _filestackReact2 = _interopRequireDefault(_filestackReact);

var _filestackJs = require('filestack-js');

var filestack = _interopRequireWildcard(_filestackJs);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

_dotenv2.default.config();

var YOUR_API_KEY = process.env.FILESTACK_API_KEY;

var client = filestack.init(YOUR_API_KEY);
var options = {
  fromSources: ['local_file_system', 'googledrive', 'facebook'],
  displayMode: 'inline',
  // displayMode: 'dropPane',
  container: 'filestackContainer',
  dropPane: {
    cropFiles: true,
    customText: 'this is custommmmm',
    overlay: true,
    showIcon: false
  }
};

client.picker(options).open();

var FileStack = function FileStack() {
  return React.createElement('div', { id: 'filestackContainer', style: { height: '200px', width: '200px' } });
};

exports.default = FileStack;