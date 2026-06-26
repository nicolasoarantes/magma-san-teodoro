// Localized labels for the menu. Dish NAMES stay as-is (Picanha, Caipirinha,
// Tomahawk...). Category/subcategory labels and item descriptions are translated.
// Italian is the source language (matches cardapio.xlsx); EN/PT provided here.
import type { Locale } from "@/lib/locale";

type L = { en: string; it: string; pt: string };

const CATEGORIES: Record<string, L> = {
  Rodizio: { en: "Rodízio", it: "Rodízio", pt: "Rodízio" },
  "Menu Vegetariano": { en: "Vegetarian Menu", it: "Menu Vegetariano", pt: "Menu Vegetariano" },
  "Baby Churrasco": { en: "Baby Churrasco", it: "Baby Churrasco", pt: "Baby Churrasco" },
  Steakhouse: { en: "Steakhouse", it: "Steakhouse", pt: "Steakhouse" },
  Dolci: { en: "Desserts", it: "Dolci", pt: "Sobremesas" },
  Caffetteria: { en: "Coffee Bar", it: "Caffetteria", pt: "Cafeteria" },
  Bibite: { en: "Soft Drinks", it: "Bibite", pt: "Bebidas" },
  "Cocktails du Brasil": { en: "Cocktails do Brasil", it: "Cocktails do Brasil", pt: "Cocktails do Brasil" },
  Cocktails: { en: "Cocktails", it: "Cocktails", pt: "Coquetéis" },
  Distillati: { en: "Spirits", it: "Distillati", pt: "Destilados" },
  "Birre alla Spina": { en: "Draft Beers", it: "Birre alla Spina", pt: "Chopes" },
  "Birre in Bottiglia": { en: "Bottled Beers", it: "Birre in Bottiglia", pt: "Cervejas (Garrafa)" },
  Vini: { en: "Wines", it: "Vini", pt: "Vinhos" },
  Colazioni: { en: "Breakfast", it: "Colazioni", pt: "Café da Manhã" },
};

const SUBCATEGORIES: Record<string, L> = {
  Bianchi: { en: "White", it: "Bianchi", pt: "Brancos" },
  "Bollicine e Rosé": { en: "Sparkling & Rosé", it: "Bollicine e Rosé", pt: "Espumantes e Rosé" },
  Champagne: { en: "Champagne", it: "Champagne", pt: "Champagne" },
  "Croissant e Dolci": { en: "Croissants & Pastries", it: "Croissant e Dolci", pt: "Croissants e Doces" },
  Menu: { en: "Set Menus", it: "Menu", pt: "Menus" },
  "Panini e Focacce": { en: "Sandwiches & Focaccia", it: "Panini e Focacce", pt: "Sanduíches e Focaccia" },
  "Rodizio Carne": { en: "Meat Rodízio", it: "Rodízio Carne", pt: "Rodízio de Carne" },
  "Rodizio Pesce": { en: "Fish Rodízio", it: "Rodízio Pesce", pt: "Rodízio de Peixe" },
  Rossi: { en: "Red", it: "Rossi", pt: "Tintos" },
  Salate: { en: "Savoury", it: "Salate", pt: "Salgados" },
};

const DESCRIPTIONS: Record<string, L> = {
  "Carne servita alla spada direttamente al tavolo. Contorni inclusi.": {
    it: "Carne servita alla spada direttamente al tavolo. Contorni inclusi.",
    en: "Meat carved on the skewer right at your table. Sides included.",
    pt: "Carne servida na espada direto na mesa. Acompanhamentos inclusos.",
  },
  "Pesce servito alla spada direttamente al tavolo. Contorni inclusi.": {
    it: "Pesce servito alla spada direttamente al tavolo. Contorni inclusi.",
    en: "Fish carved on the skewer right at your table. Sides included.",
    pt: "Peixe servido na espada direto na mesa. Acompanhamentos inclusos.",
  },
  "Melanzane alla parmigiana, Insalata mista, Verdure grigliate, Pane all'aglio, Riso bianco, Farofa di manioca, Fagioli, Vinaigrette": {
    it: "Melanzane alla parmigiana, Insalata mista, Verdure grigliate, Pane all'aglio, Riso bianco, Farofa di manioca, Fagioli, Vinaigrette",
    en: "Eggplant parmigiana, mixed salad, grilled vegetables, garlic bread, white rice, cassava farofa, beans, vinaigrette",
    pt: "Berinjela à parmegiana, salada mista, legumes grelhados, pão de alho, arroz branco, farofa de mandioca, feijão, vinagrete",
  },
  "Scelta tra: Picanha / Fraldinha / Salsiccia / Coscia di pollo / Costine di maiale. Servito con: Riso bianco, Fagioli, Patatine fritte. Incluso: Succo di frutta e Dolce.": {
    it: "Scelta tra: Picanha / Fraldinha / Salsiccia / Coscia di pollo / Costine di maiale. Servito con: Riso bianco, Fagioli, Patatine fritte. Incluso: Succo di frutta e Dolce.",
    en: "Choice of: Picanha / Fraldinha / Sausage / Chicken leg / Pork ribs. Served with: white rice, beans, fries. Includes: fruit juice and dessert.",
    pt: "Escolha entre: Picanha / Fraldinha / Linguiça / Coxa de frango / Costela de porco. Servido com: arroz branco, feijão, batata frita. Inclui: suco de fruta e sobremesa.",
  },
  "Ananas cotto con cannella e zucchero": {
    it: "Ananas cotto con cannella e zucchero",
    en: "Pineapple roasted with cinnamon and sugar",
    pt: "Abacaxi assado com canela e açúcar",
  },
  "Ichnusa Cruda / Ichnusa Non Filtrata / Heineken": {
    it: "Ichnusa Cruda / Ichnusa Non Filtrata / Heineken",
    en: "Ichnusa Cruda / Ichnusa Non Filtrata / Heineken",
    pt: "Ichnusa Cruda / Ichnusa Non Filtrata / Heineken",
  },
  "Bacon, pomodoro e pane tostato": {
    it: "Bacon, pomodoro e pane tostato",
    en: "Bacon, tomato and toast",
    pt: "Bacon, tomate e torrada",
  },
  "Pane tostato e insalata": {
    it: "Pane tostato e insalata",
    en: "Toast and salad",
    pt: "Torrada e salada",
  },
  "Pomodoro e mozzarella": {
    it: "Pomodoro e mozzarella",
    en: "Tomato and mozzarella",
    pt: "Tomate e muçarela",
  },
  "Tonno, maionese, insalata e pomodoro": {
    it: "Tonno, maionese, insalata e pomodoro",
    en: "Tuna, mayo, salad and tomato",
    pt: "Atum, maionese, salada e tomate",
  },
  "Croissant + spremuta + caffè + bicchiere d'acqua": {
    it: "Croissant + spremuta + caffè + bicchiere d'acqua",
    en: "Croissant + fresh juice + coffee + glass of water",
    pt: "Croissant + suco natural + café + copo d'água",
  },
};

export function categoryLabel(category: string, locale: Locale): string {
  return CATEGORIES[category]?.[locale] ?? category;
}

export function subcategoryLabel(sub: string, locale: Locale): string {
  return SUBCATEGORIES[sub]?.[locale] ?? sub;
}

export function describe(description: string, locale: Locale): string {
  if (!description) return "";
  return DESCRIPTIONS[description]?.[locale] ?? description;
}
