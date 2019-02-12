# The Ray Design System

[![Build status](https://badge.buildkite.com/71a56e0a65b60c1d9e1c42dd098c254e23eb0415ba57cbbfca.svg)](https://buildkite.com/lightful/ray-tests) [![Greenkeeper badge](https://badges.greenkeeper.io/lightfulhelps/ray.svg?token=1f15595b2a61987ddb90cc7c2731dd0efa8769eb99c5d68df71f6aea54526dff&ts=1534852138081)](https://greenkeeper.io/)

You can play with it at [https://lightfulhelps.github.io/ray/](https://lightfulhelps.github.io/ray/).

## Developer Prerequistes

To develop on Ray you will need to install.

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

You can use [NVM](https://github.com/creationix/nvm) to install and manage multiple versions of Node.js on Unix like operating systems. Windows users can use [nvm-windows](https://github.com/coreybutler/nvm-windows).

## Booting Up The Storybook

If you want to play around with the Ray componets locally, you can run this project's [StoryBook](https://storybook.js.org/).

This assumes you have a working version of Node.js installed and have also insts

1. Check out this repository locally: `git clone https://github.com/lightfulhelps/ray && cd ray`.
2. Install dependencies: `yarn`.
3. Run `yarn start` which will launch [StoryBook](https://storybook.js.org/), which should be run at (http://localhost:9001)[http://localhost:9001].
4. Enjoy!

## CSS

Ray has been built on top of Bootstrap so includes Bootstrap CSS with variables changed to match the Ray style guide.

Please refer to the [Bootstrap documention](https://getbootstrap.com/docs/4.1/getting-started/introduction/) to get started.

## Creating a Component

Creating a component maximises code reuse. We use React for components. This guide will help you generate them.

1. Check out this repository locally: `git clone https://github.com/lightfulhelps/ray && cd ray`
2. Create a new branch: `git checkout -b some-new-component`
3. Install Ray dependencies with Yarn: `yarn`.
4. Run `yarn create:component --name=SomeNewComponent`.
5. Export your new component from `src/js/index.js`.
6. Run `yarn start` which will launch [StoryBook](https://storybook.js.org/), which should be run at (http://localhost:9001)[http://localhost:9001].
7. Find the story it is appropriate to create your component in, for example `Forms.stories.js`.
8. Import your component and add it to the story and work on it in Storybook. Changes in the code as you edit should be live reloaded
9. Write unit tests - the start of the tests will be generated for you in a file called `SomeNewComponent.spec.js`.
10. Once you are happy with the component push your branch and open a pull request.
11. You can use the component already in Platform temporarily by referring to the branch in the `package.json`, e.g. `yarn add https://github.com/lightfulhelps/ray#some-new-component`
12. Once your PR passes review merge it to `master`, switch platform to point back to master and open the PR on platform,

## Update Icons

Icons are presented as SVG files but we create React components for each of them automatically. Once exported from Sketch:

1. Export icon from your graphics editor of choice.
2. Create a new branch `git checkout -b some-new-component`
3. Drop the SVG file into `src/icons`.
4. Run `yarn build:icons`.
5. Open a PR for the new icon.
6. After review (just in case) merge to `master`.
