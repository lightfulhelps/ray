<p align="center">
  <a href="https://lightful.com">
    <img src="https://assets.lightful.com/platform/brand/logo_purple.png" alt="Lightful" width="200">
  </a>
</p>

## Ray

Ray is [Lightful's](https://www.lightful.com/) CSS and React component library. The package includes a CSS file that can be dropped in to any website or single-page application and a set of React components.

## Installation

### CDN

The Ray CSS file is available at the following CDN link:

```
https://cdn.jsdelivr.net/npm/@lightful/ray@2.2.4/dist/css/ray.css
```

### npm

Install the package with npm or yarn:

```
npm install @lightful/ray
yarn add @lightful/ray
```

## Contributing

### Creating a component

Start by running `yarn create:component --name=MyComponent`. This will create a new component file and associated test, saving time and helping to ensure all components are built in a consistent way.

### Adding an icon

Icons should be in SVG format with a 24px width/height and ideally made of a single path with a fill of #ADB5BD.

Once you have obtained a new icon SVG it should be added to the `src/icons` directory and then you should run `yarn build:icons` - this will make the icon availabel for use in the React `<Icon />` component.

### CSS

Ray has been built on top of Bootstrap so includes Bootstrap CSS with variables changed to match the Ray style guide.

Please refer to the [Bootstrap documention](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to get started.

## Releases

Releases are handled by [np](https://github.com/sindresorhus/np) which provides and interactive UI for generating releases, safe-guarding against various mistakes and improving consistency in releases.

We follow [semantic versioning](https://docs.npmjs.com/about-semantic-versioning), please ensure you are familiar with this approach before making a release.

Once ready, run `yarn release` to start a new release.
