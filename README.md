# Basic Sveltekit i18n App Example hosted on Netlify

A simple example of multi lingual App

Available in :-
[Sanskrit](https://sveltekit-i18n-example.vercel.app) |
[English](https://sveltekit-i18n-example.vercel.app/en) |
[Hindi](https://sveltekit-i18n-example.vercel.app/hi) |
[Tamil](https://sveltekit-i18n-example.vercel.app/ta) |
[Telugu](https://sveltekit-i18n-example.vercel.app/te) |
[Kannada](https://sveltekit-i18n-example.vercel.app/kn) |
[Malayalam](https://sveltekit-i18n-example.vercel.app/ml) |
[Bengali](https://sveltekit-i18n-example.vercel.app/bn) |
[Gujarati](https://sveltekit-i18n-example.vercel.app/gu) |
[Punjabi](https://sveltekit-i18n-example.vercel.app/pa) |
[Marathi](https://sveltekit-i18n-example.vercel.app/mr) |
[Oriya](https://sveltekit-i18n-example.vercel.app/or) |
[Urdu](https://sveltekit-i18n-example.vercel.app/ur)

**_[Cloudflare Versiion](https://github.com/shubhattin/sveltekit-i18n-example/tree/cloudflare)_**
**_[Netlify Versiion](https://github.com/shubhattin/sveltekit-i18n-example/tree/main)_**

## Language files

The Language databases are stored in [`src/langs/data`](./src/langs/data) directory.  
Locales are stored in [`@langs/locales.json`](./src/langs/locales.json) directory.

The Language loader in stored in [`@langs/datt.ts`](./src/langs/datt.ts) file.  
You may use it like this

```ts
import load_data from 'src/langs';
const data = await load_data('en'); // load english(en) data along with its type
```

So in this way you can load any language data and use it in your app, by sending it from server and then storing it in `__data.json` _files_.

## Multiple Locale URL

This can be done by using `slugs` like we have used `lang` slug.  
To also have a default locale(usually english, in our case Sanskrit) you should `[...lang]`.

I also noticed that if deploy to `edge functions` then use can also use the `[[lang]]` slug which is better than the above.
