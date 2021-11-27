import { stringify } from 'qs';
export const url = (path: string, query: Record<string, string> = {}) =>
  [path, stringify(query)].filter(Boolean).join('?');

const GOOGLE_PLACE_ID = 'ChIJ63WGncfVwkcR79x6PiSTlOY';

export const INSTAGRAM_URL = 'https://www.instagram.com/alices.lille/';
export const FACEBOOK_URL = 'https://www.facebook.com/Alices-100810122354194/';
export const GOOGLE_URL = url('https://search.google.com/local/writereview', {
  placeid: GOOGLE_PLACE_ID,
});
