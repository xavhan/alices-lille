/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export type Link = {
  label: string;
  href: string;
  target?: null;
};

export type Beer = {
  label: string;
  brewery?: string;
  prices: Partial<{
    25: number;
    33: number;
    50: number;
  }>;
};
export type Wine = {
  label: string;
  grapes?: string;
  estate?: string;
  text?: string;
  prices: Partial<{
    12: number;
    75: number;
  }>;
};
export type Cocktail = {
  label: string;
  composition: string;
  prices: Partial<{
    12: number; // TODO: change key
  }>;
};
export type Spirit = {
  label: string;
  description: string;
  degree: number;
  prices: Partial<{
    12: number; // TODO: change key
  }>;
};

export type Soft = {
  label: string;
  prices: Partial<{
    33: number; // TODO: change key
  }>;
};
export type FoodItem = {
  label: string;
  prices: Partial<{
    200: number; // TODO: change key
  }>;
};

export type Event = {
  label: string;
  description?: string;
  guests: DJ[];
  date: string;
  facebookEvent?: string;
}

export type DJ = {
  label: string;
  links?: string[];
  description?: string;
}
