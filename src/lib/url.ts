import { stringify } from 'qs';
export const url = (path: string, query: Record<string, string> = {}) =>
  [path, stringify(query)].filter(Boolean).join('?');

const GOOGLE_PLACE_ID = 'ChIJ63WGncfVwkcR79x6PiSTlOY';
export const GOOGLE_URL = url('https://search.google.com/local/writereview', {
  placeid: GOOGLE_PLACE_ID,
});
