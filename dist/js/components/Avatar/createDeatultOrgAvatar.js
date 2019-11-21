'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createDeatultOrgAvatar = function createDeatultOrgAvatar(orgName) {
  var letter = orgName ? orgName[0] : ' ';
  var bgClass = void 0;
  if (/[A-F]/.test(letter)) {
    bgClass = 'bg-secondary';
  }
  if (/[G-L]/.test(letter)) {
    bgClass = 'bg-primary';
  }
  if (/[M-R]/.test(letter)) {
    bgClass = 'bg-danger';
  }
  if (/[S-Z]/.test(letter)) {
    bgClass = 'bg-warning';
  }
  if (!/[A-Z]/.test(letter)) {
    bgClass = 'bg-info';
  }
  return { bgClass: bgClass, letter: letter };
};

exports.default = createDeatultOrgAvatar;