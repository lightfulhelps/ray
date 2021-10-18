# Migration guide from Ray 1.0 to Ray 2.0
### New version of ray!

Review the changes to Ray's components here.

We've upgraded `Bootstrap` version from 4 to 5

## Gradients

When we are making reference of gradient across this document we mean : `primary`, `secondary`, `tertiary-red`, `tertiary-black`, `tertiary-green` and `academy`.

## Buttons

### `forceSolidColor` prop

The theming for the buttons changed. By default some themes will be gradients.
The other themes have a single, solid color associated to them.

If you want to render a button using the `primary` blue color without the gradient just set `forceSolidColor` to `true`.

### `loading` prop

We have included a new prop `loading`. When set to `true` the button will render a spinner next to the text

## Icons

Icons now include gradients. Set the `isGradient` prop to `true`. If a gradient is defined for the theme it will use it. If not it will stay in a solid color

## Gradient text

Use the classes `.text-{gradient}` to get gradient texts. 