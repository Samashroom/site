// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: '',
  trailingSlash: 'never',
    site: 'https://samashroom.ru',
  redirects: {
    '/youtube': 'https://www.youtube.com/@Samashroom',
    '/tg': 'https://t.me/samashroomtg',
    '/discord': 'https://discord.gg/gC2PaxDzWB',
    '/boosty' : 'https://boosty.to/samashroom',
    '/tiktok' : 'https://www.tiktok.com/@samashroom',
    '/twitch' : 'https://www.twitch.tv/samashroom',
    '/music' : 'https://band.link/samashroom',
    '/donationalerts' : 'https://www.donationalerts.com/r/samashroom',
    '/tribute' : "https://t.me/tribute/app?startapp=dd06",
    '/chancecorp' : "https://chancecorp.ru"
  }
});