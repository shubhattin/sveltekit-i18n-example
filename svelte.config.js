import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { get_all_routes } from './src/tools/i18n/get_all_routes.js';

const routes = get_all_routes(['/']);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],
  kit: {
    adapter: adapter({
      edge: true
      // split: true
    })
    // prerender: {
    //   entries: routes
    // }
    // rendering will be done on netlify servers
    // prendering can be done if it is a JAMstack app
    // though this is example is a JAMstack app we are doing SSR just to show that i18n can be made to work with SSR as well
  }
};

export default config;
