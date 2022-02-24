import { getEvent } from '$lib/events';

export function get({ params }) {
  return {
    body: JSON.stringify(getEvent(parseInt(params.n))),
  };
}
