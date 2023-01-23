import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { puShTi } from '@tools/kry/gupta';
import { locales } from '@tools/i18n';

const ERR_MSG: string = 'anuchitaM kIlakam!';

const verify = async (key: string, where: string) => {
  const hash_salt =
    '8f43b9279fe7df2d252a77ad4b32a231dd905f4dfb75c872c91041fc827e2441cd8425ad2ddfb675378e524277557267d5e18b21b68cf11ea7b34e1e1d8fa234c49b612d015d7c820e8047cc9121f0d5';
  if (!(await puShTi(key, hash_salt))) throw error(401, ERR_MSG);
};

export const POST = (async ({ request }) => {
  const body = await request.json();

  await verify(body.key, 'track');

  const r = await (
    await fetch('https://api.github.com/repos/lipilekhika/dist/releases', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
  ).json();

  let bhsh: {
    [key: string]: string;
  } = locales;
  const res: {
    [key: string]: {
      name: string;
      info: {
        [key: string]: number;
      };
    };
  } = {};
  for (const x of r) {
    const tag_name: string = x.tag_name;
    res[tag_name] = { name: x.name, info: {} };
    for (const y of x.assets) {
      const v = y.name.split('.')[0];
      if (tag_name.endsWith('bhasha')) {
        res[tag_name].info[bhsh[v]] = y.download_count;
      } else if (v == 'su') {
        res[tag_name].info['परिगणना'] = y.download_count;
      } else {
        res[tag_name].info[v] = y.download_count;
      }
    }
  }
  return new Response(JSON.stringify(res), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}) satisfies RequestHandler;
