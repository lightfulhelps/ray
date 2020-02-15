import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  description?: string;
  image?: string;
  isVertical?: boolean;
  title?: string;
  url?: string;
};

const cleanURL = (url: string): string => url.replace(/https?:\/\/(www.)?/, '');

const URLMetaPreview: React.FC<Props> = ({
  className,
  description,
  image,
  isVertical = false,
  title,
  url,
  ...other
}: Props) => {
  const classes = classNames(className, 'url-meta-preview', 'bg-white h-100');

  if (!url) {
    return null;
  }

  return (
    <div {...other} className={classes}>
      <div className={isVertical ? '' : 'row h-100'}>
        {image && (
          <div className={isVertical ? '' : 'col-4 pr-0'}>
            <div
              className="w-100 h-100 bg-cover bg-center"
              data-test-id="url-meta-preview-image"
              style={{ backgroundImage: `url(${image})` }}
            >
              {isVertical && <img className="w-100" src={image} alt="" />}
            </div>
          </div>
        )}
        <div className={isVertical ? '' : image ? 'col-8 pl-0' : 'col-12'}>
          <div className="d-flex flex-column justify-content-between h-100 p-1 text-xs">
            <a
              className="font-weight-bold text-dark text-truncate"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            {description && (
              <div
                className="font-weight-light text-gray-500 text-truncate"
                data-test-id="url-meta-preview-description"
              >
                {description}
              </div>
            ) // <ResponsiveEllipsis
            //   className="font-weight-light text-gray-500"
            //   text={description}
            //   maxLine={3}
            //   ellipsis="..."
            //   basedOn="words"
            // />
            }
            <a
              className="d-block text-body text-truncate"
              data-test-id="url-meta-preview-url"
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
