// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Laureano Oliva";
export const SITE_DESCRIPTION =
  "Bienvenido a mi Blog!";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Laureano Oliva";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
