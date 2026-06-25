import { magmaAssets } from "./assets";

export type EventType = "latin" | "djset" | "opening" | "brazilian";

export interface MagmaEvent {
  id: string;
  image: string;
  title: string;
  // Date exactly as printed on the poster, or null when not clearly shown.
  // We never invent dates — null renders as the localized "Past event" label.
  dateText: string | null;
  type: EventType;
}

// Built only from the real posters in /ativos. Titles/dates are taken from the
// artwork; anything unclear is left as null (-> "Past event").
export const events: MagmaEvent[] = [
  {
    id: "latin-party-giovedi",
    image: magmaAssets.posters.latinPartyGiovedi,
    title: "Latin Party — Santi Cofre & Jony Em",
    dateText: "Giovedì 11/6",
    type: "latin",
  },
  {
    id: "latin-party-lunedi",
    image: magmaAssets.posters.latinPartyLunedi,
    title: "Latin Party Lunedì — Santi Cofre & Jony Em",
    dateText: "Lunedì 15/6",
    type: "latin",
  },
  {
    id: "stenz-overdub",
    image: magmaAssets.posters.stenzOverdub,
    title: "Stenz / Overdub — Alternative DJ Set",
    dateText: "19 Giugno · 22:00",
    type: "djset",
  },
  {
    id: "san-teodoro-opening",
    image: magmaAssets.posters.sanTeodoro,
    title: "Magma San Teodoro",
    dateText: null,
    type: "opening",
  },
  {
    id: "food-drinks-music-vibes",
    image: magmaAssets.posters.vibes,
    title: "Food • Drinks • Music • Vibes",
    dateText: null,
    type: "brazilian",
  },
  {
    id: "new-opening",
    image: magmaAssets.posters.newOpening,
    title: "New Opening",
    dateText: null,
    type: "opening",
  },
];
