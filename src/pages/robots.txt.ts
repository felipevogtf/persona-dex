import { getBaseUrl } from '@utils/baseUrl';
import type { APIRoute } from 'astro';

const url = import.meta.env.SITE + getBaseUrl() + '/';
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', url).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
