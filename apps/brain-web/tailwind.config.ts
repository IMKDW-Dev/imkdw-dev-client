import type { Config } from 'tailwindcss';
import sharedConfig from '@imkdw-dev-client/tailwind-config';

const config: Pick<Config, 'presets'> = {
  presets: [sharedConfig],
};

export default config;
