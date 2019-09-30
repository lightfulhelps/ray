// @flow
import * as React from 'react';
import classNames from 'classnames';
import ReactFilestack from 'filestack-react';
import dotenv from 'dotenv';

dotenv.config();

type Props = {
  className?: string,
};
const YOUR_API_KEY = process.env.FILESTACK_API_KEY;

const FileStack = ({ className, ...other }: Props) => {
  const classes = classNames(className, 'file-stack');

  const yourCallbackFunction = () => null;

  return (
    <div {...other} className={classes}>
      <div id="embedded" style={{ height: '200px', width: '200px' }} />
      <h2>1</h2>
      <ReactFilestack
        apikey={YOUR_API_KEY}
        componentDisplayMode={{
          type: 'immediate',
        }}
        actionOptions={{
          displayMode: 'inline',
          container: 'embedded',
        }}
      />
    </div>
  );
};

export default FileStack;
