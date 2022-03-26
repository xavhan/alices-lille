import { getDJ } from '$lib/djs';

export function get({ params }) {
  return {
    body: JSON.stringify(getDJ(params.slug)),
  };
}
