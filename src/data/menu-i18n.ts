import type { Locale } from "@/lib/locale";

type L = { en: string; it: string; pt: string };

const CATEGORIES: Record<string, L> = {
  "Churrasco Rodízio": {
    en: "Churrasco Rodízio",
    it: "Churrasco Rodízio",
    pt: "Churrasco Rodízio",
  },
  "Menu Vegetariano": {
    en: "Vegetarian Menu",
    it: "Menu Vegetariano",
    pt: "Menu Vegetariano",
  },
  "Baby Churrasco": {
    en: "Baby Churrasco",
    it: "Baby Churrasco",
    pt: "Baby Churrasco",
  },
  Steakhouse: { en: "Steakhouse", it: "Steakhouse", pt: "Steakhouse" },
  Dolci: { en: "Desserts", it: "Dolci", pt: "Sobremesas" },
  Caffetteria: { en: "Coffee Bar", it: "Caffetteria", pt: "Cafeteria" },
  Bibite: { en: "Soft Drinks", it: "Bibite", pt: "Bebidas" },
  "Cocktails do Brasil": {
    en: "Cocktails do Brasil",
    it: "Cocktails do Brasil",
    pt: "Cocktails do Brasil",
  },
  Cocktails: { en: "Cocktails", it: "Cocktails", pt: "Coquetéis" },
  Distillati: { en: "Spirits", it: "Distillati", pt: "Destilados" },
  "Birre alla Spina": {
    en: "Draft Beers",
    it: "Birre alla Spina",
    pt: "Chopes",
  },
  "Birre in Bottiglia": {
    en: "Bottled Beers",
    it: "Birre in Bottiglia",
    pt: "Cervejas em Garrafa",
  },
  Vini: { en: "Wines", it: "Vini", pt: "Vinhos" },
  Colazioni: { en: "Breakfast", it: "Colazioni", pt: "Café da Manhã" },
};

const SUBCATEGORIES: Record<string, L> = {
  Rodízio: { en: "Rodízio", it: "Rodízio", pt: "Rodízio" },
  "Le Nostre Carni": {
    en: "Our Meats",
    it: "Le Nostre Carni",
    pt: "Nossas Carnes",
  },
  Bianchi: { en: "White", it: "Bianchi", pt: "Brancos" },
  "Bollicine e Rosé": {
    en: "Sparkling & Rosé",
    it: "Bollicine e Rosé",
    pt: "Espumantes e Rosé",
  },
  Champagne: { en: "Champagne", it: "Champagne", pt: "Champagne" },
  Rossi: { en: "Red", it: "Rossi", pt: "Tintos" },
  Salate: { en: "Savoury", it: "Salate", pt: "Salgados" },
  "Panini e Focacce": {
    en: "Sandwiches & Focaccia",
    it: "Panini e Focacce",
    pt: "Sanduíches e Focaccia",
  },
  "Croissant e Dolci": {
    en: "Croissants & Pastries",
    it: "Croissant e Dolci",
    pt: "Croissants e Doces",
  },
  Menu: { en: "Set Menus", it: "Menu", pt: "Menus" },
};

const CATEGORY_INTROS: Record<string, L> = {
  "Churrasco Rodízio": {
    it: "L'autentica esperienza brasiliana della carne alla brace. Nel nostro rodízio, i nostri passadores servono direttamente al tavolo una selezione di carni cotte alla griglia, accompagnate da antipasti e contorni tipici.",
    en: "The authentic Brazilian experience of flame-grilled meat. In our rodízio, our passadores serve a selection of grilled meats directly at the table, accompanied by traditional starters and sides.",
    pt: "A autêntica experiência brasileira da carne na brasa. No nosso rodízio, os passadores servem diretamente à mesa uma seleção de carnes grelhadas, acompanhadas de entradas e acompanhamentos típicos.",
  },
  "Cocktails do Brasil": {
    it: "Il cocktail simbolo del Brasile, preparato con cachaça, lime fresco e zucchero, reinterpretato con frutta tropicale per un'esperienza ancora più fresca e aromatica.",
    en: "Brazil's signature cocktail, made with cachaça, fresh lime and sugar, reinterpreted with tropical fruit for an even fresher, more aromatic experience.",
    pt: "O coquetel símbolo do Brasil, preparado com cachaça, limão fresco e açúcar, reinterpretado com frutas tropicais para uma experiência ainda mais fresca e aromática.",
  },
  Cocktails: {
    it: "Una selezione di cocktail classici e tropicali pensati per accompagnare l'esperienza MAGMA, tra sapori freschi, ingredienti selezionati e ispirazioni brasiliane.",
    en: "A selection of classic and tropical cocktails designed to accompany the MAGMA experience, with fresh flavours, selected ingredients and Brazilian inspiration.",
    pt: "Uma seleção de coquetéis clássicos e tropicais pensados para acompanhar a experiência MAGMA, com sabores frescos, ingredientes selecionados e inspiração brasileira.",
  },
};

const DESCRIPTIONS: Record<string, L> = {
  "L'esperienza più completa del nostro churrasco: dieci selezionati tagli di carne, cotti alla brace secondo la tradizione brasiliana e serviti direttamente al tavolo sulle tradizionali spade.": {
    it: "L'esperienza più completa del nostro churrasco: dieci selezionati tagli di carne, cotti alla brace secondo la tradizione brasiliana e serviti direttamente al tavolo sulle tradizionali spade.",
    en: "The most complete churrasco experience: ten selected cuts of meat, flame-grilled according to Brazilian tradition and served directly at the table on traditional skewers.",
    pt: "A experiência mais completa do nosso churrasco: dez cortes selecionados de carne, assados na brasa segundo a tradição brasileira e servidos diretamente à mesa nas tradicionais espadas.",
  },
  "Una selezione di cinque pregiate carni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle tradizionali spade.": {
    it: "Una selezione di cinque pregiate carni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle tradizionali spade.",
    en: "A selection of five premium meats flame-grilled according to Brazilian tradition and served directly at the table on traditional skewers.",
    pt: "Uma seleção de cinco carnes nobres assadas na brasa segundo a tradição brasileira e servidas diretamente à mesa nas tradicionais espadas.",
  },
  "Il simbolo del churrasco brasiliano: tenera, succosa e caratterizzata dalla sua copertura di grasso, che dona un sapore intenso.": {
    it: "Il simbolo del churrasco brasiliano: tenera, succosa e caratterizzata dalla sua copertura di grasso, che dona un sapore intenso.",
    en: "The symbol of Brazilian churrasco: tender, juicy and defined by its fat cap, which gives it an intense flavour.",
    pt: "O símbolo do churrasco brasileiro: macia, suculenta e marcada pela capa de gordura, que traz um sabor intenso.",
  },
  "Un taglio dalla fibra particolare, succoso e dal gusto deciso.": {
    it: "Un taglio dalla fibra particolare, succoso e dal gusto deciso.",
    en: "A cut with distinctive fibres, juicy and full of character.",
    pt: "Um corte de fibra marcante, suculento e de sabor intenso.",
  },
  "Morbida e delicata, con una consistenza che la rende uno dei tagli più apprezzati del churrasco.": {
    it: "Morbida e delicata, con una consistenza che la rende uno dei tagli più apprezzati del churrasco.",
    en: "Soft and delicate, with a texture that makes it one of churrasco's most appreciated cuts.",
    pt: "Macia e delicada, com uma textura que faz dela um dos cortes mais apreciados do churrasco.",
  },
  "Carne tenera e versatile, dal sapore equilibrato.": {
    it: "Carne tenera e versatile, dal sapore equilibrato.",
    en: "Tender, versatile meat with a balanced flavour.",
    pt: "Carne macia e versátil, de sabor equilibrado.",
  },
  "Speziata secondo tradizione, saporita e succosa.": {
    it: "Speziata secondo tradizione, saporita e succosa.",
    en: "Seasoned in the traditional way, savoury and juicy.",
    pt: "Temperada segundo a tradição, saborosa e suculenta.",
  },
  "Marinato con aromi selezionati e grigliato fino a ottenere una crosticina dorata.": {
    it: "Marinato con aromi selezionati e grigliato fino a ottenere una crosticina dorata.",
    en: "Marinated with selected aromatics and grilled until golden and crisp.",
    pt: "Marinado com aromas selecionados e grelhado até formar uma crosta dourada.",
  },
  "Melanzane alla parmigiana, insalata mista, verdure grigliate, pane all'aglio, riso bianco, farofa di manioca, fagioli e vinaigrette.": {
    it: "Melanzane alla parmigiana, insalata mista, verdure grigliate, pane all'aglio, riso bianco, farofa di manioca, fagioli e vinaigrette.",
    en: "Eggplant parmigiana, mixed salad, grilled vegetables, garlic bread, white rice, cassava farofa, beans and vinaigrette.",
    pt: "Berinjela à parmegiana, salada mista, legumes grelhados, pão de alho, arroz branco, farofa de mandioca, feijão e vinagrete.",
  },
  "Anche i più piccoli possono vivere l'esperienza MAGMA. Una selezione di carni churrasco servite in una porzione dedicata ai bambini.": {
    it: "Anche i più piccoli possono vivere l'esperienza MAGMA. Una selezione di carni churrasco servite in una porzione dedicata ai bambini.",
    en: "Even the little ones can enjoy the MAGMA experience. A selection of churrasco meats served in a portion designed for children.",
    pt: "Os pequenos também podem viver a experiência MAGMA. Uma seleção de carnes churrasco servida em uma porção dedicada às crianças.",
  },
  "Fino a 10 anni. Accompagnamenti: riso bianco, fagioli brasiliani, patatine fritte e dolce. Carni: Salsiccia Brasiliana, tacchino con pancetta, pollo croccante, Picanha Black Angus e scamorza al miele.": {
    it: "Fino a 10 anni. Accompagnamenti: riso bianco, fagioli brasiliani, patatine fritte e dolce. Carni: Salsiccia Brasiliana, tacchino con pancetta, pollo croccante, Picanha Black Angus e scamorza al miele.",
    en: "Up to 10 years old. Sides: white rice, Brazilian beans, fries and dessert. Meats: Salsiccia Brasiliana, turkey with bacon, crispy chicken, Picanha Black Angus and scamorza with honey.",
    pt: "Até 10 anos. Acompanhamentos: arroz branco, feijão brasileiro, batata frita e sobremesa. Carnes: Salsiccia Brasiliana, peru com bacon, frango crocante, Picanha Black Angus e scamorza com mel.",
  },
  "L'iconica bistecca con osso, ricca di marezzatura e dal gusto intenso. Ideale da condividere.": {
    it: "L'iconica bistecca con osso, ricca di marezzatura e dal gusto intenso. Ideale da condividere.",
    en: "The iconic bone-in steak, richly marbled and intense in flavour. Ideal for sharing.",
    pt: "A icônica bisteca com osso, rica em marmoreio e de sabor intenso. Ideal para compartilhar.",
  },
  "Pregiata carne australiana, straordinariamente tenera grazie alla sua caratteristica marezzatura.": {
    it: "Pregiata carne australiana, straordinariamente tenera grazie alla sua caratteristica marezzatura.",
    en: "Premium Australian beef, extraordinarily tender thanks to its characteristic marbling.",
    pt: "Carne australiana nobre, extraordinariamente macia graças ao seu marmoreio característico.",
  },
  "Il grande classico della griglia: saporita, succosa e cotta alla brace.": {
    it: "Il grande classico della griglia: saporita, succosa e cotta alla brace.",
    en: "The great grill classic: savoury, juicy and flame-grilled.",
    pt: "O grande clássico da grelha: saboroso, suculento e assado na brasa.",
  },
  "L'eccellenza della tradizione italiana, con filetto e controfiletto separati dal caratteristico osso a T.": {
    it: "L'eccellenza della tradizione italiana, con filetto e controfiletto separati dal caratteristico osso a T.",
    en: "An excellence of Italian tradition, with fillet and sirloin separated by the characteristic T-bone.",
    pt: "A excelência da tradição italiana, com filé e contrafilé separados pelo característico osso em T.",
  },
  "Ananas cotto con cannella e zucchero.": {
    it: "Ananas cotto con cannella e zucchero.",
    en: "Pineapple roasted with cinnamon and sugar.",
    pt: "Abacaxi assado com canela e açúcar.",
  },
  "Bacon, pomodoro e pane tostato.": {
    it: "Bacon, pomodoro e pane tostato.",
    en: "Bacon, tomato and toast.",
    pt: "Bacon, tomate e torrada.",
  },
  "Pane tostato e insalata.": {
    it: "Pane tostato e insalata.",
    en: "Toast and salad.",
    pt: "Torrada e salada.",
  },
  "Pomodoro e mozzarella.": {
    it: "Pomodoro e mozzarella.",
    en: "Tomato and mozzarella.",
    pt: "Tomate e muçarela.",
  },
  "Croissant + spremuta + caffè + bicchiere d'acqua.": {
    it: "Croissant + spremuta + caffè + bicchiere d'acqua.",
    en: "Croissant + fresh juice + coffee + glass of water.",
    pt: "Croissant + suco natural + café + copo d'água.",
  },
};

export function categoryLabel(category: string, locale: Locale): string {
  return CATEGORIES[category]?.[locale] ?? category;
}

export function subcategoryLabel(sub: string, locale: Locale): string {
  return SUBCATEGORIES[sub]?.[locale] ?? sub;
}

export function categoryIntro(category: string, locale: Locale): string {
  return CATEGORY_INTROS[category]?.[locale] ?? "";
}

export function describe(description: string, locale: Locale): string {
  if (!description) return "";
  return DESCRIPTIONS[description]?.[locale] ?? description;
}
