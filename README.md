# Ray

[![Build status](https://badge.buildkite.com/71a56e0a65b60c1d9e1c42dd098c254e23eb0415ba57cbbfca.svg)](https://buildkite.com/lightful/ray-tests) [![Greenkeeper badge](https://badges.greenkeeper.io/lightfulhelps/ray.svg?token=1f15595b2a61987ddb90cc7c2731dd0efa8769eb99c5d68df71f6aea54526dff&ts=1534852138081)](https://greenkeeper.io/)

## Creating a component

Start by running `yarn create:component --name=MyComponent`. This will create a new component file and associated test, saving time and helping to ensure all components are built in a consistent way.

## Adding an icon

Icons should be in SVG format with a 24px width/height and ideally made of a single path with a fill of #ADB5BD.

Once you have obtained a new icon SVG it should be added to the `src/icons` directory and then you should run `yarn build:icons` - this will make the icon availabel for use in the React `<Icon />` component.

## CSS

Ray has been built on top of Bootstrap so includes Bootstrap CSS with variables changed to match the Ray style guide.

Please refer to the [Bootstrap documention](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to get started.
