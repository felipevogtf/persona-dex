import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipevogtf.github.io',
  base: '/persona-dex',
  integrations: [react()],
});
