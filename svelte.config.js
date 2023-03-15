import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $data: path.resolve('./src/data'),
        },
      },
    },
  },
};

export default config;
