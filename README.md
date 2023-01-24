# Basic Sveltekit i18n App Example hosted on Netlify

A simple example of multi lingual App

Available in :-
[Sanskrit](https://sveltekit-i18n-example.netlify.app) |
[English](https://sveltekit-i18n-example.netlify.app/en) |
[Hindi](https://sveltekit-i18n-example.netlify.app/hi) |
[Tamil](https://sveltekit-i18n-example.netlify.app/ta) |
[Telugu](https://sveltekit-i18n-example.netlify.app/te) |
[Kannada](https://sveltekit-i18n-example.netlify.app/kn) |
[Malayalam](https://sveltekit-i18n-example.netlify.app/ml) |
[Bengali](https://sveltekit-i18n-example.netlify.app/bn) |
[Gujarati](https://sveltekit-i18n-example.netlify.app/gu) |
[Punjabi](https://sveltekit-i18n-example.netlify.app/pa) |
[Marathi](https://sveltekit-i18n-example.netlify.app/mr) |
[Oriya](https://sveltekit-i18n-example.netlify.app/or) |
[Urdu](https://sveltekit-i18n-example.netlify.app/ur)

**_[Cloudflare Versiion](https://github.com/shubhattin/sveltekit-i18n-example/tree/cloudflare)_**

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
