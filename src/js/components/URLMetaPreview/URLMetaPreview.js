// @flow
import React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

type Props = {
  className?: string,
  description?: string,
  image?: string,
  isVertical?: boolean,
  title: string,
  url: string,
};

const cleanURL = (url: string): string => url.replace(/https?:\/\/(www.)?/, '');

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
            <Dotdotdot clamp={2}>
              <a
                className={`${blockClass}__title`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </Dotdotdot>
            {description && (
              <Dotdotdot className={`${blockClass}__description`} clamp={3}>
                {description}
              </Dotdotdot>
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
