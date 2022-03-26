import { getNextEvent } from '$lib/events';

export function get() {
  return {
    body: JSON.stringify(getNextEvent()),
  };
}
