/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
  userid: string;
}
export type Beer = {
  label: string;
  brewery?: string;
  prices: Partial<{
    25: number;
    33: number;
    50: number;
  }>
}
export type Wine = {
  label: string;
  grapes?: string;
  estate?: string;
  text?: string;
  prices: Partial<{
    12: number;
    75: number;
  }>
}
export type Cocktail = {
  label: string;
  composition: string;
  prices: Partial<{
    12: number;
  }>
}