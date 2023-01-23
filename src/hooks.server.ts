import type { RequestEvent, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { get_locale, default_locale } from './langs';

const addLangTag: Handle = ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      const locale = get_locale(event.params.lang!);
      if (event.request.method === 'GET' && !event.isDataRequest)
        html = html.replace('%lang%', locale! || default_locale);
      return html;
    }
  });
};

export const handle: Handle = sequence(addLangTag);
