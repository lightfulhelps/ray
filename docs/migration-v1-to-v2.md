# Migration guide from Ray v1 to Ray v2
### New version of ray!

Review the changes to Ray's components here.

We've upgraded `Bootstrap` version from 4 to 5

Follow this doc to migrate bootstrap https://getbootstrap.com/docs/5.1/migration/

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

## Tags

Remove themes for tags (as per design). By default the tag will be `dark` themed. If you set `isOutline` to `true` the the tag will by `white` themed.

## Badges

No more `isOutline` prop

## Spacings
We decided to go back to a 8pts system to avoid split pixel and be in line with the most used system:

|    | Old  | New  |
|----|------|------|
| 0  | 0px  | 0px  |
|half| 5px  | 4px  |
| 1  | 10px | 8px  |
| 2  | 20px | 16px |
| 3  | 30PX | 24px |
| 4  | 40px | 32px |
| 5  | 50px | 40px |
| 6  | -    | 48px |
