import type { PageServerLoad } from './$types';
import load_data, { get_locale, default_locale } from '@langs/datt';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, url }) => {
  const locale = get_locale(params.lang!)!;
  if (!locale) throw error(404, 'Not found');
  if (locale === default_locale && url.pathname.startsWith(`/${default_locale}`)) {
    const redirect_url = url.pathname.substring(1 + default_locale.length);
    throw redirect(302, redirect_url !== '' ? redirect_url : '/');
  }
  return {
    locale: locale,
    lekh: (await load_data(locale))?.tracker!
  };
};
