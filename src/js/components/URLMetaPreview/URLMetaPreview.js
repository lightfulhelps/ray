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
}: Props) => {
  const baseClass = 'url-meta-preview';
  const classes = classNames(className, baseClass, 'bg-white');

  return (
    <div className={classes}>
      <div className={isVertical ? '' : 'row'}>
        {image && (
          <div className={isVertical ? '' : 'col-4 pr-0'}>
            <div
              className={`${baseClass}__image w-100 h-100 bg-cover bg-center`}
              style={{ backgroundImage: `url(${image})` }}
            >
              {isVertical && <img className="mw-100" src={image} alt="" />}
            </div>
          </div>
        )}
        <div className={isVertical ? '' : image ? 'col-8 pl-0' : 'col-12'}>
          <div className="p-2">
            <a
              className={`${baseClass}__title d-block text-body text-truncate small font-weight-bold`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            {description && (
              <Dotdotdot
                className={`${baseClass}__description small font-weight-light text-gray-500`}
                clamp={2}
              >
                {description}
              </Dotdotdot>
            )}
            <a
              className={`${baseClass}__url d-block text-body text-truncate small`}
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
