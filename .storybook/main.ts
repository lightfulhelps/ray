import type { StorybookConfig } from '@storybook/react-webpack5';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/js/stories/*.stories.@(tsx)'],
  addons: [ '@storybook/addon-actions', '@storybook/addon-essentials'],
  framework: '@storybook/react-webpack5',
  docs: {
    autodocs: false,
  },
  webpackFinal: async (config: any) => {
    // Add TypeScript support
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            reportFiles: ['../src/components/**/*.{ts|tsx}'],
          },
        },
      ],
    });

    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Extend resolve
    config.resolve = config.resolve || {};
    config.resolve.extensions = config.resolve.extensions || [];
    config.resolve.extensions.push('.ts', '.tsx');
    
    config.resolve.alias = Object.assign(config.resolve.alias || {}, {
      '@': path.resolve(__dirname, '..'),
    });

    return config;
  },
};

export default config;
