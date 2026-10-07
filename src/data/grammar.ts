// Slovak tenses: theory, controlled fill exercises, identify tense.
// Для каждого времени показано, как образуются 3 типа предложений:
// утверждение (+), отрицание (−) и вопрос (?) — с формулой и примером.

export interface TenseExample {
  en: string;
  ru: string;
}

export interface TenseForm {
  label: string; // Утверждение / Отрицание / Вопрос
  icon: string; // эмодзи формы
  formula: string; // как образуется именно эта форма
  example: TenseExample;
}

export interface TenseForms {
  affirmative: TenseForm; // утверждение (+)
  negative: TenseForm; // отрицание (−)
  question: TenseForm; // вопрос (?)
}

export interface TenseTopic {
  id: string;
  name: string; // Slovak name
  nameRu: string; // Russian name
  formula: string; // краткая общая формула
  usage: string; // when to use (RU)
  markers: string; // signal words
  forms: TenseForms; // как образуются +/−/? с примерами
  examples: TenseExample[]; // [утверждение, отрицание, вопрос] — для других экранов
}

export type ExerciseKind = "fill" | "identify" | "choose";

export interface GrammarExercise {
  id: number;
  tenseId: string;
  // fill: choose the correct form in a blank. choose: general question.
  // "identify": определить, какое это время (варианты — названия времён).
  kind?: ExerciseKind;
  sentence: string; // для "fill" содержит "___"; для "identify" — целое предложение
  hint?: string; // base verb / Russian hint
  options: string[];
  answer: number; // index of correct option
  explanation: string; // RU explanation
}

export const tenses: TenseTopic[] = [
  {
    "id": "present",
    "name": "Prítomný čas",
    "nameRu": "Настоящее время",
    "formula": "Личная форма: čítam / robím / pracujem",
    "usage": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее.",
    "markers": "teraz, dnes, každý deň, často",
    "forms": {
      "affirmative": {
        "label": "Утверждение",
        "icon": "✅",
        "formula": "Личная форма глагола",
        "example": {
          "en": "Som študent.",
          "ru": "Я студент."
        }
      },
      "negative": {
        "label": "Отрицание",
        "icon": "❌",
        "formula": "ne- + личная форма; byť: nie som / nie je",
        "example": {
          "en": "Nie som doma.",
          "ru": "Я не дома."
        }
      },
      "question": {
        "label": "Вопрос",
        "icon": "❓",
        "formula": "Вопросительное слово или вопросительная интонация",
        "example": {
          "en": "Ste študentka?",
          "ru": "Вы студентка?"
        }
      }
    },
    "examples": [
      {
        "en": "Som študent.",
        "ru": "Я студент."
      },
      {
        "en": "Nie som doma.",
        "ru": "Я не дома."
      },
      {
        "en": "Ste študentka?",
        "ru": "Вы студентка?"
      },
      {
        "en": "Anna číta knihu.",
        "ru": "Анна читает книгу."
      },
      {
        "en": "Každý deň študujem.",
        "ru": "Каждый день я учусь."
      },
      {
        "en": "Oni pracujú v škole.",
        "ru": "Они работают в школе."
      },
      {
        "en": "Dnes sa učím po slovensky.",
        "ru": "Сегодня я учу словацкий."
      },
      {
        "en": "Mám otázku.",
        "ru": "У меня вопрос."
      },
      {
        "en": "Nemáme čas.",
        "ru": "У нас нет времени."
      },
      {
        "en": "Kde bývate?",
        "ru": "Где вы живёте?"
      },
      {
        "en": "Pijem vodu.",
        "ru": "Я пью воду."
      },
      {
        "en": "Idem na prednášku.",
        "ru": "Я иду на лекцию."
      }
    ]
  },
  {
    "id": "past",
    "name": "Minulý čas",
    "nameRu": "Прошедшее время",
    "formula": "-l / -la / -lo / -li + som / si / sme / ste",
    "usage": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат.",
    "markers": "včera, minulý týždeň, pred rokom",
    "forms": {
      "affirmative": {
        "label": "Утверждение",
        "icon": "✅",
        "formula": "Форма на -l + вспомогательный глагол (1-е / 2-е лицо)",
        "example": {
          "en": "Včera som čítal knihu.",
          "ru": "Вчера я читал книгу."
        }
      },
      "negative": {
        "label": "Отрицание",
        "icon": "❌",
        "formula": "ne- у формы на -l: nečítal som",
        "example": {
          "en": "Včera som nepracovala.",
          "ru": "Вчера я не работала."
        }
      },
      "question": {
        "label": "Вопрос",
        "icon": "❓",
        "formula": "Та же прошедшая форма, вопросительная интонация",
        "example": {
          "en": "Boli ste doma?",
          "ru": "Вы были дома?"
        }
      }
    },
    "examples": [
      {
        "en": "Včera som čítal knihu.",
        "ru": "Вчера я читал книгу."
      },
      {
        "en": "Včera som nepracovala.",
        "ru": "Вчера я не работала."
      },
      {
        "en": "Boli ste doma?",
        "ru": "Вы были дома?"
      },
      {
        "en": "Anna čítala knihu.",
        "ru": "Анна читала книгу."
      },
      {
        "en": "My sme študovali v Bratislave.",
        "ru": "Мы учились в Братиславе."
      },
      {
        "en": "Oni pracovali v škole.",
        "ru": "Они работали в школе."
      },
      {
        "en": "Dnes som sa učil po slovensky.",
        "ru": "Сегодня я учил словацкий."
      },
      {
        "en": "Mal som otázku.",
        "ru": "У меня был вопрос."
      },
      {
        "en": "Nemali sme čas.",
        "ru": "У нас не было времени."
      },
      {
        "en": "Kde ste bývali?",
        "ru": "Где вы жили?"
      },
      {
        "en": "Pil som vodu.",
        "ru": "Я пил воду."
      },
      {
        "en": "Išiel som na prednášku.",
        "ru": "Я ходил на лекцию."
      }
    ]
  },
  {
    "id": "future",
    "name": "Budúci čas",
    "nameRu": "Будущее время",
    "formula": "budem + инфинитив / napíšem / pôjdem",
    "usage": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем.",
    "markers": "zajtra, budúci týždeň, o rok",
    "forms": {
      "affirmative": {
        "label": "Утверждение",
        "icon": "✅",
        "formula": "budem + инфинитив или личная форма совершенного вида",
        "example": {
          "en": "Zajtra budem čítať knihu.",
          "ru": "Завтра я буду читать книгу."
        }
      },
      "negative": {
        "label": "Отрицание",
        "icon": "❌",
        "formula": "nebudem + инфинитив / nenapíšem / nepôjdem",
        "example": {
          "en": "Zajtra nebudem pracovať.",
          "ru": "Завтра я не буду работать."
        }
      },
      "question": {
        "label": "Вопрос",
        "icon": "❓",
        "formula": "Будущая форма и вопросительная интонация",
        "example": {
          "en": "Budete doma?",
          "ru": "Вы будете дома?"
        }
      }
    },
    "examples": [
      {
        "en": "Zajtra budem čítať knihu.",
        "ru": "Завтра я буду читать книгу."
      },
      {
        "en": "Zajtra nebudem pracovať.",
        "ru": "Завтра я не буду работать."
      },
      {
        "en": "Budete doma?",
        "ru": "Вы будете дома?"
      },
      {
        "en": "Anna prečíta knihu.",
        "ru": "Анна прочитает книгу."
      },
      {
        "en": "Budeme študovať v Bratislave.",
        "ru": "Мы будем учиться в Братиславе."
      },
      {
        "en": "Oni budú pracovať v škole.",
        "ru": "Они будут работать в школе."
      },
      {
        "en": "Zajtra sa budem učiť po slovensky.",
        "ru": "Завтра я буду учить словацкий."
      },
      {
        "en": "Napíšem vám zajtra.",
        "ru": "Я напишу вам завтра."
      },
      {
        "en": "Nebudeme mať čas.",
        "ru": "У нас не будет времени."
      },
      {
        "en": "Kde budete bývať?",
        "ru": "Где вы будете жить?"
      },
      {
        "en": "Budem piť vodu.",
        "ru": "Я буду пить воду."
      },
      {
        "en": "Pôjdem na prednášku.",
        "ru": "Я пойду на лекцию."
      }
    ]
  }
];
export const grammarExercises: GrammarExercise[] = [
  {
    "id": 5000,
    "tenseId": "present",
    "kind": "choose",
    "sentence": "Ja ___ v knižnici. (pracovať)",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "pracovám",
      "pracujem",
      "pracujú"
    ],
    "answer": 1,
    "explanation": "Правильный ответ: pracujem. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5001,
    "tenseId": "present",
    "kind": "choose",
    "sentence": "Oni ___ knihu. (čítať)",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "čítam",
      "čítajú",
      "číta"
    ],
    "answer": 1,
    "explanation": "Правильный ответ: čítajú. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5002,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Ja ___ knihu.",
    "options": [
      "čítam",
      "čítaš",
      "čítajú"
    ],
    "answer": 0,
    "hint": "čítať",
    "explanation": "Нужная форма глагола čítať: čítam."
  },
  {
    "id": 5003,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Ty ___ knihu.",
    "options": [
      "čítaš",
      "čítam",
      "čítate"
    ],
    "answer": 0,
    "hint": "čítať",
    "explanation": "Нужная форма глагола čítať: čítaš."
  },
  {
    "id": 5004,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "My ___ knihu.",
    "options": [
      "čítame",
      "číta",
      "čítajú"
    ],
    "answer": 0,
    "hint": "čítať",
    "explanation": "Нужная форма глагола čítať: čítame."
  },
  {
    "id": 5005,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Oni ___ knihu.",
    "options": [
      "čítajú",
      "čítam",
      "čítate"
    ],
    "answer": 0,
    "hint": "čítať",
    "explanation": "Нужная форма глагола čítať: čítajú."
  },
  {
    "id": 5006,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Ja ___ v škole.",
    "options": [
      "pracujem",
      "pracovám",
      "pracujú"
    ],
    "answer": 0,
    "hint": "pracovať",
    "explanation": "Нужная форма глагола pracovať: pracujem."
  },
  {
    "id": 5007,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Vy ___ v škole.",
    "options": [
      "pracujete",
      "pracujem",
      "pracuje"
    ],
    "answer": 0,
    "hint": "pracovať",
    "explanation": "Нужная форма глагола pracovať: pracujete."
  },
  {
    "id": 5008,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Ja ___ úlohu.",
    "options": [
      "robím",
      "robíš",
      "robia"
    ],
    "answer": 0,
    "hint": "robiť",
    "explanation": "Нужная форма глагола robiť: robím."
  },
  {
    "id": 5009,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Oni ___ úlohu.",
    "options": [
      "robia",
      "robím",
      "robíte"
    ],
    "answer": 0,
    "hint": "robiť",
    "explanation": "Нужная форма глагола robiť: robia."
  },
  {
    "id": 5010,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Ja ___ domov.",
    "options": [
      "idem",
      "ideš",
      "idú"
    ],
    "answer": 0,
    "hint": "ísť",
    "explanation": "Нужная форма глагола ísť: idem."
  },
  {
    "id": 5011,
    "tenseId": "present",
    "kind": "fill",
    "sentence": "Oni ___ vodu.",
    "options": [
      "pijú",
      "pijem",
      "pije"
    ],
    "answer": 0,
    "hint": "piť",
    "explanation": "Нужная форма глагола piť: pijú."
  },
  {
    "id": 5012,
    "tenseId": "past",
    "kind": "choose",
    "sentence": "Она читала",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "Čítala je.",
      "Čítala.",
      "Čítal."
    ],
    "answer": 1,
    "explanation": "Правильный ответ: Čítala.. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5013,
    "tenseId": "past",
    "kind": "choose",
    "sentence": "My ___ doma. (были)",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "som bol",
      "sme boli",
      "sú boli"
    ],
    "answer": 1,
    "explanation": "Правильный ответ: sme boli. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5014,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Ja ___ knihu. (мужчина, вчера)",
    "options": [
      "som čítal",
      "je čítal",
      "čítal sú"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма som čítal; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5015,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Ja ___ knihu. (женщина, вчера)",
    "options": [
      "som čítala",
      "som čítal",
      "je čítala"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма som čítala; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5016,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Ona ___ knihu včera.",
    "options": [
      "čítala",
      "je čítala",
      "čítal"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма čítala; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5017,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "On ___ doma včera.",
    "options": [
      "bol",
      "je bol",
      "som bol"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма bol; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5018,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "My ___ doma včera.",
    "options": [
      "sme boli",
      "som bol",
      "sú boli"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма sme boli; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5019,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Vy ___ knihu včera.",
    "options": [
      "ste čítali",
      "si čítal",
      "sú čítali"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма ste čítali; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5020,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Včera som ___ do školy.",
    "options": [
      "išiel",
      "idem",
      "ísť"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма išiel; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5021,
    "tenseId": "past",
    "kind": "fill",
    "sentence": "Oni ___ včera.",
    "options": [
      "pracovali",
      "sú pracovali",
      "som pracoval"
    ],
    "answer": 0,
    "hint": "Прошедшее время",
    "explanation": "Нужна форма pracovali; в 3-м лице вспомогательное je / sú не добавляют."
  },
  {
    "id": 5022,
    "tenseId": "future",
    "kind": "choose",
    "sentence": "Я буду читать",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "Budem čítam.",
      "Budem čítať.",
      "Budem prečítať."
    ],
    "answer": 1,
    "explanation": "Правильный ответ: Budem čítať.. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5023,
    "tenseId": "future",
    "kind": "choose",
    "sentence": "Будущее ísť, ja",
    "hint": "Проверь правило перед ответом.",
    "options": [
      "budem ísť",
      "pôjdem",
      "išiel"
    ],
    "answer": 1,
    "explanation": "Правильный ответ: pôjdem. Объяснение — в разделе «Правила»."
  },
  {
    "id": 5024,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Ja ___ čítať zajtra.",
    "options": [
      "budem",
      "budeš",
      "budú"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма budem. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5025,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Ty ___ pracovať zajtra.",
    "options": [
      "budeš",
      "budem",
      "budete"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма budeš. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5026,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "My ___ študovať zajtra.",
    "options": [
      "budeme",
      "budem",
      "budú"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма budeme. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5027,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Oni ___ pracovať zajtra.",
    "options": [
      "budú",
      "bude",
      "budeme"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма budú. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5028,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Zajtra ___ do školy. (ja)",
    "options": [
      "pôjdem",
      "išiel",
      "budem idem"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма pôjdem. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5029,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Zajtra budem ___.",
    "options": [
      "čítať",
      "čítam",
      "čítal"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма čítať. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5030,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Ja ___ list zajtra. (напишу)",
    "options": [
      "napíšem",
      "budem napísať",
      "napísal"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма napíšem. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5031,
    "tenseId": "future",
    "kind": "fill",
    "sentence": "Zajtra ___ pracovať. (не буду)",
    "options": [
      "nebudem",
      "nie budem",
      "nebudú"
    ],
    "answer": 0,
    "hint": "Будущее время",
    "explanation": "Здесь нужна форма nebudem. Несовершенный вид: budem + инфинитив; совершенный: простая форма будущего."
  },
  {
    "id": 5032,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Som študent.",
    "hint": "Я студент.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5033,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Nie som doma.",
    "hint": "Я не дома.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5034,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Ste študentka?",
    "hint": "Вы студентка?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5035,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Anna číta knihu.",
    "hint": "Анна читает книгу.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5036,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Každý deň študujem.",
    "hint": "Каждый день я учусь.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5037,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Oni pracujú v škole.",
    "hint": "Они работают в школе.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5038,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Dnes sa učím po slovensky.",
    "hint": "Сегодня я учу словацкий.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5039,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Mám otázku.",
    "hint": "У меня вопрос.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5040,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Nemáme čas.",
    "hint": "У нас нет времени.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5041,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Kde bývate?",
    "hint": "Где вы живёте?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5042,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Pijem vodu.",
    "hint": "Я пью воду.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5043,
    "tenseId": "present",
    "kind": "identify",
    "sentence": "Idem na prednášku.",
    "hint": "Я иду на лекцию.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 0,
    "explanation": "Сейчас, привычки, регулярные действия. Совершенные глаголы в форме типа napíšem обычно обозначают будущее."
  },
  {
    "id": 5044,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Včera som čítal knihu.",
    "hint": "Вчера я читал книгу.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5045,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Včera som nepracovala.",
    "hint": "Вчера я не работала.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5046,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Boli ste doma?",
    "hint": "Вы были дома?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5047,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Anna čítala knihu.",
    "hint": "Анна читала книгу.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5048,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "My sme študovali v Bratislave.",
    "hint": "Мы учились в Братиславе.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5049,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Oni pracovali v škole.",
    "hint": "Они работали в школе.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5050,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Dnes som sa učil po slovensky.",
    "hint": "Сегодня я учил словацкий.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5051,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Mal som otázku.",
    "hint": "У меня был вопрос.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5052,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Nemali sme čas.",
    "hint": "У нас не было времени.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5053,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Kde ste bývali?",
    "hint": "Где вы жили?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5054,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Pil som vodu.",
    "hint": "Я пил воду.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5055,
    "tenseId": "past",
    "kind": "identify",
    "sentence": "Išiel som na prednášku.",
    "hint": "Я ходил на лекцию.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 1,
    "explanation": "Прошлые действия. Форма зависит от рода и числа. В 3-м лице вспомогательные je / sú не добавляют. Вид показывает процесс или результат."
  },
  {
    "id": 5056,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Zajtra budem čítať knihu.",
    "hint": "Завтра я буду читать книгу.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5057,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Zajtra nebudem pracovať.",
    "hint": "Завтра я не буду работать.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5058,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Budete doma?",
    "hint": "Вы будете дома?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5059,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Anna prečíta knihu.",
    "hint": "Анна прочитает книгу.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5060,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Budeme študovať v Bratislave.",
    "hint": "Мы будем учиться в Братиславе.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5061,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Oni budú pracovať v škole.",
    "hint": "Они будут работать в школе.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5062,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Zajtra sa budem učiť po slovensky.",
    "hint": "Завтра я буду учить словацкий.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5063,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Napíšem vám zajtra.",
    "hint": "Я напишу вам завтра.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5064,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Nebudeme mať čas.",
    "hint": "У нас не будет времени.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5065,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Kde budete bývať?",
    "hint": "Где вы будете жить?",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5066,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Budem piť vodu.",
    "hint": "Я буду пить воду.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  },
  {
    "id": 5067,
    "tenseId": "future",
    "kind": "identify",
    "sentence": "Pôjdem na prednášku.",
    "hint": "Я пойду на лекцию.",
    "options": [
      "Настоящее время",
      "Прошедшее время",
      "Будущее время"
    ],
    "answer": 2,
    "explanation": "Несовершенный вид: budem čítať. Совершенный: prečítam. ísť имеет особую форму pôjdem. Не использовать budem prečítať в обычном будущем."
  }
];
