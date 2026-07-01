export interface MenuItem {
  name: string;
  price: number; // in PLN
  description?: string; // only for drinks (composition/ingredients)
}

export interface MenuSubSection {
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  imagePlaceholder: string; // text description for the black placeholder
  image?: string; // real category cover image (cropped & stretched)
  subsections: MenuSubSection[];
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  source: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  placeholderText: string;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "piwo",
    name: "Piwo",
    imagePlaceholder: "KATEGORIA PIWO - Złociste kufle z pianą, rzemieślnicze nalewaki miedziane w tle",
    image: "/images/cat-piwo.png",
    subsections: [
      {
        title: "Piwo z beczki",
        items: [
          { name: "Krosno Jasne Pełne 0.5L", price: 14 },
          { name: "Krosno Jasne Pełne 0.3L", price: 11 },
          { name: "Bieszczadzki Ciemny Lager 0.5L", price: 16 },
          { name: "Rzemieślniczy IPA z beczki 0.5L", price: 18 },
          { name: "Pszeniczny Klasyk 0.5L", price: 16 },
          { name: "Beczka Sezonowa (zapytaj obsługę)", price: 17 }
        ]
      },
      {
        title: "Piwo rzemieślnicze butelkowe",
        items: [
          { name: "Double IPA Citra 0.5L", price: 21 },
          { name: "Stout Czekoladowo-Owsiany 0.5L", price: 19 },
          { name: "Hazy APA 0.5L", price: 18 },
          { name: "Sour Ale Kwaśna Wiśnia 0.5L", price: 18 },
          { name: "Dymiony Porter Bałtycki 0.33L", price: 24 },
          { name: "Saison z trawą cytrynową 0.5L", price: 17 }
        ]
      },
      {
        title: "Piwa klasyczne i regionalne",
        items: [
          { name: "Zwierzyniec Pils 0.5L", price: 14 },
          { name: "Leżajsk Pełne 0.5L", price: 13 },
          { name: "Miodowe Regionalne 0.5L", price: 15 },
          { name: "Porter Warmiński 0.5L", price: 18 },
          { name: "Radler Cytrynowy 0.0% 0.5L", price: 13 },
          { name: "Mango APA 0.0% 0.5L", price: 15 }
        ]
      }
    ]
  },
  {
    id: "drinki-alkohole",
    name: "Drinki & Alkohole",
    imagePlaceholder: "KATEGORIA DRINKI - Kolorowe koktajle w eleganckich szkłach, lód, owoce, barman w akcji",
    image: "/images/cat-drinki.png",
    subsections: [
      {
        title: "Drinki klasyczne",
        items: [
          { name: "Old Fashioned", price: 28, description: "Burbon, syrop cukrowy, Angostura, skórka z pomarańczy" },
          { name: "Whiskey Sour", price: 26, description: "Whiskey, sok z cytryny, syrop cukrowy, białko, Angostura" },
          { name: "Aperol Spritz", price: 29, description: "Aperol, Prosecco, woda gazowana, plaster pomarańczy" },
          { name: "Mojito", price: 26, description: "Biały rum, limonka, świeża mięta, cukier trzcinowy, woda gazowana" },
          { name: "Negroni", price: 28, description: "Gin, Campari, słodki wermut, skórka pomarańczy" },
          { name: "Tom Collins", price: 24, description: "Gin, sok z cytryny, syrop cukrowy, woda gazowana" }
        ]
      },
      {
        title: "Drinki autorskie",
        items: [
          { name: "Krośnieński Świt", price: 32, description: "Wódka infuzowana wiśnią, likier brzoskwiniowy, sok z żurawiny, rozmaryn" },
          { name: "Smolisty dym", price: 34, description: "Torfowa Single Malt Whiskey, syrop z palonego miodu, cytryna, imbir" },
          { name: "Ogród Galicji", price: 29, description: "Gin lubuski, likier z bzu czarnego, ogórek, mięta, tonic" },
          { name: "Płonąca Grusza", price: 31, description: "Calvados, syrop gruszkowy z cynamonem, sok z cytryny, dym rozmarynowy" }
        ]
      },
      {
        title: "Czyste alkohole (40ml)",
        items: [
          { name: "Wódka rzemieślnicza Krosno", price: 12, description: "Lokalna wódka żytnia o wybitnie gładkim profilu" },
          { name: "Single Malt 12YO", price: 26, description: "Szkocka whisky słodowa o nutach miodu i dębiny" },
          { name: "Burbon Premium", price: 18, description: "Klasyczny amerykański burbon kukurydziany" },
          { name: "Gin Botaniczny", price: 16, description: "Destylowany z dzikim jałowcem i ziołami karpackimi" },
          { name: "Rum Starzony 7 Lat", price: 19, description: "Ciemny rum o nutach wanilii, karmelu i przypraw korzennych" },
          { name: "Tequila Reposado", price: 18, description: "100% niebieska agawa, leżakowana w dębowych beczkach" }
        ]
      }
    ]
  },
  {
    id: "jedzenie",
    name: "Jedzenie",
    imagePlaceholder: "KATEGORIA JEDZENIE - Soczysty burger z frytkami oraz stek z grilla podany na desce z solą",
    image: "/images/cat-jedzenie.png",
    subsections: [
      {
        title: "Burgery wołowe",
        items: [
          { name: "Burger Klasyk", price: 34 },
          { name: "Burger Szefa (Bekon i Cheddar)", price: 38 },
          { name: "Ognisty Burger (Jalapeno & Sos Sriracha)", price: 37 },
          { name: "Burger Kozia Górka (Ser kozi, żurawina, rukola)", price: 39 },
          { name: "Burger Wegetariański (Szarpany chlebowiec)", price: 35 }
        ]
      },
      {
        title: "Steki i dania główne",
        items: [
          { name: "Stek z Antrykotu Sezonowany (300g)", price: 89 },
          { name: "Stek z Polędwicy Wołowej (220g)", price: 110 },
          { name: "Żeberka Wieprzowe w glazurze BBQ z piwa", price: 54 },
          { name: "Pieczone Skrzydełka Buffalo (8 szt.)", price: 29 },
          { name: "Chrupiący Sznycel Olbrzym z frytkami i cytryną", price: 42 }
        ]
      },
      {
        title: "Przekąski do piwa",
        items: [
          { name: "Chrupiące Krążki Cebulowe z sosem czosnkowym", price: 19 },
          { name: "Frytki Belgijskie z sosem truflowym", price: 17 },
          { name: "Krokiety Serowo-Jalapeno (6 szt.)", price: 22 },
          { name: "Deska Przekąsek (Sery regionalne, wędliny, pikle, precle)", price: 59 }
        ]
      }
    ]
  },
  {
    id: "pizza-napoje",
    name: "Pizza & Napoje",
    imagePlaceholder: "KATEGORIA PIZZA - Piec opalany drewnem, rumiana pizza napoletana z bąblami i świeżą bazylią",
    image: "/images/cat-pizza.png",
    subsections: [
      {
        title: "Pizza rzemieślnicza (32cm)",
        items: [
          { name: "Margherita (Sos pomidorowy, mozzarella, świeża bazylia)", price: 28 },
          { name: "Capricciosa (Mozzarella, szynka cotto, pieczarki)", price: 33 },
          { name: "Diavola (Salami piccante, jalapeno, czerwona cebula)", price: 34 },
          { name: "Quattro Formaggi (Mozzarella, gorgonzola, ser kozi, parmezan)", price: 36 },
          { name: "Swojska Karpatia (Kiełbasa, boczek, ogórek kiszony, cebula)", price: 38 },
          { name: "Wegetariańska (Cukinia, pomidorki koktajlowe, oliwki, rukola)", price: 32 }
        ]
      },
      {
        title: "Napoje bezalkoholowe i kawy",
        items: [
          { name: "Domowa Lemoniada Cytrynowo-Miętowa 0.4L", price: 14 },
          { name: "Sok Świeżo Wyciskany (Pomarańcza/Grejpfrut) 0.3L", price: 16 },
          { name: "Pepsi / Pepsi Max / Mirinda / 7Up 0.33L", price: 9 },
          { name: "Sok Owocowy (Jabłko, Czarna Porzeczka) 0.3L", price: 8 },
          { name: "Woda mineralna (Niegazowana/Gazowana) 0.3L", price: 7 },
          { name: "Espresso", price: 8 },
          { name: "Druga Kawa Czarna (Americano)", price: 11 },
          { name: "Cappuccino", price: 13 },
          { name: "Latte Macchiato", price: 14 }
        ]
      }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    author: "Tomasz G.",
    text: "Najlepsze rzemieślnicze piwo w Krośnie! Klimat jest niesamowity, a burgery to mistrzostwo świata. Burger Szefa po prostu rozpływa się w ustach. Zawsze wracam ze znajomymi.",
    rating: 5,
    source: "Opinia z Google"
  },
  {
    id: 2,
    author: "Katarzyna W.",
    text: "Ogródek letni to absolutne cudo w letnie wieczory. Oświetlenie robi genialną atmosferę, drinki autorskie pyszne, a pizza rzemieślnicza smakuje jak z najlepszej włoskiej pizzerii.",
    rating: 5,
    source: "Opinia z Facebooka"
  },
  {
    id: 3,
    author: "Michał R.",
    text: "Ciemny, elegancki klimat idealny na wieczorne wyjście. Obsługa niesamowicie pomocna, znają się na piwie i potrafią świetnie doradzić. Wybór piw rzemieślniczych na najwyższym poziomie.",
    rating: 5,
    source: "Opinia z Google"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: 1, title: "Wnętrze pubu - widok na miedziany bar", placeholderText: "GALERIA 1 - Wnętrze piwiarni, przytulne ciepłe światło żarówkowe, stylowe ciemne drewno i miedziane akcenty baru" },
  { id: 2, title: "Nalewaki rzemieślnicze", placeholderText: "GALERIA 2 - Zbliżenie na rzemieślnicze nalewaki kranowe z logotypami lokalnych browarów rzemieślniczych" },
  { id: 3, title: "Nasz słynny Burger Szefa", placeholderText: "GALERIA 3 - Idealnie wysmażony Burger Szefa z ciągnącym się serem cheddar i chrupiącym bekonem na czarnej desce" },
  { id: 4, title: "Sezonowany Stek z Antrykotu", placeholderText: "GALERIA 4 - Soczysty stek wołowy z grilla z gałązką rozmarynu, posypany gruboziarnistą solą i pieprzem" },
  { id: 5, title: "Nasz letni ogródek", placeholderText: "GALERIA 5 - Letni ogródek wieczorem, nastrojowe girlandy świetlne wiszące nad drewnianymi ławami wśród zieleni" },
  { id: 6, title: "Wyśmienite autorskie drinki", placeholderText: "GALERIA 6 - Zestaw autorskich drinków w kryształowych szklankach z suchym lodem i świeżymi ziołami na barze" }
];

export interface HeroImage {
  src: string;
  alt: string;
}

export const heroImages: HeroImage[] = [
  { src: "/images/hero-1.png", alt: "Klimatyczne wnętrze Piwiarni Krosno" },
  { src: "/images/hero-2.png", alt: "Zimne piwo rzemieślnicze z kremową pianą" },
  { src: "/images/hero-3.png", alt: "Soczysty stek z grilla" },
  { src: "/images/hero-4.png", alt: "Rzemieślnicza pizza z pieca" },
  { src: "/images/hero-5.png", alt: "Letni ogródek piwny po zmroku" }
];

export const featuredBeersList = [
  { name: "Krosno Jasne Pełne", type: "Klasyczny Jasny Lager, rześki i pijalny", price: "PLN 14" },
  { name: "Bieszczadzki Ciemny Lager", type: "Nuty karmelu, palonego słodu i czekolady", price: "PLN 16" },
  { name: "Rzemieślniczy IPA z beczki", type: "Intensywny aromat chmielowy, owoce tropikalne", price: "PLN 18" },
  { name: "Pszeniczny Klasyk", type: "Bananowo-goździkowy aromat, naturalnie niefiltrowany", price: "PLN 16" },
  { name: "Double IPA Citra (Butelka)", type: "Potężna dawka chmielu Citra, wyrazista goryczka", price: "PLN 21" },
  { name: "Stout Czekoladowo-Owsiany (Butelka)", type: "Aksamitny Stout z dodatkiem ziaren kakaowca", price: "PLN 19" },
  { name: "Hazy APA (Butelka)", type: "Mętne, soczyste pale ale o ultra-owocowym zapachu", price: "PLN 18" },
  { name: "Mango APA 0.0% (Butelka)", type: "Bezalkoholowe, tropikalne i nieziemsko orzeźwiające", price: "PLN 15" }
];

export const teaserFoodItems = [
  {
    name: "Burger Szefa",
    price: "PLN 38",
    category: "Burgery",
    placeholderText: "TEASER JEDZENIE 1 - Soczysty Burger Szefa (100% wołowina, cheddar, bekon, sos autorski, domowa bułka)"
  },
  {
    name: "Stek z Antrykotu",
    price: "PLN 89",
    category: "Steki",
    placeholderText: "TEASER JEDZENIE 2 - Sezonowany Stek z Antrykotu z masłem czosnkowym na rozgrzanej żeliwnej patelni"
  },
  {
    name: "Pizza Diavola",
    price: "PLN 34",
    category: "Pizza",
    placeholderText: "TEASER JEDZENIE 3 - Włoska pizza Diavola ze świeżą mozzarellą, pikantnym salami piccante i jalapeno"
  },
  {
    name: "Deska Przekąsek",
    price: "PLN 59",
    category: "Przekąski",
    placeholderText: "TEASER JEDZENIE 4 - Obfita deska lokalnych serów, rzemieślniczych wędlin, pikli i ciepłych precli"
  }
];
