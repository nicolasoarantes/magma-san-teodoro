import type { Locale } from "@/lib/locale";

type L = { en: string; it: string; pt: string };

const CATEGORIES: Record<string, L> = {
  "Churrasco Rodizio": {
    "en": "Churrasco Rodizio",
    "it": "Churrasco Rodizio",
    "pt": "Churrasco Rodizio"
  },
  "Menu Vegetariano": {
    "en": "Vegetarian Menu",
    "it": "Menu Vegetariano",
    "pt": "Menu Vegetariano"
  },
  "Baby Churrasco": {
    "en": "Baby Churrasco",
    "it": "Baby Churrasco",
    "pt": "Baby Churrasco"
  },
  "Steakhouse": {
    "en": "Steakhouse",
    "it": "Steakhouse",
    "pt": "Steakhouse"
  },
  "Dolci": {
    "en": "Desserts",
    "it": "Dolci",
    "pt": "Sobremesas"
  },
  "Caffetteria": {
    "en": "Coffee Bar",
    "it": "Caffetteria",
    "pt": "Cafeteria"
  },
  "Bibite": {
    "en": "Soft Drinks",
    "it": "Bibite",
    "pt": "Bebidas"
  },
  "Cocktails do Brasil": {
    "en": "Brazilian Cocktails",
    "it": "Cocktails do Brasil",
    "pt": "Coquetéis do Brasil"
  },
  "Cocktails": {
    "en": "Cocktails",
    "it": "Cocktails",
    "pt": "Coquetéis"
  },
  "Vodka": {
    "en": "Vodka",
    "it": "Vodka",
    "pt": "Vodka"
  },
  "La Gintoneria": {
    "en": "Gin Bar",
    "it": "La Gintoneria",
    "pt": "Gin Bar"
  },
  "Cachaça": {
    "en": "Cachaça",
    "it": "Cachaça",
    "pt": "Cachaça"
  },
  "Distillati": {
    "en": "Spirits",
    "it": "Distillati",
    "pt": "Destilados"
  },
  "Birre alla Spina": {
    "en": "Draft Beers",
    "it": "Birre alla Spina",
    "pt": "Chopes"
  },
  "Birre in Bottiglia": {
    "en": "Bottled Beers",
    "it": "Birre in Bottiglia",
    "pt": "Cervejas em Garrafa"
  },
  "Vini": {
    "en": "Wines",
    "it": "Vini",
    "pt": "Vinhos"
  },
  "Colazioni": {
    "en": "Breakfast",
    "it": "Colazioni",
    "pt": "Café da Manhã"
  },
  "Bibite Colazioni": {
    "en": "Breakfast Drinks",
    "it": "Bibite Colazioni",
    "pt": "Bebidas do Café da Manhã"
  }
};

const SUBCATEGORIES: Record<string, L> = {
  "Rodizio Carne": {
    "en": "Rodizio Meats",
    "it": "Rodizio Carne",
    "pt": "Carnes do Rodizio"
  },
  "Selezione Carni Churrasco": {
    "en": "Churrasco Meat Selection",
    "it": "Selezione Carni Churrasco",
    "pt": "Seleção de Carnes Churrasco"
  },
  "Vegetariano": {
    "en": "Vegetarian",
    "it": "Vegetariano",
    "pt": "Vegetariano"
  },
  "Steakhouse": {
    "en": "Steakhouse",
    "it": "Steakhouse",
    "pt": "Steakhouse"
  },
  "Amuerte": {
    "en": "Amuerte",
    "it": "Amuerte",
    "pt": "Amuerte"
  },
  "Bianchi": {
    "en": "White",
    "it": "Bianchi",
    "pt": "Brancos"
  },
  "Bollicine e Rosé": {
    "en": "Sparkling & Rosé",
    "it": "Bollicine e Rosé",
    "pt": "Espumantes e Rosés"
  },
  "Champagne": {
    "en": "Champagne",
    "it": "Champagne",
    "pt": "Champagne"
  },
  "Rossi": {
    "en": "Red",
    "it": "Rossi",
    "pt": "Tintos"
  },
  "Salate": {
    "en": "Savoury",
    "it": "Salate",
    "pt": "Salgados"
  },
  "Panini e Focacce": {
    "en": "Sandwiches & Focaccia",
    "it": "Panini e Focacce",
    "pt": "Sanduíches e Focaccia"
  },
  "Croissant e Dolci": {
    "en": "Croissants & Pastries",
    "it": "Croissant e Dolci",
    "pt": "Croissants e Doces"
  }
};

const CATEGORY_INTROS: Record<string, L> = {
  "Churrasco Rodizio": {
    "en": "The authentic Brazilian charcoal-grilled meat experience. In our rodizio, our passadores serve a selection of grilled meats directly at the table, accompanied by traditional starters and sides.",
    "it": "L'autentica esperienza brasiliana della carne alla brace. Nel nostro rodizio i nostri passadores servono direttamente al tavolo una selezione di carni cotte sulla griglia, accompagnate da antipasti e contorni tipici.",
    "pt": "A autêntica experiência brasileira da carne na brasa. No nosso rodizio, os passadores servem à mesa uma seleção de carnes grelhadas, acompanhadas de entradas e acompanhamentos típicos."
  },
  "Cocktails do Brasil": {
    "en": "Brazil's signature cocktail, made with cachaça, fresh lime and sugar, reinterpreted with tropical fruit for an even fresher and more aromatic experience.",
    "it": "Il cocktail simbolo del Brasile, preparato con cachaça, lime fresco e zucchero, reinterpretato con frutta tropicale per un'esperienza ancora più fresca e aromatica.",
    "pt": "O coquetel símbolo do Brasil, preparado com cachaça, limão fresco e açúcar, reinterpretado com frutas tropicais para uma experiência ainda mais fresca e aromática."
  },
  "Cocktails": {
    "en": "A selection of classic and tropical cocktails designed to accompany the MAGMA experience, with fresh flavours, selected ingredients and Brazilian inspiration.",
    "it": "Una selezione di cocktail classici e tropicali pensati per accompagnare l'esperienza MAGMA, tra sapori freschi, ingredienti selezionati e ispirazioni brasiliane.",
    "pt": "Uma seleção de coquetéis clássicos e tropicais pensados para acompanhar a experiência MAGMA, com sabores frescos, ingredientes selecionados e inspiração brasileira."
  }
};

const DESCRIPTIONS: Record<string, L> = {
  "Una selezione di cinque pregiate carni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle caratteristiche spade. L'esperienza è completata da antipasti e contorni tipici, per un autentico viaggio nei sapori del Brasile.": {
    "en": "A selection of five premium meats grilled according to Brazilian tradition and served directly at the table on signature skewers. The experience is completed with traditional starters and sides for an authentic journey through Brazilian flavours.",
    "it": "Una selezione di cinque pregiate carni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle caratteristiche spade. L'esperienza è completata da antipasti e contorni tipici, per un autentico viaggio nei sapori del Brasile.",
    "pt": "Uma seleção de cinco carnes nobres assadas na brasa segundo a tradição brasileira e servidas à mesa nas características espadas. A experiência inclui entradas e acompanhamentos típicos para uma viagem autêntica pelos sabores do Brasil."
  },
  "Un'esperienza completa dedicata agli amanti della carne: dieci pregiate selezioni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle caratteristiche spade. Il percorso è accompagnato da antipasti e contorni tipici, per vivere l'autentico churrasco in tutta la sua varietà.": {
    "en": "A complete experience for meat lovers: ten premium selections grilled according to Brazilian tradition and served directly at the table on signature skewers, accompanied by traditional starters and sides.",
    "it": "Un'esperienza completa dedicata agli amanti della carne: dieci pregiate selezioni cotte alla brace secondo la tradizione brasiliana e servite direttamente al tavolo sulle caratteristiche spade. Il percorso è accompagnato da antipasti e contorni tipici, per vivere l'autentico churrasco in tutta la sua varietà.",
    "pt": "Uma experiência completa para amantes de carne: dez seleções nobres assadas na brasa segundo a tradição brasileira e servidas à mesa nas características espadas, acompanhadas de entradas e guarnições típicas."
  },
  "5 Tagli": {
    "en": "5 Cuts",
    "it": "5 Tagli",
    "pt": "5 Cortes"
  },
  "10 Tagli": {
    "en": "10 Cuts",
    "it": "10 Tagli",
    "pt": "10 Cortes"
  },
  "Melanzane alla parmigiana, Insalata mista, Verdure grigliate, Pane all'aglio, Riso bianco, Farofa di manioca, Fagioli, Vinaigrette.": {
    "en": "Eggplant parmigiana, mixed salad, grilled vegetables, garlic bread, white rice, cassava farofa, beans and vinaigrette.",
    "it": "Melanzane alla parmigiana, Insalata mista, Verdure grigliate, Pane all'aglio, Riso bianco, Farofa di manioca, Fagioli, Vinaigrette.",
    "pt": "Berinjela à parmegiana, salada mista, legumes grelhados, pão de alho, arroz branco, farofa de mandioca, feijão e vinagrete."
  },
  "Un'esperienza MAGMA pensata per i più piccoli, con una selezione di carni alla brace servite in base ai gusti e alla fame del bambino.": {
    "en": "A MAGMA experience created for the little ones, with a selection of grilled meats served according to each child’s taste and appetite.",
    "it": "Un'esperienza MAGMA pensata per i più piccoli, con una selezione di carni alla brace servite in base ai gusti e alla fame del bambino.",
    "pt": "Uma experiência MAGMA pensada para os pequenos, com uma seleção de carnes na brasa servidas conforme o gosto e a fome da criança."
  },
  "Fino a 10 anni. Contorni inclusi: Riso Bianco, Patatine Fritte e Salpicao Brasiliano. Selezione di carni servite: Salsiccia Brasiliana, Pollo alla brace, Piccole porzioni dei nostri migliori tagli di carne. Incluso: Ananas zuccherato e cannella.": {
    "en": "Up to 10 years old. Sides included: white rice, fries and Brazilian salpicao. Meat selection: Brazilian sausage, grilled chicken and small portions of our best cuts. Includes pineapple with sugar and cinnamon.",
    "it": "Fino a 10 anni. Contorni inclusi: Riso Bianco, Patatine Fritte e Salpicao Brasiliano. Selezione di carni servite: Salsiccia Brasiliana, Pollo alla brace, Piccole porzioni dei nostri migliori tagli di carne. Incluso: Ananas zuccherato e cannella.",
    "pt": "Até 10 anos. Acompanhamentos incluídos: arroz branco, batata frita e salpicão brasileiro. Carnes: linguiça brasileira, frango na brasa e pequenas porções dos nossos melhores cortes. Inclui abacaxi com açúcar e canela."
  },
  "L'iconica bistecca con osso, ricavata dalla costata di Black Angus. Caratterizzata da un'intensa marezzatura e da un sapore ricco e deciso, è ideale da condividere.": {
    "en": "The iconic bone-in Black Angus steak, richly marbled, intense in flavour and ideal for sharing.",
    "it": "L'iconica bistecca con osso, ricavata dalla costata di Black Angus. Caratterizzata da un'intensa marezzatura e da un sapore ricco e deciso, è ideale da condividere.",
    "pt": "A icônica bisteca com osso de Black Angus, rica em marmoreio, sabor intenso e ideal para compartilhar."
  },
  "Il simbolo della grande bistecca italiana. Ricavata dal lombo con filetto e controfiletto, offre un perfetto equilibrio tra tenerezza e intensità di sapore.": {
    "en": "The symbol of the great Italian steak. Cut from the loin with fillet and sirloin, balancing tenderness and intense flavour.",
    "it": "Il simbolo della grande bistecca italiana. Ricavata dal lombo con filetto e controfiletto, offre un perfetto equilibrio tra tenerezza e intensità di sapore.",
    "pt": "O símbolo da grande bisteca italiana. Retirada do lombo com filé e contrafilé, equilibra maciez e sabor intenso."
  },
  "Taglio classico con osso, succoso e saporito, perfetto per gli amanti della carne cotta alla brace secondo la tradizione.": {
    "en": "A classic bone-in cut, juicy and flavourful, perfect for lovers of traditional charcoal-grilled meat.",
    "it": "Taglio classico con osso, succoso e saporito, perfetto per gli amanti della carne cotta alla brace secondo la tradizione.",
    "pt": "Um corte clássico com osso, suculento e saboroso, perfeito para quem ama carne assada na brasa."
  },
  "Una delle carni più pregiate al mondo. Celebre per l'eccezionale marezzatura che dona una consistenza incredibilmente morbida e un gusto raffinato.": {
    "en": "One of the world’s most prized meats, known for exceptional marbling that gives it an incredibly tender texture and refined flavour.",
    "it": "Una delle carni più pregiate al mondo. Celebre per l'eccezionale marezzatura che dona una consistenza incredibilmente morbida e un gusto raffinato.",
    "pt": "Uma das carnes mais nobres do mundo, famosa pelo marmoreio excepcional que traz textura extremamente macia e sabor refinado."
  },
  "Ananas cotto con cannella e zucchero": {
    "en": "Pineapple roasted with cinnamon and sugar.",
    "it": "Ananas cotto con cannella e zucchero",
    "pt": "Abacaxi assado com canela e açúcar."
  },
  "Ananas alla griglia servito allo spiedo.": {
    "en": "Grilled pineapple served on the skewer.",
    "it": "Ananas alla griglia servito allo spiedo.",
    "pt": "Abacaxi grelhado servido no espeto."
  },
  "Rum, cocco e ananas. Cremosa, dolce e dal gusto tipicamente caraibico.": {
    "en": "Rum, coconut and pineapple. Creamy, sweet and unmistakably Caribbean.",
    "it": "Rum, cocco e ananas. Cremosa, dolce e dal gusto tipicamente caraibico.",
    "pt": "Rum, coco e abacaxi. Cremosa, doce e com sabor caribenho."
  },
  "Vodka, lime e ginger beer. Fresco e leggermente speziato.": {
    "en": "Vodka, lime and ginger beer. Fresh and lightly spicy.",
    "it": "Vodka, lime e ginger beer. Fresco e leggermente speziato.",
    "pt": "Vodka, limão e ginger beer. Fresco e levemente picante."
  }
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

function preserveFallback(text: string): boolean {
  return text.length <= 32 || /^\d+(?:,\d+)? L$/.test(text) || /^\d+ Tagli$/.test(text);
}

export function describe(description: string, locale: Locale): string {
  if (!description) return "";
  const translated = DESCRIPTIONS[description]?.[locale];
  if (translated !== undefined) return translated;
  if (locale === "it" || preserveFallback(description)) return description;
  return "";
}
