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

Once you have obtained a new icon SVG it should be added to the `src/icons` directory and then you should run `yarn build:icons` - this will make the icon available for use in the React `<Icon />` component.

### CSS

Ray has been built on top of Bootstrap so includes Bootstrap CSS with variables changed to match the Ray style guide.

Please refer to the [Bootstrap documention](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to get started.

## Using Ray during development

If you are working on changes to Ray and wish to test them out in your application before publishing a new version of Ray to npm you can use [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/).

First, run the link command in Ray:

```
yarn link
```

Then, in the application you are using Ray in:

```
yarn link @lightful/ray
```

This will create a symlink to your local copy of Ray to use in place of the package installed from npm.

**Important: if you are continuing to make changes to Ray remember to rebuild `yarn build` for them to be picked up in your application. Or if you are continuously making changes, run `yarn watch:js` to watch for changes and rebuild.**

To stop using the linked version you can use [yarn unlink](https://classic.yarnpkg.com/en/docs/cli/unlink).

### Using Ray

The components and icons can be viewed using the `storybook` packaged. There is a script you can run to get it working locally:  
`nvm use 12.19.1`  
`yarn storybook`

It is also hosted on AWS Amplify which automatically deploys new builds, so you can check the storybook on there as well.

### Finding Ray CSS classes

In Chrome:  
Inspect > Elements > Styles

There's a `Filter` field, click the `.cls` button next to it, a new field will show beneath called `Add new class`.

Type in that field and it should bring up matching searches.

## Releases

Releases are handled by [np](https://github.com/sindresorhus/np) which provides and interactive UI for generating releases, safe-guarding against various mistakes and improving consistency in releases.

We follow [semantic versioning](https://docs.npmjs.com/about-semantic-versioning), please ensure you are familiar with this approach before making a release.

Once ready, run `yarn release` to start a new release.
