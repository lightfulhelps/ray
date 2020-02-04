# Ray

[![Build status](https://badge.buildkite.com/71a56e0a65b60c1d9e1c42dd098c254e23eb0415ba57cbbfca.svg)](https://buildkite.com/lightful/ray-tests)

## Using Ray

### CSS

You can include the Ray CSS file from the jsDelivr CDN as follows:

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lightfulhelps/ray@master/dist/css/ray.css" />
```

## Working on Ray

### Creating a component

Start by running `yarn create:component --name=MyComponent`. This will create a new component file and associated test, saving time and helping to ensure all components are built in a consistent way.

### Adding an icon

Icons should be in SVG format with a 24px width/height and ideally made of a single path with a fill of #ADB5BD.

Once you have obtained a new icon SVG it should be added to the `src/icons` directory and then you should run `yarn build:icons` - this will make the icon availabel for use in the React `<Icon />` component.

### CSS

Ray has been built on top of Bootstrap so includes Bootstrap CSS with variables changed to match the Ray style guide.

Please refer to the [Bootstrap documention](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to get started.
