import lang_data from './locales.json';
import { set_val_from_adress } from '@tools/json';
import type { dattType } from './model';
const list = lang_data.locales;
const default_locale = lang_data.default_locale;

export type { dattType } from './model';
export { default_locale, locales } from './locales.json';
export type langKey = keyof typeof list; // Language list
export const langNames = Object.values(list);
export const get_locale = (locale: string) => {
  if (locale && !(locale in list)) return null; // if locale(it should not be null) is not in list return null
  return (locale || default_locale) as langKey;
};

const reuseValues = (datt: dattType) => {
  const { tracker } = datt;
  const reuseMap: [string, string[]][] = [];
  for (const x of reuseMap)
    for (const y of x[1]) set_val_from_adress(y.substring(4).split('.').join('/'), datt, x[0]);
  return datt;
};
const db: { [x in langKey]?: dattType } = {};
const load_data = async (locale: langKey) => {
  if (import.meta.env.DEV) {
    const fs = await import('node:fs');
    const { load } = await import('js-yaml');
    return load(fs.readFileSync(`./src/langs/data/${list[locale]}.yaml`).toString());
  } else {
    const all_data = import.meta.glob('./data_json/*.json');
    const data: any = await all_data[`./data_json/${list[locale]}.json`]();
    return data;
  }
};
const main = async (locale: langKey) => {
  if (process.env.NODE_ENV === 'production' && locale in db) return db[locale];
  const LOAD: any = await load_data(locale);
  const dt = reuseValues(LOAD.client as dattType);
  db[locale] = dt;
  return dt;
};
export default main;
