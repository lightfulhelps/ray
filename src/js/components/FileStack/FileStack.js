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
  // displayMode: 'inline',
  displayMode: 'dropPane',
  container: 'filestackContainer',
};

client.picker(options).open();

const FileStack = () => {
  return <div id="filestackContainer" />;
};

export default FileStack;
