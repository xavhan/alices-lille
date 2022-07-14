import { getBeer } from '$lib/beers';

export function get({ params }) {
  return {
    body: JSON.stringify(
      getBeer(params.slug)
      // || get other - todo: refactor later
    ),
  };
}
