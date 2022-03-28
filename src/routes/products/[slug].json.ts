import { getProduct } from '$lib/products';

export function get({ params }) {
  return {
    body: JSON.stringify(getProduct(params.slug)),
  };
}
