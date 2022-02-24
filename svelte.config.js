import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import path from 'path';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/_post.svelte'
      }
    })
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
    target: '#svelte',
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
