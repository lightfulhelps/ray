// @flow
import React from 'react';
import classNames from 'classnames';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

type Props = {
  className?: string,
  description?: string,
  image?: string,
  isVertical?: boolean,
  title?: string,
  url?: string,
};

const cleanURL = (url: string): string => url.replace(/https?:\/\/(www.)?/, '');

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const URLMetaPreview = ({
  className,
  description,
  image,
  isVertical = false,
  title,
  url,
  ...other
}: Props) => {
  const blockClass = 'url-meta-preview';
  const classes = classNames(className, blockClass);

  if (!url) {
    return null;
  }

  return (
    <div {...other} className={classes}>
      <div className={isVertical ? '' : 'row h-100'}>
        {image && (
          <div className={isVertical ? '' : 'col-4 pr-0'}>
            <div className={`${blockClass}__image`} style={{ backgroundImage: `url(${image})` }}>
              {isVertical && <img src={image} alt="" />}
            </div>
          </div>
        )}
        <div className={isVertical ? '' : image ? 'col-8 pl-0' : 'col-12'}>
          <div className={`${blockClass}__main`}>
            <a
              className={`${blockClass}__title`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResponsiveEllipsis text={title} maxLine={2} ellipsis="..." basedOn="words" />
            </a>
            {description && (
              <ResponsiveEllipsis
                className={`${blockClass}__description`}
                text={description}
                maxLine={3}
                ellipsis="..."
                basedOn="words"
              />
            )}
            <a
              className={`${blockClass}__url`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cleanURL(url)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLMetaPreview;
