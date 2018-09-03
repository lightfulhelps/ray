import { sanitizeSVG } from './buildIcons';

describe('sanitizeSVG', () => {
  it('should strip <svg> tags', () => {
    expect(sanitizeSVG('<svg><path d="123"></svg>')).toEqual('<path d="123">');
  });

  it('should remove fill attributes', () => {
    expect(sanitizeSVG('<path fill="#ff0000">')).toEqual('<path>');
  });

  it('should make attributes JSX friendly', () => {
    expect(sanitizeSVG('<path fill-opacity="0.5" fill-rule="1" stroke-width="1">')).toEqual(
      '<path fillOpacity="0.5" fillRule="1" strokeWidth="1">'
    );
  });
});
