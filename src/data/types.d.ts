/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
type Season = 'winter' | 'spring' | 'fall' | 'summer';
type Year = '2022';
type BeerType =
  | 'Pils'
  | 'Blonde'
  | 'IPA'
  | 'Ambrée'
  | 'Triple'
  | 'Sour'
  | 'Trappiste'
  | 'Gueuze'
  | 'Sans Gluten';

export type Link = {
  label: string;
  href: string;
  target?: null;
};

export type Beer = {
  type_label?: BeerType;
  label: string;
  brewery?: string;
  price:
    | number
    | Partial<{
        25: number;
        33: number;
        50: number;
      }>;
  abv?: number;
  disabled?: true;
  availability?: `${Season}${Year}`[];
};
export type Wine = {
  label: string;
  grapes?: string;
  estate?: string;
  text?: string;
  price: number;
  disabled?: true;
  availability?: `${Season}${Year}`[];
  highlight?: true;
};
export type Cocktail = {
  label: string;
  composition: string;
  virgin?: true;
  price: number;
  disabled?: true;
  availability?: `${Season}${Year}`[];
};
export type Spirit = {
  label: string;
  description: string;
  abv: number;
  price: number;
  disabled?: true;
  availability?: `${Season}${Year}`[];
};

export type Soft = {
  label: string;
  price: number;
  disabled?: true;
  availability?: `${Season}${Year}`[];
};
export type FoodItem = {
  label: string;
  price: number;
};

export type Event = {
  n?: number;
  slug?: string;
  label: string;
  description?: string;
  guests: DJ[];
  date: string;
  facebookEvent?: string;
  imageSrc?: string;
  html?: string;
};

export type DJLink =
  | string
  | {
      type: 'soundcloud';
      href: string;
    }
  | {
      type: 'mixcloud';
      href: string;
    }
  | {
      type: 'instagram';
      href: string;
    }
  | {
      type: 'facebook';
      href: string;
    };
export type DJ = {
  label: string;
  slug: string;
  links?: DJLink[];
  description?: string;
  imageSrc?: string
};
