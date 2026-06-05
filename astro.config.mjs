// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: '',
  trailingSlash: 'never',
  site: 'https://samashroom.ru',
});