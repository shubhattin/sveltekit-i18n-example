<script lang="ts">
  import { get_current_locale, change_locale, locales } from '@tools/i18n';
  import { clsx } from '@tools/clsx';
  import { page } from '$app/stores';
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';
  import type { langKey } from '@langs/datt';
  import Select from './Select.svelte';

  const val = writable(get_current_locale($page.params.lang));
  $: options = (() => {
    const opts: any = {};
    for (let x in locales)
      opts[x] = {
        text: locales[x as langKey],
        className: clsx('bg-black font-semibold', $val === x ? 'text-yellow-400' : 'text-white')
      };
    return opts;
  })();

  const unsubscribe = page.subscribe((page) => {
    const locale = get_current_locale(page.params.lang);
    if (locale !== $val) $val = locale;
  });
  onDestroy(unsubscribe);
</script>

<Select
  value={val}
  className="fixed left-1/3 bottom-4 text-sm font-bold bg-black text-white border-2 border-lime-500 outline-none rounded-lg"
  onChange={() => change_locale($val)}
  {options}
/>
