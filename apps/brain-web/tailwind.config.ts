import type { Config } from 'tailwindcss';
import sharedConfig from '@imkdw-dev-client/tailwind-config';

const config: Pick<Config, 'presets' | 'content'> = {
  content: ['./src/app/**/*.tsx', '../../packages/ui/src/**/*.tsx'],
  presets: [sharedConfig],
};

export default config;
