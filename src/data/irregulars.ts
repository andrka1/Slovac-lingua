export interface IrregularVerb {id:string;base:string;past:string;participle:string;ru:string;}
export interface IrregularPlural {id:string;singular:string;plural:string;ru:string;}
// Legacy field names retained for original components: past = ja form, participle = male l-form.
export const irregularVerbs: IrregularVerb[] = [
  {
    "id": "v0",
    "base": "byť",
    "past": "som",
    "participle": "bol",
    "ru": "быть"
  },
  {
    "id": "v1",
    "base": "mať",
    "past": "mám",
    "participle": "mal",
    "ru": "иметь"
  },
  {
    "id": "v2",
    "base": "ísť",
    "past": "idem",
    "participle": "išiel",
    "ru": "идти"
  },
  {
    "id": "v3",
    "base": "prísť",
    "past": "prídem",
    "participle": "prišiel",
    "ru": "прийти"
  },
  {
    "id": "v4",
    "base": "odísť",
    "past": "odídem",
    "participle": "odišiel",
    "ru": "уйти"
  },
  {
    "id": "v5",
    "base": "jesť",
    "past": "jem",
    "participle": "jedol",
    "ru": "есть"
  },
  {
    "id": "v6",
    "base": "piť",
    "past": "pijem",
    "participle": "pil",
    "ru": "пить"
  },
  {
    "id": "v7",
    "base": "spať",
    "past": "spím",
    "participle": "spal",
    "ru": "спать"
  },
  {
    "id": "v8",
    "base": "písať",
    "past": "píšem",
    "participle": "písal",
    "ru": "писать"
  },
  {
    "id": "v9",
    "base": "čítať",
    "past": "čítam",
    "participle": "čítal",
    "ru": "читать"
  },
  {
    "id": "v10",
    "base": "môcť",
    "past": "môžem",
    "participle": "mohol",
    "ru": "мочь"
  },
  {
    "id": "v11",
    "base": "chcieť",
    "past": "chcem",
    "participle": "chcel",
    "ru": "хотеть"
  },
  {
    "id": "v12",
    "base": "vedieť",
    "past": "viem",
    "participle": "vedel",
    "ru": "знать; уметь"
  },
  {
    "id": "v13",
    "base": "vidieť",
    "past": "vidím",
    "participle": "videl",
    "ru": "видеть"
  },
  {
    "id": "v14",
    "base": "rozumieť",
    "past": "rozumiem",
    "participle": "rozumel",
    "ru": "понимать"
  },
  {
    "id": "v15",
    "base": "niesť",
    "past": "nesiem",
    "participle": "niesol",
    "ru": "нести"
  },
  {
    "id": "v16",
    "base": "priniesť",
    "past": "prinesiem",
    "participle": "priniesol",
    "ru": "принести"
  },
  {
    "id": "v17",
    "base": "nájsť",
    "past": "nájdem",
    "participle": "našiel",
    "ru": "найти"
  },
  {
    "id": "v18",
    "base": "brať",
    "past": "beriem",
    "participle": "bral",
    "ru": "брать"
  },
  {
    "id": "v19",
    "base": "vziať",
    "past": "vezmem",
    "participle": "vzal",
    "ru": "взять"
  },
  {
    "id": "v20",
    "base": "dať",
    "past": "dám",
    "participle": "dal",
    "ru": "дать"
  },
  {
    "id": "v21",
    "base": "dávať",
    "past": "dávam",
    "participle": "dával",
    "ru": "давать"
  },
  {
    "id": "v22",
    "base": "robiť",
    "past": "robím",
    "participle": "robil",
    "ru": "делать"
  },
  {
    "id": "v23",
    "base": "pracovať",
    "past": "pracujem",
    "participle": "pracoval",
    "ru": "работать"
  },
  {
    "id": "v24",
    "base": "študovať",
    "past": "študujem",
    "participle": "študoval",
    "ru": "учиться в вузе"
  },
  {
    "id": "v25",
    "base": "hovoriť",
    "past": "hovorím",
    "participle": "hovoril",
    "ru": "говорить"
  },
  {
    "id": "v26",
    "base": "povedať",
    "past": "poviem",
    "participle": "povedal",
    "ru": "сказать"
  },
  {
    "id": "v27",
    "base": "kúpiť",
    "past": "kúpim",
    "participle": "kúpil",
    "ru": "купить"
  },
  {
    "id": "v28",
    "base": "musieť",
    "past": "musím",
    "participle": "musel",
    "ru": "быть должным"
  },
  {
    "id": "v29",
    "base": "smieť",
    "past": "smiem",
    "participle": "smel",
    "ru": "иметь разрешение"
  }
];
export const irregularPlurals: IrregularPlural[] = [
  {
    "id": "p0",
    "singular": "dieťa",
    "plural": "deti",
    "ru": "ребёнок → дети"
  },
  {
    "id": "p1",
    "singular": "človek",
    "plural": "ľudia",
    "ru": "человек → люди"
  },
  {
    "id": "p2",
    "singular": "oko",
    "plural": "oči",
    "ru": "глаз → глаза"
  },
  {
    "id": "p3",
    "singular": "ucho",
    "plural": "uši",
    "ru": "ухо → уши"
  },
  {
    "id": "p4",
    "singular": "pes",
    "plural": "psy",
    "ru": "собака → собаки"
  },
  {
    "id": "p5",
    "singular": "otec",
    "plural": "otcovia",
    "ru": "отец → отцы"
  },
  {
    "id": "p6",
    "singular": "brat",
    "plural": "bratia",
    "ru": "брат → братья"
  },
  {
    "id": "p7",
    "singular": "priateľ",
    "plural": "priatelia",
    "ru": "друг → друзья"
  },
  {
    "id": "p8",
    "singular": "deň",
    "plural": "dni",
    "ru": "день → дни"
  },
  {
    "id": "p9",
    "singular": "týždeň",
    "plural": "týždne",
    "ru": "неделя → недели"
  }
];
