import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({ split: true }),
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
