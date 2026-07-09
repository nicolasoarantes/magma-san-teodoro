// Real Magma assets, organized under /public/assets/magma.
// Source files came from /ativos (fotos + logos). If you swap a file,
// keep the same path here or update the mapping below. See README.

const BASE = "/assets/magma";

export const magmaAssets = {
  logos: {
    // Clean white wordmark with transparent background — used in the header.
    header: `${BASE}/logos/header-logo.png`,
    // White wordmark, reused in the poster section.
    wordmarkFire: `${BASE}/logos/header-logo.png`,
    // Logo on its own fire background (best on dark hero blocks).
    fire: `${BASE}/logos/logo-fogo.jpg`,
    // White wordmark (transparent-looking on dark, but has its own bg).
    white: `${BASE}/logos/logo-branca.jpg`,
    // White wordmark on solid black — safest for dark sections.
    whiteOnBlack: `${BASE}/logos/logo-branca-fundo-preto.jpg`,
    // Complete white logo with subtitle and ornaments, transparent background.
    whiteCompleteTransparent: `${BASE}/logos/logo-branca-completa-transparente.png`,
    black: `${BASE}/logos/logo-preta.jpg`,
    plain: `${BASE}/logos/logo.jpg`,
    blackPdf: `${BASE}/logos/logo-preta.pdf`,
  },
  photos: {
    // Aerial sunset over San Teodoro — location / secondary hero.
    aerial: `${BASE}/fotos/aerial.jpg`,
    // MAGMA facade lit up at night — "Visit us".
    facade: `${BASE}/fotos/facade.jpg`,
    // Yellow tropical cocktail being poured — cocktails section.
    drink: `${BASE}/fotos/cocktail-yellow.jpg`,
    // Spirits / bar bottles glowing.
    bottles: `${BASE}/fotos/bar-bottles.jpg`,
    // Meat over open flame — churrasco / fire.
    churrasco: `${BASE}/fotos/churrasco-fire.jpg`,
    // High-res plated steak dinner — steakhouse / food feature.
    steak: `${BASE}/fotos/steak-dinner.jpg`,
    // "New opening" fire close-up.
    fire: `${BASE}/fotos/new-opening-fire.jpg`,
    // "Every day is a Latin day" — dancing silhouettes.
    latinDay: `${BASE}/fotos/latin-day.jpg`,
    // SAN TEODORO poster collage with the Magma wordmark.
    posterSanTeodoro: `${BASE}/fotos/poster-santeodoro.jpg`,
    // FOOD • DRINKS • MUSIC • VIBES reference poster.
    posterVibes: `${BASE}/fotos/poster-vibes.jpg`,
  },
  posters: {
    latinPartyGiovedi: `${BASE}/fotos/event-latin-party.jpg`,
    latinPartyLunedi: `${BASE}/fotos/event-latin-lunedi.jpg`,
    stenzOverdub: `${BASE}/fotos/event-stenz-overdub.jpg`,
    vibes: `${BASE}/fotos/poster-vibes.jpg`,
    sanTeodoro: `${BASE}/fotos/poster-santeodoro.jpg`,
    newOpening: `${BASE}/fotos/new-opening-fire.jpg`,
  },
  videos: {
    hero: `${BASE}/videos/hero.mp4`,
    heroPoster: `${BASE}/videos/hero-poster.jpg`,
    immersive: `${BASE}/videos/immersive.mp4`,
  },
  menu: {
    pdf: "/menu/magma-menu.pdf",
    qr: "/menu/qr-menu.png",
  },
} as const;

// Curated photo strip for the home collage / carousel.
export const galleryPhotos = [
  magmaAssets.photos.churrasco,
  magmaAssets.photos.drink,
  magmaAssets.photos.latinDay,
  magmaAssets.photos.facade,
  magmaAssets.photos.aerial,
  magmaAssets.photos.bottles,
];
