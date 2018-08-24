import React from 'react';
import { sanitizeSVG, generateJSOutput } from './buildIcons';

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

describe('generateJSOutput', () => {
  it('should return expected format', () => {
    expect(
      generateJSOutput({
        analytics: (
          <path
            fillRule="nonzero"
            d="M6.5883 20h-3.727C2.3855 20 2 19.6427 2 19.2017V5.7983C2 5.3573 2.3855 5 2.8613 5h3.727c.4758 0 .8613.3573.8613.7983v13.4034c-.0007.441-.3862.7983-.8613.7983zm7.2749 0h-3.727c-.4759 0-.8613-.3573-.8613-.7983V8.6765c0-.441.3854-.7983.8612-.7983h3.727c.4759 0 .8614.3573.8614.7983v10.5252c0 .441-.3855.7983-.8613.7983zm7.2755 0h-3.727c-.4758 0-.8613-.3573-.8613-.7983V11.258c0-.441.3855-.7983.8613-.7983h3.727c.4758 0 .8613.3573.8613.7983v7.9436c0 .441-.3855.7983-.8613.7983z"
          />
        ),
        comment: (
          <path
            fillRule="nonzero"
            d="M15.2995 5.016c-.0656-.0064-.1312-.0128-.2-.016-.95.0032-1.9.0043-2.85.0032-.2406 0-1.5687 0-3.0812-.0032-.3907.0192-.675.0416-.775.0608-2.872.5149-4.8125 3.406-4.3157 6.3514.4657 2.7664 2.6407 4.6565 5.3844 4.6725.7406.0032 1.4813-.0096 2.2219.0096.1734.006.341.065.4812.1695.7625.6076 1.5063 1.244 2.2688 1.8517.2625.2079.5531.3965.8562.518.5657.224 1.047-.0287 1.2438-.6236a2.651 2.651 0 0 0 .1281-.678 15.506 15.506 0 0 0 .0094-1.3208c-.0094-.2366.0594-.3646.275-.4765 2.1094-1.1002 3.2156-3.1374 3.0344-5.552-.1938-2.552-2.1994-4.73-4.6813-4.9666z"
          />
        ),
      })
    ).toMatchSnapshot();
  });
});
