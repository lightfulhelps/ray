'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createDeatultOrgAvatar = function createDeatultOrgAvatar(orgName) {
  var bgClass = void 0;
  if (/[A-F]/.test(orgName[0])) {
    bgClass = 'bg-secondary';
  }
  return { bgClass: bgClass, letter: orgName[0] };
};

exports.default = createDeatultOrgAvatar;