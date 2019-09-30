// @flow
import * as React from 'react';
import ReactFilestack from 'filestack-react';
import * as filestack from 'filestack-js';
import dotenv from 'dotenv';

dotenv.config();

const YOUR_API_KEY = process.env.FILESTACK_API_KEY;

const client = filestack.init(YOUR_API_KEY);
const options = {
  fromSources: ['local_file_system', 'googledrive', 'facebook'],
  displayMode: 'inline',
  // displayMode: 'dropPane',
  container: 'filestackContainer',
  dropPane: {
    cropFiles: true,
    customText: 'this is custommmmm',
    overlay: true,
    showIcon: false,
  },
};

client.picker(options).open();

const FileStack = () => {
  return <div id="filestackContainer" style={{ height: '200px', width: '200px' }} />;
};

export default FileStack;
