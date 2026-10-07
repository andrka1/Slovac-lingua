import type { GrammarExercise } from "./grammar.ts";
export interface TopicRule { title:string; body:string; examples?:{en:string;ru:string}[]; headers?:string[]; rows?:string[][]; }
export interface GrammarTopic {id:string;title:string;emoji:string;color:string;intro:string;rules:TopicRule[];exercises:GrammarExercise[];}
export const grammarTopics: GrammarTopic[] = [
  {
    "id": "sounds",
    "title": "Буквы, звуки и ударение",
    "emoji": "🔤",
    "color": "from-blue-500 to-blue-600",
    "intro": "A0 · правила и упражнения",
    "rules": [
      {
        "title": "Как пользоваться транскрипцией",
        "body": "Русская запись — приближение, а не фонетический стандарт. Двоеточие после звука означает долготу: á → а:, í → и:. Долгота не обозначает ударение. Ударение обычно на первом слоге; с односложным предлогом ударение часто переносится на предлог. Читайте словацкое написание вместе с подсказкой.",
        "examples": [
          {
            "en": "Dobrý deň.",
            "ru": "Добрый день."
          },
          {
            "en": "Prosím.",
            "ru": "Пожалуйста."
          },
          {
            "en": "Ďakujem.",
            "ru": "Спасибо."
          }
        ]
      },
      {
        "title": "Не произносите по-русски",
        "body": "Безударные o и a не превращаются в «а» и «ъ». Y и i звучат одинаково — как «и». H — звонкий гортанный звук [ɦ], не русское г и не глухое х. Ch — один звук «х». Ľ, ď, ť, ň мягкие. В сочетаниях de, te, ne, le, di, ti, ni, li согласный часто мягкий; в заимствованиях и некоторых формах есть исключения: ten, jeden, jedenásť. Транскрипция приложения не заменяет работу с носителем."
      },
      {
        "title": "Дифтонги и слоговые согласные",
        "body": "Ia, ie, iu произносятся слитно, с коротким неслоговым и. Ô — «уо» в одном слоге: stôl. R и l могут образовывать слог: prst, vlk. Ŕ и ĺ — долгие слоговые согласные. Не вставляйте полноценную гласную между ними."
      },
      {
        "title": "Оглушение и ритмический закон",
        "body": "Парные звонкие согласные в конце слова обычно оглушаются: dub звучит как «дуп». Перед согласными возможны уподобления по звонкости. После долгого слога следующий слог часто сокращается: krásny, не krásný. Есть исключения, поэтому проверяйте форму, а не применяйте правило механически."
      }
    ],
    "exercises": [
      {
        "id": 1,
        "tenseId": "sounds",
        "kind": "choose",
        "sentence": "Какая буква читается как «ц»?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "c",
          "č",
          "s"
        ],
        "answer": 0,
        "explanation": "Правильный ответ: c. Объяснение — в разделе «Правила»."
      },
      {
        "id": 2,
        "tenseId": "sounds",
        "kind": "choose",
        "sentence": "Что означает á?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Ударный а",
          "Долгий а",
          "Мягкий а"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Долгий а. Объяснение — в разделе «Правила»."
      },
      {
        "id": 3,
        "tenseId": "sounds",
        "kind": "choose",
        "sentence": "Где обычно ударение?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "На последнем слоге",
          "На первом слоге",
          "Только на á"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: На первом слоге. Объяснение — в разделе «Правила»."
      },
      {
        "id": 247,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Ch sa číta ako ___.",
        "options": [
          "х",
          "ч",
          "ш"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: х."
      },
      {
        "id": 248,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Š sa číta ako ___.",
        "options": [
          "ш",
          "с",
          "ж"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: ш."
      },
      {
        "id": 249,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Č sa číta ako ___.",
        "options": [
          "ч",
          "ц",
          "к"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: ч."
      },
      {
        "id": 250,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Y sa číta ako ___.",
        "options": [
          "и",
          "ы",
          "й"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: и."
      },
      {
        "id": 251,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Ô sa číta ako ___.",
        "options": [
          "уо",
          "о:",
          "а"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: уо."
      },
      {
        "id": 252,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Á označuje ___.",
        "options": [
          "долгий а",
          "ударный а",
          "мягкий а"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: долгий а."
      },
      {
        "id": 253,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Dz je ___.",
        "options": [
          "одна буква, звук дз",
          "две отдельные буквы д и з",
          "звук ж"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: одна буква, звук дз."
      },
      {
        "id": 254,
        "tenseId": "sounds",
        "kind": "fill",
        "sentence": "Prízvuk je zvyčajne ___.",
        "options": [
          "на первом слоге",
          "на последнем слоге",
          "на долгой гласной"
        ],
        "answer": 0,
        "hint": "Буквы и чтение",
        "explanation": "Сверь звук с таблицей алфавита. Правильный ответ: на первом слоге."
      }
    ]
  },
  {
    "id": "greetings",
    "title": "Приветствие и знакомство",
    "emoji": "👋",
    "color": "from-cyan-500 to-blue-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Вежливо или неформально",
        "body": "Ahoj — другу или ровеснику. Dobrý deň — преподавателю, сотруднику учреждения, незнакомому взрослому. Dovidenia — вежливое прощание. Prosím используют при просьбе, в ответ на спасибо и когда хотят переспросить.",
        "examples": [
          {
            "en": "Dobrý deň, volám sa Anna.",
            "ru": "Добрый день, меня зовут Анна."
          },
          {
            "en": "Som študent.",
            "ru": "Я студент."
          }
        ]
      },
      {
        "title": "Мини-диалог",
        "headers": [
          "Словацкий",
          "Русский"
        ],
        "rows": [
          [
            "Ako sa voláš?",
            "Как тебя зовут?"
          ],
          [
            "Ako sa voláte?",
            "Как вас зовут?"
          ],
          [
            "Volám sa Anna.",
            "Меня зовут Анна."
          ],
          [
            "Teší ma.",
            "Приятно познакомиться."
          ],
          [
            "Odkiaľ si?",
            "Откуда ты?"
          ],
          [
            "Som z Ruska.",
            "Я из России."
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Первая самостоятельная речь",
        "body": "Подставьте своё имя в Volám sa… Затем скажите Som študent / Som študentka. Для переспроса: Nerozumiem. Môžete to zopakovať? — Не понимаю. Можете повторить?"
      }
    ],
    "exercises": [
      {
        "id": 4,
        "tenseId": "greetings",
        "kind": "choose",
        "sentence": "Как обратиться к преподавателю?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Ahoj",
          "Dobrý deň",
          "Čau"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Dobrý deň. Объяснение — в разделе «Правила»."
      },
      {
        "id": 5,
        "tenseId": "greetings",
        "kind": "choose",
        "sentence": "Меня зовут…",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Voláš sa",
          "Volám sa",
          "Volajú sa"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Volám sa. Объяснение — в разделе «Правила»."
      },
      {
        "id": 61,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ sa voláte?",
        "options": [
          "Ako",
          "Kde",
          "Koľko"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Ako»."
      },
      {
        "id": 62,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ sa Anna.",
        "options": [
          "Volám",
          "Voláš",
          "Volajú"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Volám»."
      },
      {
        "id": 63,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "Dobrý ___.",
        "options": [
          "deň",
          "dňa",
          "dňom"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «deň»."
      },
      {
        "id": 64,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ za pomoc.",
        "options": [
          "Ďakujem",
          "Ďakuješ",
          "Ďakujú"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Ďakujem»."
      },
      {
        "id": 65,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ to zopakovať? (обращение на вы)",
        "options": [
          "Môžete",
          "Môžeš",
          "Môžu"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Môžete»."
      },
      {
        "id": 66,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "Som ___ Ruska.",
        "options": [
          "z",
          "do",
          "na"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «z»."
      },
      {
        "id": 67,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ sa voláš?",
        "options": [
          "Ako",
          "Kam",
          "Koľko"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Ako»."
      },
      {
        "id": 68,
        "tenseId": "greetings",
        "kind": "fill",
        "sentence": "___ deň, pán profesor.",
        "options": [
          "Dobrý",
          "Dobrá",
          "Dobré"
        ],
        "answer": 0,
        "hint": "Приветствие / знакомство",
        "explanation": "Здесь подходит «Dobrý»."
      }
    ]
  },
  {
    "id": "byt",
    "title": "Местоимения и глагол byť",
    "emoji": "🙋",
    "color": "from-violet-500 to-purple-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "«Быть» нельзя пропускать",
        "body": "В словацком настоящем времени связка нужна: Som študent. — Я студент. Местоимение ja часто опускают, потому что лицо видно по форме som.",
        "examples": [
          {
            "en": "Som doma.",
            "ru": "Я дома."
          },
          {
            "en": "Nie sme v škole.",
            "ru": "Мы не в школе."
          },
          {
            "en": "Ste študentka?",
            "ru": "Вы студентка?"
          }
        ]
      },
      {
        "title": "Настоящее время",
        "headers": [
          "Лицо",
          "byť",
          "Перевод"
        ],
        "rows": [
          [
            "ja",
            "som",
            "я есть"
          ],
          [
            "ty",
            "si",
            "ты есть"
          ],
          [
            "on / ona / ono",
            "je",
            "он / она / оно есть"
          ],
          [
            "my",
            "sme",
            "мы есть"
          ],
          [
            "vy",
            "ste",
            "вы есть"
          ],
          [
            "oni / ony",
            "sú",
            "они есть"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Отрицание и вопрос",
        "body": "Nie som doma. Nie si doma. On nie je doma. Nie sme / nie ste / nie sú. Вопрос можно строить интонацией: Ste študent? В вопросах словацкий не требует вспомогательного do, как английский. Oni используют для группы мужчин или смешанной группы людей, ony — для женщин и неодушевлённых предметов."
      }
    ],
    "exercises": [
      {
        "id": 6,
        "tenseId": "byt",
        "kind": "choose",
        "sentence": "My ___ študenti.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "som",
          "sme",
          "sú"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: sme. Объяснение — в разделе «Правила»."
      },
      {
        "id": 7,
        "tenseId": "byt",
        "kind": "choose",
        "sentence": "On ___ doma.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "si",
          "je",
          "ste"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: je. Объяснение — в разделе «Правила»."
      },
      {
        "id": 8,
        "tenseId": "byt",
        "kind": "choose",
        "sentence": "Я не дома.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Ne som doma.",
          "Nie som doma.",
          "Som nie doma."
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Nie som doma.. Объяснение — в разделе «Правила»."
      },
      {
        "id": 53,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "ja ___ doma.",
        "options": [
          "som",
          "si",
          "je"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «ja»: som."
      },
      {
        "id": 54,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "ty ___ doma.",
        "options": [
          "si",
          "som",
          "sú"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «ty»: si."
      },
      {
        "id": 55,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "on ___ doma.",
        "options": [
          "je",
          "sme",
          "ste"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «on»: je."
      },
      {
        "id": 56,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "ona ___ doma.",
        "options": [
          "je",
          "som",
          "si"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «ona»: je."
      },
      {
        "id": 57,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "my ___ doma.",
        "options": [
          "sme",
          "som",
          "sú"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «my»: sme."
      },
      {
        "id": 58,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "vy ___ doma.",
        "options": [
          "ste",
          "si",
          "je"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «vy»: ste."
      },
      {
        "id": 59,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "oni ___ doma.",
        "options": [
          "sú",
          "sme",
          "ste"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «oni»: sú."
      },
      {
        "id": 60,
        "tenseId": "byt",
        "kind": "fill",
        "sentence": "ony ___ doma.",
        "options": [
          "sú",
          "je",
          "si"
        ],
        "answer": 0,
        "hint": "byť, настоящее время",
        "explanation": "Форма byť для «ony»: sú."
      }
    ]
  },
  {
    "id": "gender",
    "title": "Род, число и отсутствие артиклей",
    "emoji": "🧩",
    "color": "from-yellow-500 to-orange-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Три рода",
        "body": "Мужской: ten študent, ten dom. Женский: tá žena, tá kniha. Средний: to mesto, to auto. Согласная часто указывает на мужской род, -a — на женский, -o / -e / -ie — на средний. Исключения: tá noc, tá kosť, ten kolega. Учите существительное вместе с родом.",
        "examples": [
          {
            "en": "To je moja kniha.",
            "ru": "Это моя книга."
          },
          {
            "en": "Tu sú dve mestá.",
            "ru": "Здесь два города."
          }
        ]
      },
      {
        "title": "Одушевлённость",
        "body": "Мужской род делится на одушевлённый и неодушевлённый. Это влияет на винительный и множественное число: Vidím študenta, но Vidím dom. У животных во множественном числе есть особенности."
      },
      {
        "title": "Число не сводится к одному окончанию",
        "headers": [
          "Единственное",
          "Множественное"
        ],
        "rows": [
          [
            "študent",
            "študenti"
          ],
          [
            "dom",
            "domy"
          ],
          [
            "kniha",
            "knihy"
          ],
          [
            "ulica",
            "ulice"
          ],
          [
            "mesto",
            "mestá"
          ],
          [
            "dieťa",
            "deti"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Артиклей нет",
        "body": "В словацком нет аналогов a / the. Конкретность выражают контекстом или указательным местоимением: tá kniha — та книга. Существуют слова только во множественном числе: dvere, nohavice, okuliare."
      }
    ],
    "exercises": [
      {
        "id": 9,
        "tenseId": "gender",
        "kind": "choose",
        "sentence": "Какой род у mesto?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Мужской",
          "Женский",
          "Средний"
        ],
        "answer": 2,
        "explanation": "Правильный ответ: Средний. Объяснение — в разделе «Правила»."
      },
      {
        "id": 10,
        "tenseId": "gender",
        "kind": "choose",
        "sentence": "Множественное число dieťa?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "dieťatá",
          "deti",
          "dieťi"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: deti. Объяснение — в разделе «Правила»."
      },
      {
        "id": 69,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "To je ___ kniha.",
        "options": [
          "tá",
          "ten",
          "to"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: tá."
      },
      {
        "id": 70,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "To je ___ mesto.",
        "options": [
          "to",
          "ten",
          "tá"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: to."
      },
      {
        "id": 71,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "To je ___ dom.",
        "options": [
          "ten",
          "tá",
          "to"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: ten."
      },
      {
        "id": 72,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "___ je stredný rod.",
        "options": [
          "mesto",
          "žena",
          "študent"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: mesto."
      },
      {
        "id": 73,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "mestá",
          "mesto",
          "mesty"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: mestá."
      },
      {
        "id": 74,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "knihy",
          "kniha",
          "knihu"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: knihy."
      },
      {
        "id": 75,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "Traja ___.",
        "options": [
          "študenti",
          "študent",
          "študenta"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: študenti."
      },
      {
        "id": 76,
        "tenseId": "gender",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "deti",
          "dieťa",
          "dieťi"
        ],
        "answer": 0,
        "hint": "Род и множественное число",
        "explanation": "Верная форма: deti."
      }
    ]
  },
  {
    "id": "mat",
    "title": "Иметь, отрицать и спрашивать",
    "emoji": "❓",
    "color": "from-emerald-500 to-teal-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Mať — иметь",
        "headers": [
          "Лицо",
          "Форма"
        ],
        "rows": [
          [
            "ja",
            "mám"
          ],
          [
            "ty",
            "máš"
          ],
          [
            "on / ona",
            "má"
          ],
          [
            "my",
            "máme"
          ],
          [
            "vy",
            "máte"
          ],
          [
            "oni / ony",
            "majú"
          ]
        ],
        "body": "Формы и примеры в таблице.",
        "examples": [
          {
            "en": "Mám otázku.",
            "ru": "У меня вопрос."
          },
          {
            "en": "Nemám čas.",
            "ru": "У меня нет времени."
          },
          {
            "en": "Kde bývate?",
            "ru": "Где вы живёте?"
          }
        ]
      },
      {
        "title": "Отрицание",
        "body": "У большинства глаголов добавляют ne-: mám → nemám, čítam → nečítam. Byť отличается: nie som, nie je. Отрицательные местоимения сопровождаются отрицательным глаголом: Nikto tu nie je. Nič neviem."
      },
      {
        "title": "Вопросительные слова",
        "body": "Kto? — кто; čo? — что; kde? — где; kam? — куда; odkiaľ? — откуда; kedy? — когда; prečo? — почему; ako? — как; koľko? — сколько. Kde bývaš? и Kam ideš? спрашивают о разных вещах."
      }
    ],
    "exercises": [
      {
        "id": 11,
        "tenseId": "mat",
        "kind": "choose",
        "sentence": "Vy ___ otázku.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "máš",
          "máte",
          "majú"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: máte. Объяснение — в разделе «Правила»."
      },
      {
        "id": 12,
        "tenseId": "mat",
        "kind": "choose",
        "sentence": "«Куда?» по-словацки",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Kde?",
          "Kam?",
          "Kedy?"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Kam?. Объяснение — в разделе «Правила»."
      },
      {
        "id": 77,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "Ja ___ otázku.",
        "options": [
          "mám",
          "máš",
          "má"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «Ja» нужна форма mám."
      },
      {
        "id": 78,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "Ty ___ otázku.",
        "options": [
          "máš",
          "mám",
          "máte"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «Ty» нужна форма máš."
      },
      {
        "id": 79,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "On ___ otázku.",
        "options": [
          "má",
          "máš",
          "majú"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «On» нужна форма má."
      },
      {
        "id": 80,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "My ___ otázku.",
        "options": [
          "máme",
          "máte",
          "mám"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «My» нужна форма máme."
      },
      {
        "id": 81,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "Vy ___ otázku.",
        "options": [
          "máte",
          "má",
          "máme"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «Vy» нужна форма máte."
      },
      {
        "id": 82,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "Oni ___ otázku.",
        "options": [
          "majú",
          "máte",
          "mám"
        ],
        "answer": 0,
        "hint": "mať, настоящее время",
        "explanation": "С «Oni» нужна форма majú."
      },
      {
        "id": 83,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "Ja ___ čas.",
        "options": [
          "nemám",
          "nie mám",
          "nemáš"
        ],
        "answer": 0,
        "hint": "Отрицание mať",
        "explanation": "Отрицание глагола: ne- + mám → nemám."
      },
      {
        "id": 84,
        "tenseId": "mat",
        "kind": "fill",
        "sentence": "___ bývaš?",
        "options": [
          "Kde",
          "Kam",
          "Koľko"
        ],
        "answer": 0,
        "hint": "Где ты живёшь?",
        "explanation": "Kde — где; kam — куда."
      }
    ]
  },
  {
    "id": "present",
    "title": "Настоящее время: основные спряжения",
    "emoji": "⚡",
    "color": "from-indigo-500 to-violet-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Основа и окончания",
        "body": "Инфинитив часто оканчивается на -ť. Единого правила «убрать -ť» недостаточно: читать — čítať → čítam, писать — písať → píšem. Запоминайте инфинитив, форму ja и oni.",
        "examples": [
          {
            "en": "Každý deň študujem.",
            "ru": "Каждый день я учусь."
          },
          {
            "en": "Oni čítajú knihu.",
            "ru": "Они читают книгу."
          }
        ]
      },
      {
        "title": "Три частых модели",
        "headers": [
          "Лицо",
          "čítať",
          "robiť",
          "pracovať"
        ],
        "rows": [
          [
            "ja",
            "čítam",
            "robím",
            "pracujem"
          ],
          [
            "ty",
            "čítaš",
            "robíš",
            "pracuješ"
          ],
          [
            "on / ona",
            "číta",
            "robí",
            "pracuje"
          ],
          [
            "my",
            "čítame",
            "robíme",
            "pracujeme"
          ],
          [
            "vy",
            "čítate",
            "robíte",
            "pracujete"
          ],
          [
            "oni / ony",
            "čítajú",
            "robia",
            "pracujú"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Важные нерегулярные формы",
        "headers": [
          "Инфинитив",
          "ja",
          "oni"
        ],
        "rows": [
          [
            "ísť",
            "idem",
            "idú"
          ],
          [
            "jesť",
            "jem",
            "jedia"
          ],
          [
            "piť",
            "pijem",
            "pijú"
          ],
          [
            "písať",
            "píšem",
            "píšu"
          ],
          [
            "vedieť",
            "viem",
            "vedia"
          ],
          [
            "rozumieť",
            "rozumiem",
            "rozumejú"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Практика",
        "body": "Составьте три предложения о своём дне. Добавляйте наречия часто и каждый день: často, každý deň. Hovorím po slovensky — я говорю по-словацки."
      }
    ],
    "exercises": [
      {
        "id": 13,
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
        "id": 14,
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
        "id": 85,
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
        "id": 86,
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
        "id": 87,
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
        "id": 88,
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
        "id": 89,
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
        "id": 90,
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
        "id": 91,
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
        "id": 92,
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
        "id": 93,
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
        "id": 94,
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
      }
    ]
  },
  {
    "id": "adjectives",
    "title": "Прилагательные и согласование",
    "emoji": "🎨",
    "color": "from-rose-500 to-pink-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Согласование",
        "body": "Прилагательное согласуется с существительным по роду, числу и падежу: dobrý študent, dobrá kniha, dobré mesto. Для мягкой модели: cudzí študent, cudzia žena, cudzie mesto.",
        "examples": [
          {
            "en": "Mám dobrú knihu.",
            "ru": "У меня хорошая книга."
          },
          {
            "en": "To sú noví študenti.",
            "ru": "Это новые студенты."
          }
        ]
      },
      {
        "title": "Именительный падеж",
        "headers": [
          "Категория",
          "pekný",
          "cudzí"
        ],
        "rows": [
          [
            "Мужской ед.",
            "pekný",
            "cudzí"
          ],
          [
            "Женский ед.",
            "pekná",
            "cudzia"
          ],
          [
            "Средний ед.",
            "pekné",
            "cudzie"
          ],
          [
            "Мужской одуш. мн.",
            "pekní",
            "cudzí"
          ],
          [
            "Остальные мн.",
            "pekné",
            "cudzie"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Pekný в единственном числе",
        "headers": [
          "Падеж",
          "Мужской",
          "Женский",
          "Средний"
        ],
        "rows": [
          [
            "G",
            "pekného",
            "peknej",
            "pekného"
          ],
          [
            "D",
            "peknému",
            "peknej",
            "peknému"
          ],
          [
            "A",
            "pekného / pekný",
            "peknú",
            "pekné"
          ],
          [
            "L",
            "peknom",
            "peknej",
            "peknom"
          ],
          [
            "I",
            "pekným",
            "peknou",
            "pekným"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Ритмический закон",
        "body": "Krásny / krásna / krásne имеют короткое окончание после долгого слога. Не переносите все окончания pekný без изменений. Множественное косвенное: G / L pekných, D pekným, I peknými; A совпадает с G для мужских одушевлённых и с N для остальных."
      }
    ],
    "exercises": [
      {
        "id": 15,
        "tenseId": "adjectives",
        "kind": "choose",
        "sentence": "___ kniha",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "dobrý",
          "dobrá",
          "dobré"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: dobrá. Объяснение — в разделе «Правила»."
      },
      {
        "id": 16,
        "tenseId": "adjectives",
        "kind": "choose",
        "sentence": "___ študenti",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "pekný",
          "pekní",
          "pekné"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: pekní. Объяснение — в разделе «Правила»."
      },
      {
        "id": 95,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "___ študent",
        "options": [
          "dobrý",
          "dobrá",
          "dobré"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobrý."
      },
      {
        "id": 96,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "___ kniha",
        "options": [
          "dobrá",
          "dobrý",
          "dobré"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobrá."
      },
      {
        "id": 97,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "___ mesto",
        "options": [
          "dobré",
          "dobrý",
          "dobrá"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobré."
      },
      {
        "id": 98,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "___ študenti",
        "options": [
          "dobrí",
          "dobrý",
          "dobré"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobrí."
      },
      {
        "id": 99,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "___ knihy",
        "options": [
          "dobré",
          "dobrá",
          "dobrý"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobré."
      },
      {
        "id": 100,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "Čítam ___ knihu.",
        "options": [
          "dobrú",
          "dobrá",
          "dobrý"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма dobrú."
      },
      {
        "id": 101,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "Vidím ___ študenta.",
        "options": [
          "nového",
          "nový",
          "nová"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма nového."
      },
      {
        "id": 102,
        "tenseId": "adjectives",
        "kind": "fill",
        "sentence": "V ___ meste.",
        "options": [
          "novom",
          "nového",
          "nové"
        ],
        "answer": 0,
        "hint": "Согласуй род, число и падеж",
        "explanation": "В этом контексте нужна форма novom."
      }
    ]
  },
  {
    "id": "cases",
    "title": "Падежи: карта и модели",
    "emoji": "📚",
    "color": "from-blue-500 to-blue-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Шесть рабочих падежей",
        "body": "N — nominatív (кто? что?), G — genitív (кого? чего?), D — datív (кому? чему?), A — akuzatív (кого? что?), L — lokál (о ком? о чём?), I — inštrumentál (кем? чем?). L всегда с предлогом. Звательный сохранился в отдельных обращениях: Bože, otče. Учите не русское окончание, а словацкую модель и управление.",
        "examples": [
          {
            "en": "Vidím študenta.",
            "ru": "Я вижу студента."
          },
          {
            "en": "Som v meste.",
            "ru": "Я в городе."
          }
        ]
      },
      {
        "title": "Четыре модели: единственное число",
        "headers": [
          "Падеж",
          "chlap",
          "dub",
          "žena",
          "mesto"
        ],
        "rows": [
          [
            "N",
            "chlap",
            "dub",
            "žena",
            "mesto"
          ],
          [
            "G",
            "chlapa",
            "duba",
            "ženy",
            "mesta"
          ],
          [
            "D",
            "chlapovi",
            "dubu",
            "žene",
            "mestu"
          ],
          [
            "A",
            "chlapa",
            "dub",
            "ženu",
            "mesto"
          ],
          [
            "L",
            "chlapovi",
            "dube",
            "žene",
            "meste"
          ],
          [
            "I",
            "chlapom",
            "dubom",
            "ženou",
            "mestom"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Те же модели: множественное число",
        "headers": [
          "Падеж",
          "chlap",
          "dub",
          "žena",
          "mesto"
        ],
        "rows": [
          [
            "N",
            "chlapi",
            "duby",
            "ženy",
            "mestá"
          ],
          [
            "G",
            "chlapov",
            "dubov",
            "žien",
            "miest"
          ],
          [
            "D",
            "chlapom",
            "dubom",
            "ženám",
            "mestám"
          ],
          [
            "A",
            "chlapov",
            "duby",
            "ženy",
            "mestá"
          ],
          [
            "L",
            "chlapoch",
            "duboch",
            "ženách",
            "mestách"
          ],
          [
            "I",
            "chlapmi",
            "dubmi",
            "ženami",
            "mestami"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Выбор модели",
        "body": "Мужские одушевлённые: chlap, hrdina. Мужские неодушевлённые: dub, stroj. Женские: žena, ulica, dlaň, kosť. Средние: mesto, srdce, vysvedčenie, dievča. Форма G может отличаться даже у похожих слов: dom → domu, dub → duba. В словаре лучше дописывать трудные формы в свои карточки."
      }
    ],
    "exercises": [
      {
        "id": 17,
        "tenseId": "cases",
        "kind": "choose",
        "sentence": "Падеж после bez?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "N",
          "G",
          "I"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: G. Объяснение — в разделе «Правила»."
      },
      {
        "id": 18,
        "tenseId": "cases",
        "kind": "choose",
        "sentence": "Какой падеж употребляется только с предлогом?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "D",
          "L",
          "A"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: L. Объяснение — в разделе «Правила»."
      },
      {
        "id": 143,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Čítam ___.",
        "options": [
          "knihu",
          "kniha",
          "knihe"
        ],
        "answer": 0,
        "hint": "A: прямое дополнение",
        "explanation": "A: прямое дополнение; нужна форма knihu."
      },
      {
        "id": 144,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Vidím ___.",
        "options": [
          "študenta",
          "študent",
          "študentovi"
        ],
        "answer": 0,
        "hint": "A мужского одушевлённого",
        "explanation": "A мужского одушевлённого; нужна форма študenta."
      },
      {
        "id": 145,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Idem na ___.",
        "options": [
          "univerzitu",
          "univerzite",
          "univerzita"
        ],
        "answer": 0,
        "hint": "Na + A: куда?",
        "explanation": "Na + A: куда?; нужна форма univerzitu."
      },
      {
        "id": 146,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Hľadám ___.",
        "options": [
          "učebňu",
          "učebňa",
          "učebni"
        ],
        "answer": 0,
        "hint": "Hľadať + A",
        "explanation": "Hľadať + A; нужна форма učebňu."
      },
      {
        "id": 147,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Mám ___.",
        "options": [
          "auto",
          "auta",
          "autom"
        ],
        "answer": 0,
        "hint": "A среднего рода совпадает с N",
        "explanation": "A среднего рода совпадает с N; нужна форма auto."
      },
      {
        "id": 148,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Vidím ___.",
        "options": [
          "študentov",
          "študenti",
          "študentom"
        ],
        "answer": 0,
        "hint": "A мн. мужского одушевлённого",
        "explanation": "A мн. мужского одушевлённого; нужна форма študentov."
      },
      {
        "id": 149,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Mám dve ___.",
        "options": [
          "knihy",
          "kníh",
          "kniha"
        ],
        "answer": 0,
        "hint": "Два: N / A множественного",
        "explanation": "Два: N / A множественного; нужна форма knihy."
      },
      {
        "id": 150,
        "tenseId": "cases",
        "kind": "fill",
        "sentence": "Idem na ___.",
        "options": [
          "prednášku",
          "prednáška",
          "prednáške"
        ],
        "answer": 0,
        "hint": "Na + A: направление",
        "explanation": "Na + A: направление; нужна форма prednášku."
      }
    ]
  },
  {
    "id": "accusative",
    "title": "Винительный: объект и направление",
    "emoji": "🔤",
    "color": "from-cyan-500 to-blue-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Прямое дополнение",
        "body": "После vidieť, mať, čítať, hľadať часто нужен A: čítam knihu, mám auto. Женская модель žena: -a → -u. Мужской одушевлённый: študent → študenta. Мужской неодушевлённый и средний часто сохраняют N.",
        "examples": [
          {
            "en": "Hľadám učebňu.",
            "ru": "Я ищу аудиторию."
          },
          {
            "en": "Idem na prednášku.",
            "ru": "Я иду на лекцию."
          }
        ]
      },
      {
        "title": "Согласование в объекте",
        "headers": [
          "Именительный",
          "Винительный"
        ],
        "rows": [
          [
            "nový študent",
            "nového študenta"
          ],
          [
            "nový dom",
            "nový dom"
          ],
          [
            "nová kniha",
            "novú knihu"
          ],
          [
            "nové auto",
            "nové auto"
          ],
          [
            "noví študenti",
            "nových študentov"
          ],
          [
            "nové knihy",
            "nové knihy"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Предлоги направления",
        "body": "Na + A: idem na univerzitu. V + A употребляется, например, со временем: v pondelok. Do + G: idem do školy. Нельзя считать любое направление винительным: падеж зависит от предлога."
      }
    ],
    "exercises": [
      {
        "id": 19,
        "tenseId": "accusative",
        "kind": "choose",
        "sentence": "Čítam ___.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "kniha",
          "knihu",
          "knihe"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: knihu. Объяснение — в разделе «Правила»."
      },
      {
        "id": 20,
        "tenseId": "accusative",
        "kind": "choose",
        "sentence": "Vidím ___. (študent)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "študent",
          "študenta",
          "študentovi"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: študenta. Объяснение — в разделе «Правила»."
      },
      {
        "id": 103,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Čítam ___.",
        "options": [
          "knihu",
          "kniha",
          "knihe"
        ],
        "answer": 0,
        "hint": "A: прямое дополнение",
        "explanation": "A: прямое дополнение; нужна форма knihu."
      },
      {
        "id": 104,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Vidím ___.",
        "options": [
          "študenta",
          "študent",
          "študentovi"
        ],
        "answer": 0,
        "hint": "A мужского одушевлённого",
        "explanation": "A мужского одушевлённого; нужна форма študenta."
      },
      {
        "id": 105,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Idem na ___.",
        "options": [
          "univerzitu",
          "univerzite",
          "univerzita"
        ],
        "answer": 0,
        "hint": "Na + A: куда?",
        "explanation": "Na + A: куда?; нужна форма univerzitu."
      },
      {
        "id": 106,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Hľadám ___.",
        "options": [
          "učebňu",
          "učebňa",
          "učebni"
        ],
        "answer": 0,
        "hint": "Hľadať + A",
        "explanation": "Hľadať + A; нужна форма učebňu."
      },
      {
        "id": 107,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Mám ___.",
        "options": [
          "auto",
          "auta",
          "autom"
        ],
        "answer": 0,
        "hint": "A среднего рода совпадает с N",
        "explanation": "A среднего рода совпадает с N; нужна форма auto."
      },
      {
        "id": 108,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Vidím ___.",
        "options": [
          "študentov",
          "študenti",
          "študentom"
        ],
        "answer": 0,
        "hint": "A мн. мужского одушевлённого",
        "explanation": "A мн. мужского одушевлённого; нужна форма študentov."
      },
      {
        "id": 109,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Mám dve ___.",
        "options": [
          "knihy",
          "kníh",
          "kniha"
        ],
        "answer": 0,
        "hint": "Два: N / A множественного",
        "explanation": "Два: N / A множественного; нужна форма knihy."
      },
      {
        "id": 110,
        "tenseId": "accusative",
        "kind": "fill",
        "sentence": "Idem na ___.",
        "options": [
          "prednášku",
          "prednáška",
          "prednáške"
        ],
        "answer": 0,
        "hint": "Na + A: направление",
        "explanation": "Na + A: направление; нужна форма prednášku."
      }
    ]
  },
  {
    "id": "genitive",
    "title": "Родительный: откуда, без чего, количество",
    "emoji": "👋",
    "color": "from-violet-500 to-purple-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Предлоги и принадлежность",
        "body": "G нужен после do, z / zo, od, bez, u, vedľa, počas. Zo используют для удобства произношения: zo školy. Принадлежность: kniha študenta — книга студента. Нет универсального -a: G у разных моделей отличается.",
        "examples": [
          {
            "en": "Idem do školy.",
            "ru": "Я иду в школу."
          },
          {
            "en": "Som z Ruska.",
            "ru": "Я из России."
          },
          {
            "en": "Bez cukru, prosím.",
            "ru": "Без сахара, пожалуйста."
          }
        ]
      },
      {
        "title": "Частые формы",
        "headers": [
          "N",
          "G ед.",
          "G мн."
        ],
        "rows": [
          [
            "študent",
            "študenta",
            "študentov"
          ],
          [
            "dom",
            "domu",
            "domov"
          ],
          [
            "kniha",
            "knihy",
            "kníh"
          ],
          [
            "ulica",
            "ulice",
            "ulíc"
          ],
          [
            "mesto",
            "mesta",
            "miest"
          ],
          [
            "dieťa",
            "dieťaťa",
            "detí"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Количество",
        "body": "Veľa študentov, málo času, päť kníh. После 5 и выше в N / A обычно G множественного: päť eur. Jedno euro, dve eurá, tri eurá, štyri eurá. В косвенных падежах числительные и существительное склоняются."
      }
    ],
    "exercises": [
      {
        "id": 21,
        "tenseId": "genitive",
        "kind": "choose",
        "sentence": "Idem do ___.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "škola",
          "školy",
          "školu"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: školy. Объяснение — в разделе «Правила»."
      },
      {
        "id": 22,
        "tenseId": "genitive",
        "kind": "choose",
        "sentence": "päť ___",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "knihy",
          "kníh",
          "kniha"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: kníh. Объяснение — в разделе «Правила»."
      },
      {
        "id": 111,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Idem do ___.",
        "options": [
          "školy",
          "školu",
          "škola"
        ],
        "answer": 0,
        "hint": "Do + G",
        "explanation": "Do + G; нужна форма školy."
      },
      {
        "id": 112,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Som z ___.",
        "options": [
          "Ruska",
          "Rusko",
          "Rusku"
        ],
        "answer": 0,
        "hint": "Z + G",
        "explanation": "Z + G; нужна форма Ruska."
      },
      {
        "id": 113,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Bez ___ , prosím.",
        "options": [
          "cukru",
          "cukor",
          "cukrom"
        ],
        "answer": 0,
        "hint": "Bez + G",
        "explanation": "Bez + G; нужна форма cukru."
      },
      {
        "id": 114,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Päť ___.",
        "options": [
          "študentov",
          "študenti",
          "študentom"
        ],
        "answer": 0,
        "hint": "После päť — G мн.",
        "explanation": "После päť — G мн.; нужна форма študentov."
      },
      {
        "id": 115,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Veľa ___.",
        "options": [
          "času",
          "čas",
          "časom"
        ],
        "answer": 0,
        "hint": "Veľa + G",
        "explanation": "Veľa + G; нужна форма času."
      },
      {
        "id": 116,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Kniha ___.",
        "options": [
          "študenta",
          "študent",
          "študentovi"
        ],
        "answer": 0,
        "hint": "Принадлежность: G",
        "explanation": "Принадлежность: G; нужна форма študenta."
      },
      {
        "id": 117,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Vedľa ___.",
        "options": [
          "domu",
          "dom",
          "domom"
        ],
        "answer": 0,
        "hint": "Vedľa + G",
        "explanation": "Vedľa + G; нужна форма domu."
      },
      {
        "id": 118,
        "tenseId": "genitive",
        "kind": "fill",
        "sentence": "Som zo ___.",
        "options": [
          "školy",
          "školu",
          "škole"
        ],
        "answer": 0,
        "hint": "Zo + G",
        "explanation": "Zo + G; нужна форма školy."
      }
    ]
  },
  {
    "id": "locative",
    "title": "Местный: где и о чём",
    "emoji": "🙋",
    "color": "from-yellow-500 to-orange-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Где, а не куда",
        "body": "V / vo + L обозначает нахождение внутри: v škole, vo vlaku. Na + L: na univerzite, na prednáške. O + L: o skúške. При движении эти же предлоги могут требовать другой падеж.",
        "examples": [
          {
            "en": "Bývam na internáte.",
            "ru": "Я живу в общежитии."
          },
          {
            "en": "Hovoríme o skúške.",
            "ru": "Мы говорим об экзамене."
          }
        ]
      },
      {
        "title": "Рабочие примеры",
        "headers": [
          "Существительное",
          "L с предлогом"
        ],
        "rows": [
          [
            "škola",
            "v škole"
          ],
          [
            "univerzita",
            "na univerzite"
          ],
          [
            "mesto",
            "v meste"
          ],
          [
            "Slovensko",
            "na Slovensku"
          ],
          [
            "Rusko",
            "v Rusku"
          ],
          [
            "študent",
            "o študentovi"
          ],
          [
            "kniha",
            "o knihe"
          ],
          [
            "internát",
            "na internáte"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Контраст",
        "body": "Kde si? Som v škole. Kam ideš? Idem do školy. Kde študuješ? Na univerzite. Kam ideš? Na univerzitu. Для городов: v Bratislave, do Bratislavy."
      }
    ],
    "exercises": [
      {
        "id": 23,
        "tenseId": "locative",
        "kind": "choose",
        "sentence": "Som v ___.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "školu",
          "škole",
          "školy"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: škole. Объяснение — в разделе «Правила»."
      },
      {
        "id": 24,
        "tenseId": "locative",
        "kind": "choose",
        "sentence": "Na ___ (где?)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "univerzitu",
          "univerzita",
          "univerzite"
        ],
        "answer": 2,
        "explanation": "Правильный ответ: univerzite. Объяснение — в разделе «Правила»."
      },
      {
        "id": 119,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Som v ___.",
        "options": [
          "škole",
          "školu",
          "školy"
        ],
        "answer": 0,
        "hint": "V + L: где?",
        "explanation": "V + L: где?; нужна форма škole."
      },
      {
        "id": 120,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Som na ___.",
        "options": [
          "univerzite",
          "univerzitu",
          "univerzita"
        ],
        "answer": 0,
        "hint": "Na + L: где?",
        "explanation": "Na + L: где?; нужна форма univerzite."
      },
      {
        "id": 121,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Hovoríme o ___.",
        "options": [
          "skúške",
          "skúšku",
          "skúška"
        ],
        "answer": 0,
        "hint": "O + L",
        "explanation": "O + L; нужна форма skúške."
      },
      {
        "id": 122,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Bývam na ___.",
        "options": [
          "internáte",
          "internát",
          "internátom"
        ],
        "answer": 0,
        "hint": "Na + L: местонахождение",
        "explanation": "Na + L: местонахождение; нужна форма internáte."
      },
      {
        "id": 123,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Bývam v ___.",
        "options": [
          "Bratislave",
          "Bratislavu",
          "Bratislava"
        ],
        "answer": 0,
        "hint": "V + L, Bratislava → Bratislave",
        "explanation": "V + L, Bratislava → Bratislave; нужна форма Bratislave."
      },
      {
        "id": 124,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Som v ___.",
        "options": [
          "meste",
          "mesto",
          "mestom"
        ],
        "answer": 0,
        "hint": "V + L",
        "explanation": "V + L; нужна форма meste."
      },
      {
        "id": 125,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Študujem na ___.",
        "options": [
          "Slovensku",
          "Slovensko",
          "Slovenska"
        ],
        "answer": 0,
        "hint": "Na + L",
        "explanation": "Na + L; нужна форма Slovensku."
      },
      {
        "id": 126,
        "tenseId": "locative",
        "kind": "fill",
        "sentence": "Hovoríme o ___.",
        "options": [
          "študentovi",
          "študenta",
          "študent"
        ],
        "answer": 0,
        "hint": "O + L",
        "explanation": "O + L; нужна форма študentovi."
      }
    ]
  },
  {
    "id": "dative",
    "title": "Дательный: кому и к кому",
    "emoji": "🧩",
    "color": "from-emerald-500 to-teal-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Адресат и направление к",
        "body": "D нужен для адресата: Dám knihu študentovi. Предлоги k / ku, proti, kvôli требуют D. Ku используют для удобства произношения: ku škole. Pomáhať komu? — помогать кому? Rozumieť komu / čomu? — понимать кого / что?",
        "examples": [
          {
            "en": "Pomáham kamarátovi.",
            "ru": "Я помогаю другу."
          },
          {
            "en": "Páči sa mi mesto.",
            "ru": "Мне нравится город."
          }
        ]
      },
      {
        "title": "Формы",
        "headers": [
          "N",
          "D ед.",
          "D мн."
        ],
        "rows": [
          [
            "študent",
            "študentovi",
            "študentom"
          ],
          [
            "žena",
            "žene",
            "ženám"
          ],
          [
            "ulica",
            "ulici",
            "uliciam"
          ],
          [
            "mesto",
            "mestu",
            "mestám"
          ],
          [
            "kosť",
            "kosti",
            "kostiam"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Мне нравится",
        "body": "Páči sa mi kniha. — Мне нравится книга. Páčia sa mi knihy. — Мне нравятся книги. Подлежащее — книга / книги, поэтому глагол меняет число. Mi, ti, mu, jej, nám, vám, im — короткие дательные формы местоимений."
      }
    ],
    "exercises": [
      {
        "id": 25,
        "tenseId": "dative",
        "kind": "choose",
        "sentence": "Dám knihu ___.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "študenta",
          "študentovi",
          "študentom"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: študentovi. Объяснение — в разделе «Правила»."
      },
      {
        "id": 26,
        "tenseId": "dative",
        "kind": "choose",
        "sentence": "Мне нравится: Páči sa ___",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "ma",
          "mi",
          "mňa"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: mi. Объяснение — в разделе «Правила»."
      },
      {
        "id": 127,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Pomáham ___.",
        "options": [
          "kamarátovi",
          "kamaráta",
          "kamarátom"
        ],
        "answer": 0,
        "hint": "Pomáhať + D",
        "explanation": "Pomáhať + D; нужна форма kamarátovi."
      },
      {
        "id": 128,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Dám knihu ___.",
        "options": [
          "študentovi",
          "študenta",
          "študent"
        ],
        "answer": 0,
        "hint": "Адресат в D",
        "explanation": "Адресат в D; нужна форма študentovi."
      },
      {
        "id": 129,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Idem k ___.",
        "options": [
          "lekárovi",
          "lekára",
          "lekár"
        ],
        "answer": 0,
        "hint": "K + D",
        "explanation": "K + D; нужна форма lekárovi."
      },
      {
        "id": 130,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Páči sa ___ kniha.",
        "options": [
          "mi",
          "ma",
          "mňa"
        ],
        "answer": 0,
        "hint": "Mi: мне",
        "explanation": "Mi: мне; нужна форма mi."
      },
      {
        "id": 131,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Rozumiem ___.",
        "options": [
          "učiteľovi",
          "učiteľa",
          "učiteľ"
        ],
        "answer": 0,
        "hint": "Rozumieť + D",
        "explanation": "Rozumieť + D; нужна форма učiteľovi."
      },
      {
        "id": 132,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Dám darček ___.",
        "options": [
          "sestre",
          "sestru",
          "sestra"
        ],
        "answer": 0,
        "hint": "D: кому?",
        "explanation": "D: кому?; нужна форма sestre."
      },
      {
        "id": 133,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Páčia sa ___ knihy.",
        "options": [
          "nám",
          "nás",
          "nami"
        ],
        "answer": 0,
        "hint": "Nám — нам",
        "explanation": "Nám — нам; нужна форма nám."
      },
      {
        "id": 134,
        "tenseId": "dative",
        "kind": "fill",
        "sentence": "Idem ku ___.",
        "options": [
          "škole",
          "školu",
          "školy"
        ],
        "answer": 0,
        "hint": "Ku + D",
        "explanation": "Ku + D; нужна форма škole."
      }
    ]
  },
  {
    "id": "instrumental",
    "title": "Творительный: с кем и чем",
    "emoji": "❓",
    "color": "from-indigo-500 to-violet-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Инструмент и компания",
        "body": "I без предлога: cestujem vlakom. S / so + I: s kamarátom, so sestrou. Не путайте s (с кем?) и z (откуда?). Pred, pod, nad, za, medzi при обозначении положения часто требуют I, при направлении — A.",
        "examples": [
          {
            "en": "Cestujem autobusom.",
            "ru": "Я еду автобусом."
          },
          {
            "en": "Idem s kamarátkou.",
            "ru": "Я иду с подругой."
          }
        ]
      },
      {
        "title": "Формы",
        "headers": [
          "N",
          "I ед.",
          "I мн."
        ],
        "rows": [
          [
            "študent",
            "študentom",
            "študentmi"
          ],
          [
            "kniha",
            "knihou",
            "knihami"
          ],
          [
            "ulica",
            "ulicou",
            "ulicami"
          ],
          [
            "mesto",
            "mestom",
            "mestami"
          ],
          [
            "kosť",
            "kosťou",
            "kosťami"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Местоимения",
        "body": "So mnou — со мной, s tebou — с тобой, s ním — с ним, s ňou — с ней, s nami — с нами, s vami — с вами, s nimi — с ними. После предлога у местоимений 3-го лица появляются формы с n / ň."
      }
    ],
    "exercises": [
      {
        "id": 27,
        "tenseId": "instrumental",
        "kind": "choose",
        "sentence": "s ___ (kamarát)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "kamarát",
          "kamarátom",
          "kamaráta"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: kamarátom. Объяснение — в разделе «Правила»."
      },
      {
        "id": 28,
        "tenseId": "instrumental",
        "kind": "choose",
        "sentence": "Поездом: cestujem ___",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "vlak",
          "vlaku",
          "vlakom"
        ],
        "answer": 2,
        "explanation": "Правильный ответ: vlakom. Объяснение — в разделе «Правила»."
      },
      {
        "id": 135,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Cestujem ___.",
        "options": [
          "vlakom",
          "vlak",
          "vlaku"
        ],
        "answer": 0,
        "hint": "Транспорт в I",
        "explanation": "Транспорт в I; нужна форма vlakom."
      },
      {
        "id": 136,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Idem s ___.",
        "options": [
          "kamarátom",
          "kamaráta",
          "kamarát"
        ],
        "answer": 0,
        "hint": "S + I",
        "explanation": "S + I; нужна форма kamarátom."
      },
      {
        "id": 137,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Idem so ___.",
        "options": [
          "sestrou",
          "sestru",
          "sestra"
        ],
        "answer": 0,
        "hint": "So + I",
        "explanation": "So + I; нужна форма sestrou."
      },
      {
        "id": 138,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Ideš so ___?",
        "options": [
          "mnou",
          "mňa",
          "mi"
        ],
        "answer": 0,
        "hint": "Со мной: so mnou",
        "explanation": "Со мной: so mnou; нужна форма mnou."
      },
      {
        "id": 139,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Hovorím s ___.",
        "options": [
          "učiteľom",
          "učiteľa",
          "učiteľovi"
        ],
        "answer": 0,
        "hint": "S + I",
        "explanation": "S + I; нужна форма učiteľom."
      },
      {
        "id": 140,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Cestujem ___.",
        "options": [
          "autobusom",
          "autobus",
          "autobusu"
        ],
        "answer": 0,
        "hint": "Транспорт в I",
        "explanation": "Транспорт в I; нужна форма autobusom."
      },
      {
        "id": 141,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Idem s ___.",
        "options": [
          "ňou",
          "ju",
          "jej"
        ],
        "answer": 0,
        "hint": "С ней: s ňou",
        "explanation": "С ней: s ňou; нужна форма ňou."
      },
      {
        "id": 142,
        "tenseId": "instrumental",
        "kind": "fill",
        "sentence": "Píšem ___.",
        "options": [
          "perom",
          "pero",
          "pera"
        ],
        "answer": 0,
        "hint": "Инструмент в I",
        "explanation": "Инструмент в I; нужна форма perom."
      }
    ]
  },
  {
    "id": "models",
    "title": "Остальные модели склонения",
    "emoji": "⚡",
    "color": "from-rose-500 to-pink-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Как читать таблицы",
        "body": "В каждой строке формы идут в порядке N, G, D, A, L, I. Это формы модельных слов, а не окончания для любого существительного. При переносе учитывайте чередования, ритмический закон и исключения.",
        "examples": [
          {
            "en": "Na ulici je obchod.",
            "ru": "На улице есть магазин."
          },
          {
            "en": "Mám dve vysvedčenia.",
            "ru": "У меня два аттестата."
          }
        ]
      },
      {
        "title": "Модели: единственное число",
        "headers": [
          "Модель",
          "N / G / D / A / L / I"
        ],
        "rows": [
          [
            "hrdina",
            "hrdina / hrdinu / hrdinovi / hrdinu / hrdinovi / hrdinom"
          ],
          [
            "stroj",
            "stroj / stroja / stroju / stroj / stroji / strojom"
          ],
          [
            "ulica",
            "ulica / ulice / ulici / ulicu / ulici / ulicou"
          ],
          [
            "dlaň",
            "dlaň / dlane / dlani / dlaň / dlani / dlaňou"
          ],
          [
            "kosť",
            "kosť / kosti / kosti / kosť / kosti / kosťou"
          ],
          [
            "srdce",
            "srdce / srdca / srdcu / srdce / srdci / srdcom"
          ],
          [
            "vysvedčenie",
            "vysvedčenie / vysvedčenia / vysvedčeniu / vysvedčenie / vysvedčení / vysvedčením"
          ],
          [
            "dievča",
            "dievča / dievčaťa / dievčaťu / dievča / dievčati / dievčaťom"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Модели: множественное число",
        "headers": [
          "Модель",
          "N / G / D / A / L / I"
        ],
        "rows": [
          [
            "hrdina",
            "hrdinovia / hrdinov / hrdinom / hrdinov / hrdinoch / hrdinami"
          ],
          [
            "stroj",
            "stroje / strojov / strojom / stroje / strojoch / strojmi"
          ],
          [
            "ulica",
            "ulice / ulíc / uliciam / ulice / uliciach / ulicami"
          ],
          [
            "dlaň",
            "dlane / dlaní / dlaniam / dlane / dlaniach / dlaňami"
          ],
          [
            "kosť",
            "kosti / kostí / kostiam / kosti / kostiach / kosťami"
          ],
          [
            "srdce",
            "srdcia / sŕdc / srdciam / srdcia / srdciach / srdcami"
          ],
          [
            "vysvedčenie",
            "vysvedčenia / vysvedčení / vysvedčeniam / vysvedčenia / vysvedčeniach / vysvedčeniami"
          ],
          [
            "dievča",
            "dievčatá / dievčat / dievčatám / dievčatá / dievčatách / dievčatami"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Частые исключения",
        "body": "Dieťa → deti (G detí, D deťom, A deti, L deťoch, I deťmi). Otec → otca, deň → dňa, pes → psa. Ряд существительных меняет основу; не пытайтесь механически добавлять окончание к N."
      }
    ],
    "exercises": [
      {
        "id": 29,
        "tenseId": "models",
        "kind": "choose",
        "sentence": "L от ulica",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "ulice",
          "ulici",
          "ulicou"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: ulici. Объяснение — в разделе «Правила»."
      },
      {
        "id": 30,
        "tenseId": "models",
        "kind": "choose",
        "sentence": "Множественное число stroj",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "stroji",
          "stroje",
          "stroja"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: stroje. Объяснение — в разделе «Правила»."
      },
      {
        "id": 151,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Na ___ je obchod.",
        "options": [
          "ulici",
          "ulica",
          "ulice"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: ulici. Сверь модель в таблице."
      },
      {
        "id": 152,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Vidím dve ___.",
        "options": [
          "srdcia",
          "srdce",
          "srdcá"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: srdcia. Сверь модель в таблице."
      },
      {
        "id": 153,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "dievčatá",
          "dievča",
          "dievči"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: dievčatá. Сверь модель в таблице."
      },
      {
        "id": 154,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Dva ___.",
        "options": [
          "stroje",
          "stroji",
          "stroja"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: stroje. Сверь модель в таблице."
      },
      {
        "id": 155,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Bez ___.",
        "options": [
          "detí",
          "deti",
          "deťom"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: detí. Сверь модель в таблице."
      },
      {
        "id": 156,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "S ___.",
        "options": [
          "deťmi",
          "deti",
          "detí"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: deťmi. Сверь модель в таблице."
      },
      {
        "id": 157,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "vysvedčenia",
          "vysvedčenie",
          "vysvedčení"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: vysvedčenia. Сверь модель в таблице."
      },
      {
        "id": 158,
        "tenseId": "models",
        "kind": "fill",
        "sentence": "O ___.",
        "options": [
          "otcovi",
          "otca",
          "otec"
        ],
        "answer": 0,
        "hint": "Модели и чередования",
        "explanation": "Правильная форма: otcovi. Сверь модель в таблице."
      }
    ]
  },
  {
    "id": "pronouns",
    "title": "Местоимения: личные и притяжательные",
    "emoji": "🎨",
    "color": "from-blue-500 to-blue-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Личные: основные формы",
        "headers": [
          "Лицо",
          "G / A полная",
          "D полная / краткая",
          "I"
        ],
        "rows": [
          [
            "ja",
            "mňa / ma",
            "mne / mi",
            "mnou"
          ],
          [
            "ty",
            "teba / ťa",
            "tebe / ti",
            "tebou"
          ],
          [
            "on",
            "jeho / ho",
            "jemu / mu",
            "ním"
          ],
          [
            "ona",
            "jej (G), ju (A)",
            "jej",
            "ňou"
          ],
          [
            "my",
            "nás",
            "nám",
            "nami"
          ],
          [
            "vy",
            "vás",
            "vám",
            "vami"
          ],
          [
            "oni / ony",
            "ich",
            "im",
            "nimi"
          ]
        ],
        "body": "Формы и примеры в таблице.",
        "examples": [
          {
            "en": "To je moja učebnica.",
            "ru": "Это мой учебник."
          },
          {
            "en": "Dám ti knihu.",
            "ru": "Я дам тебе книгу."
          }
        ]
      },
      {
        "title": "После предлогов",
        "body": "Полные формы обязательны после предлогов: pre mňa, ku mne, s tebou. У третьего лица: bez neho, k nemu, o nej, s ňou, bez nich. Краткие формы обычно стоят близко к началу предложения: Dám ti knihu."
      },
      {
        "title": "Чей?",
        "body": "Môj / moja / moje; tvoj / tvoja / tvoje; náš / naša / naše; váš / vaša / vaše. Jeho, jej, ich не склоняются: jeho kniha, jeho knihy. Svoj относится к подлежащему: Anna číta svoju knihu. — Анна читает свою книгу; jej knihu может значить книгу другой женщины."
      },
      {
        "title": "Môj, единственное число",
        "headers": [
          "Падеж",
          "Мужской",
          "Женский",
          "Средний"
        ],
        "rows": [
          [
            "N",
            "môj",
            "moja",
            "moje"
          ],
          [
            "G",
            "môjho",
            "mojej",
            "môjho"
          ],
          [
            "D",
            "môjmu",
            "mojej",
            "môjmu"
          ],
          [
            "A",
            "môjho / môj",
            "moju",
            "moje"
          ],
          [
            "L",
            "mojom",
            "mojej",
            "mojom"
          ],
          [
            "I",
            "mojím",
            "mojou",
            "mojím"
          ]
        ],
        "body": "Формы и примеры в таблице."
      }
    ],
    "exercises": [
      {
        "id": 31,
        "tenseId": "pronouns",
        "kind": "choose",
        "sentence": "Anna číta ___ knihu. (свою)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "svoj",
          "svoju",
          "svoje"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: svoju. Объяснение — в разделе «Правила»."
      },
      {
        "id": 32,
        "tenseId": "pronouns",
        "kind": "choose",
        "sentence": "С ней",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "s ju",
          "s jej",
          "s ňou"
        ],
        "answer": 2,
        "explanation": "Правильный ответ: s ňou. Объяснение — в разделе «Правила»."
      },
      {
        "id": 159,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "To je ___ kniha.",
        "options": [
          "moja",
          "môj",
          "moje"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма moja."
      },
      {
        "id": 160,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Vidím ___ knihu.",
        "options": [
          "moju",
          "moja",
          "mojej"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма moju."
      },
      {
        "id": 161,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Dám ___ knihu.",
        "options": [
          "ti",
          "ťa",
          "teba"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма ti."
      },
      {
        "id": 162,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Idem s ___.",
        "options": [
          "ním",
          "ho",
          "jemu"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма ním."
      },
      {
        "id": 163,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Bez ___.",
        "options": [
          "neho",
          "ho",
          "mu"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма neho."
      },
      {
        "id": 164,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Anna číta ___ knihu. (свою)",
        "options": [
          "svoju",
          "svoj",
          "svoje"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма svoju."
      },
      {
        "id": 165,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "To sú ___ knihy.",
        "options": [
          "jeho",
          "jemu",
          "ním"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма jeho."
      },
      {
        "id": 166,
        "tenseId": "pronouns",
        "kind": "fill",
        "sentence": "Páči sa ___ škola.",
        "options": [
          "mi",
          "ma",
          "mňa"
        ],
        "answer": 0,
        "hint": "Полные и краткие формы",
        "explanation": "В этом контексте нужна форма mi."
      }
    ]
  },
  {
    "id": "numbers",
    "title": "Числа, деньги и количество",
    "emoji": "📚",
    "color": "from-cyan-500 to-blue-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Первые числа",
        "body": "0 nula, 1 jeden / jedna / jedno, 2 dva (мужской неодуш.) / dve (женский и средний), для людей: dvaja študenti, traja študenti, štyria študenti. 3 tri, 4 štyri, 5 päť, 6 šesť, 7 sedem, 8 osem, 9 deväť, 10 desať.",
        "examples": [
          {
            "en": "Mám dve knihy.",
            "ru": "У меня две книги."
          },
          {
            "en": "Stojí to päť eur.",
            "ru": "Это стоит пять евро."
          }
        ]
      },
      {
        "title": "Как строить числа",
        "headers": [
          "Число",
          "Словацкий"
        ],
        "rows": [
          [
            "11–15",
            "jedenásť, dvanásť, trinásť, štrnásť, pätnásť"
          ],
          [
            "16–19",
            "šestnásť, sedemnásť, osemnásť, devätnásť"
          ],
          [
            "20 / 30 / 40",
            "dvadsať / tridsať / štyridsať"
          ],
          [
            "50 / 60",
            "päťdesiat / šesťdesiat"
          ],
          [
            "70 / 80 / 90",
            "sedemdesiat / osemdesiat / deväťdesiat"
          ],
          [
            "21",
            "dvadsaťjeden"
          ],
          [
            "100 / 200 / 1000",
            "sto / dvesto / tisíc"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "После числительного",
        "body": "Jedna kniha, dve knihy, tri knihy, štyri knihy, päť kníh. При 5 и выше глагол обычно в единственном среднем: Päť študentov prišlo. Для цен: jedno euro, dve eurá, päť eur. Порядковые: prvý, druhý, tretí, štvrtý, piaty — склоняются как прилагательные."
      },
      {
        "title": "Запись цены",
        "body": "В Словакии используется десятичная запятая: 2,50 €. Можно сказать dve eurá päťdesiat centov. Koľko to stojí? — Сколько это стоит?"
      }
    ],
    "exercises": [
      {
        "id": 33,
        "tenseId": "numbers",
        "kind": "choose",
        "sentence": "2 книги",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "dva knihy",
          "dve knihy",
          "dve kníh"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: dve knihy. Объяснение — в разделе «Правила»."
      },
      {
        "id": 34,
        "tenseId": "numbers",
        "kind": "choose",
        "sentence": "5 евро",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "päť eurá",
          "päť eur",
          "päť euro"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: päť eur. Объяснение — в разделе «Правила»."
      },
      {
        "id": 167,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "Jedna ___.",
        "options": [
          "kniha",
          "knihy",
          "kníh"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма kniha."
      },
      {
        "id": 168,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "knihy",
          "kniha",
          "kníh"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма knihy."
      },
      {
        "id": 169,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "Päť ___.",
        "options": [
          "kníh",
          "knihy",
          "kniha"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма kníh."
      },
      {
        "id": 170,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "Dve ___.",
        "options": [
          "eurá",
          "euro",
          "eur"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма eurá."
      },
      {
        "id": 171,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "Päť ___.",
        "options": [
          "eur",
          "eurá",
          "euro"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма eur."
      },
      {
        "id": 172,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "___ študenti.",
        "options": [
          "Dvaja",
          "Dve",
          "Dva"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма Dvaja."
      },
      {
        "id": 173,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "___ mestá.",
        "options": [
          "Dve",
          "Dva",
          "Dvaja"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма Dve."
      },
      {
        "id": 174,
        "tenseId": "numbers",
        "kind": "fill",
        "sentence": "200 = ___",
        "options": [
          "dvesto",
          "dvasto",
          "dvatsto"
        ],
        "answer": 0,
        "hint": "Число и форма существительного",
        "explanation": "Здесь нужна форма dvesto."
      }
    ]
  },
  {
    "id": "time",
    "title": "Время, даты и календарь",
    "emoji": "🔤",
    "color": "from-violet-500 to-purple-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Сколько времени?",
        "body": "Koľko je hodín? Je jedna hodina. Sú dve / tri / štyri hodiny. Je päť hodín. Для встречи: o jednej, o druhej, o tretej, o štvrtej, o piatej. Безопасный вариант — цифровая форма: o 14:30 (o štrnástej tridsať).",
        "examples": [
          {
            "en": "Prednáška je o deviatej.",
            "ru": "Лекция в девять."
          },
          {
            "en": "Skúška je v pondelok.",
            "ru": "Экзамен в понедельник."
          }
        ]
      },
      {
        "title": "Разговорное время",
        "headers": [
          "Время",
          "Фраза"
        ],
        "rows": [
          [
            "1:15",
            "štvrť na dve"
          ],
          [
            "1:30",
            "pol druhej"
          ],
          [
            "1:45",
            "trištvrte na dve"
          ],
          [
            "2:00",
            "dve hodiny"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Дни недели",
        "body": "V pondelok, v utorok, v stredu, vo štvrtok, v piatok, v sobotu, v nedeľu. Вопрос о времени: Kedy? Ответ: dnes, zajtra, ráno, večer. Предлоги: pred skúškou, po skúške, počas semestra."
      },
      {
        "title": "Дата",
        "body": "Aký je dnes dátum? Dnes je siedmeho októbra. В датах день обычно в родительном порядкового числительного, месяц — в родительном: prvého januára, druhého februára, tretieho marca. В текстах дата пишется 7. 10. 2026. В октябре — v októbri. Год можно читать числом: dvetisícdvadsaťšesť."
      }
    ],
    "exercises": [
      {
        "id": 35,
        "tenseId": "time",
        "kind": "choose",
        "sentence": "pol druhej — это",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "2:30",
          "1:30",
          "1:15"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: 1:30. Объяснение — в разделе «Правила»."
      },
      {
        "id": 36,
        "tenseId": "time",
        "kind": "choose",
        "sentence": "В среду",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "v streda",
          "v stredu",
          "v stredou"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: v stredu. Объяснение — в разделе «Правила»."
      },
      {
        "id": 175,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Skúška je v ___.",
        "options": [
          "pondelok",
          "pondelku",
          "pondelkom"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: pondelok."
      },
      {
        "id": 176,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Prednáška je v ___.",
        "options": [
          "stredu",
          "streda",
          "stredou"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: stredu."
      },
      {
        "id": 177,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Stretneme sa vo ___.",
        "options": [
          "štvrtok",
          "štvrtku",
          "štvrtkom"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: štvrtok."
      },
      {
        "id": 178,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Je ___ hodín.",
        "options": [
          "päť",
          "piaty",
          "piatej"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: päť."
      },
      {
        "id": 179,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Prídem o ___.",
        "options": [
          "piatej",
          "päť",
          "piaty"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: piatej."
      },
      {
        "id": 180,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "Dnes je siedmeho ___.",
        "options": [
          "októbra",
          "október",
          "októbri"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: októbra."
      },
      {
        "id": 181,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "V ___ je skúška.",
        "options": [
          "októbri",
          "október",
          "októbra"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: októbri."
      },
      {
        "id": 182,
        "tenseId": "time",
        "kind": "fill",
        "sentence": "1:30 = ___",
        "options": [
          "pol druhej",
          "pol tretej",
          "štvrť na dve"
        ],
        "answer": 0,
        "hint": "Время, дата, предлоги",
        "explanation": "Правильное сочетание: pol druhej."
      }
    ]
  },
  {
    "id": "modals",
    "title": "Модальные глаголы и вежливые просьбы",
    "emoji": "👋",
    "color": "from-yellow-500 to-orange-600",
    "intro": "A1 · правила и упражнения",
    "rules": [
      {
        "title": "Спряжение",
        "headers": [
          "Лицо",
          "chcieť",
          "môcť",
          "musieť"
        ],
        "rows": [
          [
            "ja",
            "chcem",
            "môžem",
            "musím"
          ],
          [
            "ty",
            "chceš",
            "môžeš",
            "musíš"
          ],
          [
            "on / ona",
            "chce",
            "môže",
            "musí"
          ],
          [
            "my",
            "chceme",
            "môžeme",
            "musíme"
          ],
          [
            "vy",
            "chcete",
            "môžete",
            "musíte"
          ],
          [
            "oni / ony",
            "chcú",
            "môžu",
            "musia"
          ]
        ],
        "body": "Формы и примеры в таблице.",
        "examples": [
          {
            "en": "Musím sa učiť.",
            "ru": "Мне нужно учиться."
          },
          {
            "en": "Môžete hovoriť pomalšie?",
            "ru": "Можете говорить медленнее?"
          }
        ]
      },
      {
        "title": "Плюс инфинитив",
        "body": "Chcem študovať. Môžem prísť? Musím odísť. Nemusím — не обязан, а не запрещено. Запрет: nesmiem. Neviem — не знаю / не умею. Nemôžem — не могу из-за условий."
      },
      {
        "title": "Вежливая просьба",
        "body": "Môžete mi pomôcť? — Можете мне помочь? Chcel by som… (мужчина) / Chcela by som… (женщина) — Я хотел(а) бы… Можно нейтрально попросить: Prosím si kávu. Для преподавателя используйте vy."
      }
    ],
    "exercises": [
      {
        "id": 37,
        "tenseId": "modals",
        "kind": "choose",
        "sentence": "Я не обязан",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Nesmiem",
          "Nemusím",
          "Neviem"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Nemusím. Объяснение — в разделе «Правила»."
      },
      {
        "id": 38,
        "tenseId": "modals",
        "kind": "choose",
        "sentence": "Vy ___ prísť. (môcť)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "môžeš",
          "môžete",
          "môžu"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: môžete. Объяснение — в разделе «Правила»."
      },
      {
        "id": 183,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "Ja ___ študovať.",
        "options": [
          "chcem",
          "chceš",
          "chcú"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: chcem."
      },
      {
        "id": 184,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "Vy ___ prísť.",
        "options": [
          "môžete",
          "môžeš",
          "môžu"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: môžete."
      },
      {
        "id": 185,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "My ___ odísť.",
        "options": [
          "musíme",
          "musím",
          "musia"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: musíme."
      },
      {
        "id": 186,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "Oni ___ prísť.",
        "options": [
          "môžu",
          "môže",
          "môžem"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: môžu."
      },
      {
        "id": 187,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "___ mi pomôcť? (вежливо)",
        "options": [
          "Môžete",
          "Môžeš",
          "Môžu"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: Môžete."
      },
      {
        "id": 188,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "Ja ___ pracovať. (не обязан)",
        "options": [
          "nemusím",
          "nesmiem",
          "neviem"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: nemusím."
      },
      {
        "id": 189,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "On ___ ísť.",
        "options": [
          "chce",
          "chcem",
          "chcete"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: chce."
      },
      {
        "id": 190,
        "tenseId": "modals",
        "kind": "fill",
        "sentence": "Ja ___ ísť. (запрещено)",
        "options": [
          "nesmiem",
          "nemusím",
          "neviem"
        ],
        "answer": 0,
        "hint": "Модальный глагол + инфинитив",
        "explanation": "Правильная форма и значение: nesmiem."
      }
    ]
  },
  {
    "id": "reflexive",
    "title": "Возвратные глаголы и порядок слов",
    "emoji": "🙋",
    "color": "from-emerald-500 to-teal-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Sa и si",
        "body": "Učiť sa — учиться; učiť — учить кого-то. Umývať sa — мыться. Kupovať si — покупать себе. Sa и si — безударные частицы, не окончания глагола. Их нельзя выбрасывать из словарной формы.",
        "examples": [
          {
            "en": "Dnes sa učím po slovensky.",
            "ru": "Сегодня я учу словацкий."
          },
          {
            "en": "Kúpim si knihu.",
            "ru": "Я куплю себе книгу."
          }
        ]
      },
      {
        "title": "Вторая позиция",
        "body": "Краткие слова som, si, sa, mi, ti и подобные обычно идут после первого смыслового компонента: Dnes sa učím. Učím sa dnes. Dnes som sa učil. Это не обязательно после первого написанного слова: Na vysokej škole sa učím po slovensky."
      },
      {
        "title": "Нейтральный порядок",
        "body": "Подлежащее — сказуемое — дополнение: Anna číta knihu. Словацкий допускает перестановку для акцента: Knihu číta Anna. Начинайте с нейтрального порядка. В отрицании глагол получает ne-: Dnes sa neučím."
      }
    ],
    "exercises": [
      {
        "id": 39,
        "tenseId": "reflexive",
        "kind": "choose",
        "sentence": "Dnes ___ učím.",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "sa",
          "som",
          "je"
        ],
        "answer": 0,
        "explanation": "Правильный ответ: sa. Объяснение — в разделе «Правила»."
      },
      {
        "id": 40,
        "tenseId": "reflexive",
        "kind": "choose",
        "sentence": "Верный порядок",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Dnes sa som učil.",
          "Dnes som sa učil.",
          "Som dnes učil sa."
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Dnes som sa učil.. Объяснение — в разделе «Правила»."
      },
      {
        "id": 191,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Dnes ___ učím.",
        "options": [
          "sa",
          "som",
          "je"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «sa»."
      },
      {
        "id": 192,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "___ sa Anna.",
        "options": [
          "Volám",
          "Voláš",
          "Volajú"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «Volám»."
      },
      {
        "id": 193,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Kúpim ___ knihu. (себе)",
        "options": [
          "si",
          "sa",
          "som"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «si»."
      },
      {
        "id": 194,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Dnes som ___ učil.",
        "options": [
          "sa",
          "si",
          "je"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «sa»."
      },
      {
        "id": 195,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "On ___ umýva.",
        "options": [
          "sa",
          "si",
          "som"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «sa»."
      },
      {
        "id": 196,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Ako ___ máte?",
        "options": [
          "sa",
          "si",
          "ste"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «sa»."
      },
      {
        "id": 197,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Ja ___ po slovensky.",
        "options": [
          "sa učím",
          "učím sa som",
          "sa učia"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «sa učím»."
      },
      {
        "id": 198,
        "tenseId": "reflexive",
        "kind": "fill",
        "sentence": "Dnes ___ doma. (я учился)",
        "options": [
          "som sa učil",
          "sa som učil",
          "som učil je"
        ],
        "answer": 0,
        "hint": "Возвратные частицы и порядок",
        "explanation": "Здесь подходит «som sa učil»."
      }
    ]
  },
  {
    "id": "past",
    "title": "Прошедшее время",
    "emoji": "🧩",
    "color": "from-indigo-500 to-violet-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Форма на -l и вспомогательный глагол",
        "body": "Čítať → čítal / čítala / čítalo, во множественном — čítali. В 1-м и 2-м лице добавляют som, si, sme, ste. В 3-м лице je / sú НЕ добавляют. Окончание зависит от рода говорящего или подлежащего.",
        "examples": [
          {
            "en": "Včera som bol doma.",
            "ru": "Вчера я был дома."
          },
          {
            "en": "Anna čítala knihu.",
            "ru": "Анна читала книгу."
          }
        ]
      },
      {
        "title": "Полная парадигма",
        "headers": [
          "Лицо",
          "Прошедшее čítať"
        ],
        "rows": [
          [
            "ja",
            "čítal som / čítala som"
          ],
          [
            "ty",
            "čítal si / čítala si"
          ],
          [
            "on",
            "čítal"
          ],
          [
            "ona",
            "čítala"
          ],
          [
            "ono",
            "čítalo"
          ],
          [
            "my",
            "čítali sme"
          ],
          [
            "vy",
            "čítali ste"
          ],
          [
            "oni / ony",
            "čítali"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Важные исключения",
        "headers": [
          "Инфинитив",
          "Прошедшее, мужской род"
        ],
        "rows": [
          [
            "byť",
            "bol"
          ],
          [
            "ísť",
            "išiel"
          ],
          [
            "jesť",
            "jedol"
          ],
          [
            "niesť",
            "niesol"
          ],
          [
            "môcť",
            "mohol"
          ],
          [
            "chcieť",
            "chcel"
          ],
          [
            "nájsť",
            "našiel"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Отрицание и vy",
        "body": "Nečítal som. Nebol som doma. Dnes som nepracoval. При вежливом обращении к одному человеку: Boli ste doma? Вспомогательное ste и форма boli остаются множественными. Не переводите русское «вы были» через si."
      }
    ],
    "exercises": [
      {
        "id": 41,
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
        "id": 42,
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
        "id": 199,
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
        "id": 200,
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
        "id": 201,
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
        "id": 202,
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
        "id": 203,
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
        "id": 204,
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
        "id": 205,
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
        "id": 206,
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
      }
    ]
  },
  {
    "id": "future",
    "title": "Будущее время",
    "emoji": "❓",
    "color": "from-rose-500 to-pink-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Byť в будущем",
        "headers": [
          "Лицо",
          "Форма"
        ],
        "rows": [
          [
            "ja",
            "budem"
          ],
          [
            "ty",
            "budeš"
          ],
          [
            "on / ona",
            "bude"
          ],
          [
            "my",
            "budeme"
          ],
          [
            "vy",
            "budete"
          ],
          [
            "oni / ony",
            "budú"
          ]
        ],
        "body": "Формы и примеры в таблице.",
        "examples": [
          {
            "en": "Zajtra budem študovať.",
            "ru": "Завтра я буду учиться."
          },
          {
            "en": "Napíšem vám zajtra.",
            "ru": "Я напишу вам завтра."
          }
        ]
      },
      {
        "title": "Несовершенный вид",
        "body": "Budem + инфинитив: budem čítať — буду читать. Nebudem pracovať — не буду работать. Возвратное: Budem sa učiť. Не используйте форму настоящего после budem: не budem čítam."
      },
      {
        "title": "Совершенный вид",
        "body": "Napíšem — напишу; prečítam — прочитаю. Форма выглядит как настоящее, но обозначает будущее завершённое действие. Не говорите budem napísať для обычного будущего. Вид и время нужно учить вместе."
      },
      {
        "title": "Движение",
        "body": "Ísť → pôjdem, pôjdeš, pôjde, pôjdeme, pôjdete, pôjdu. Отрицание: nepôjdem. Chodiť → budem chodiť. Будущее иногда передаётся настоящим с указанием времени: Zajtra idem do školy."
      }
    ],
    "exercises": [
      {
        "id": 43,
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
        "id": 44,
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
        "id": 207,
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
        "id": 208,
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
        "id": 209,
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
        "id": 210,
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
        "id": 211,
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
        "id": 212,
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
        "id": 213,
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
        "id": 214,
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
      }
    ]
  },
  {
    "id": "aspect",
    "title": "Вид глагола: процесс и результат",
    "emoji": "⚡",
    "color": "from-blue-500 to-blue-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Как в русском, но не всегда одна приставка",
        "body": "Несовершенный вид описывает процесс, повторение или привычку: čítať, písať, kupovať. Совершенный — завершённое действие: prečítať, napísať, kúpiť. Не у каждого глагола есть простая пара; приставка может менять значение.",
        "examples": [
          {
            "en": "Čítal som knihu.",
            "ru": "Я читал книгу."
          },
          {
            "en": "Prečítal som knihu.",
            "ru": "Я прочитал книгу."
          }
        ]
      },
      {
        "title": "Нужные пары",
        "headers": [
          "Процесс",
          "Результат",
          "Перевод"
        ],
        "rows": [
          [
            "čítať",
            "prečítať",
            "читать / прочитать"
          ],
          [
            "písať",
            "napísať",
            "писать / написать"
          ],
          [
            "robiť",
            "urobiť",
            "делать / сделать"
          ],
          [
            "kupovať",
            "kúpiť",
            "покупать / купить"
          ],
          [
            "platiť",
            "zaplatiť",
            "платить / заплатить"
          ],
          [
            "učiť sa",
            "naučiť sa",
            "учиться / выучить"
          ],
          [
            "hľadať",
            "nájsť",
            "искать / найти"
          ],
          [
            "brať",
            "vziať",
            "брать / взять"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Сравните три времени",
        "body": "Čítam — читаю сейчас. Čítal som — читал; завершение не утверждается. Prečítal som — прочитал до конца. Budem čítať — буду читать. Prečítam — прочитаю. Начинайте с 5–8 пар, а не со списка приставок."
      }
    ],
    "exercises": [
      {
        "id": 45,
        "tenseId": "aspect",
        "kind": "choose",
        "sentence": "Как выразить результат: «напишу»?",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "píšem",
          "napíšem",
          "budem písať"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: napíšem. Объяснение — в разделе «Правила»."
      },
      {
        "id": 46,
        "tenseId": "aspect",
        "kind": "choose",
        "sentence": "Пара к kupovať",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "kúpiť",
          "platiť",
          "predať"
        ],
        "answer": 0,
        "explanation": "Правильный ответ: kúpiť. Объяснение — в разделе «Правила»."
      },
      {
        "id": 215,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Zajtra ___ list. (напишу)",
        "options": [
          "napíšem",
          "píšem",
          "písal"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем napíšem."
      },
      {
        "id": 216,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Každý deň ___ knihy.",
        "options": [
          "čítam",
          "prečítam",
          "prečítal"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем čítam."
      },
      {
        "id": 217,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Včera som ___ celú knihu. (прочитал до конца)",
        "options": [
          "prečítal",
          "čítal",
          "čítať"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем prečítal."
      },
      {
        "id": 218,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Zajtra budem ___.",
        "options": [
          "čítať",
          "prečítať",
          "prečítam"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем čítať."
      },
      {
        "id": 219,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Kupovať → ___ (купить)",
        "options": [
          "kúpiť",
          "predať",
          "platiť"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем kúpiť."
      },
      {
        "id": 220,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Hľadať → ___ (найти)",
        "options": [
          "nájsť",
          "brať",
          "ísť"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем nájsť."
      },
      {
        "id": 221,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Učiť sa → ___ (выучить)",
        "options": [
          "naučiť sa",
          "učiť",
          "študovať"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем naučiť sa."
      },
      {
        "id": 222,
        "tenseId": "aspect",
        "kind": "fill",
        "sentence": "Platiť → ___ (заплатить)",
        "options": [
          "zaplatiť",
          "kúpiť",
          "predať"
        ],
        "answer": 0,
        "hint": "Процесс или завершённый результат",
        "explanation": "По указанному значению выбираем zaplatiť."
      }
    ]
  },
  {
    "id": "imperative",
    "title": "Повелительное и условное наклонение",
    "emoji": "🎨",
    "color": "from-cyan-500 to-blue-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Команды и просьбы",
        "headers": [
          "Инфинитив",
          "ty",
          "vy"
        ],
        "rows": [
          [
            "čítať",
            "čítaj",
            "čítajte"
          ],
          [
            "hovoriť",
            "hovor",
            "hovorte"
          ],
          [
            "písať",
            "píš",
            "píšte"
          ],
          [
            "ísť",
            "choď",
            "choďte"
          ],
          [
            "prísť",
            "príď",
            "príďte"
          ],
          [
            "byť",
            "buď",
            "buďte"
          ],
          [
            "jesť",
            "jedz",
            "jedzte"
          ],
          [
            "piť",
            "pi",
            "pite"
          ]
        ],
        "body": "Формы и примеры в таблице.",
        "examples": [
          {
            "en": "Zopakujte to, prosím.",
            "ru": "Повторите это, пожалуйста."
          },
          {
            "en": "Chcela by som sa opýtať.",
            "ru": "Я хотела бы спросить."
          }
        ]
      },
      {
        "title": "Вежливость и отрицание",
        "body": "Добавьте prosím. Nehovorte tak rýchlo, prosím. Для запрета часто используется несовершенный вид: Neotváraj dvere. Готовая просьба Môžete…? обычно мягче прямого приказа."
      },
      {
        "title": "Хотел бы и если бы",
        "body": "Условное: форма на -l + by + som / si / sme / ste. Chcel by som, chcela by som, chceli by sme. В 3-м лице: chcel by. Keby som mal čas, prišiel by som. После keby не добавляют ещё одно by."
      }
    ],
    "exercises": [
      {
        "id": 47,
        "tenseId": "imperative",
        "kind": "choose",
        "sentence": "Вежливо: говорите",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "hovor",
          "hovorte",
          "hovorí"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: hovorte. Объяснение — в разделе «Правила»."
      },
      {
        "id": 48,
        "tenseId": "imperative",
        "kind": "choose",
        "sentence": "Я хотел бы (мужчина)",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "Chcel som by.",
          "Chcel by som.",
          "Chcem by som."
        ],
        "answer": 1,
        "explanation": "Правильный ответ: Chcel by som.. Объяснение — в разделе «Правила»."
      },
      {
        "id": 223,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "___ to, prosím. (повторите)",
        "options": [
          "Zopakujte",
          "Zopakuj",
          "Zopakujú"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: Zopakujte."
      },
      {
        "id": 224,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "___ pomalšie, prosím. (говорите)",
        "options": [
          "Hovorte",
          "Hovor",
          "Hovorí"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: Hovorte."
      },
      {
        "id": 225,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "___ knihu! (ты, читай)",
        "options": [
          "Čítaj",
          "Čítajte",
          "Číta"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: Čítaj."
      },
      {
        "id": 226,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "___ tu! (ты, будь)",
        "options": [
          "Buď",
          "Buďte",
          "Budem"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: Buď."
      },
      {
        "id": 227,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "Chcel ___ som kávu.",
        "options": [
          "by",
          "je",
          "sa"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: by."
      },
      {
        "id": 228,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "Chcela by ___ kávu. (я)",
        "options": [
          "som",
          "si",
          "je"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: som."
      },
      {
        "id": 229,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "Keby ___ mal čas, prišiel by som.",
        "options": [
          "som",
          "by",
          "je"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: som."
      },
      {
        "id": 230,
        "tenseId": "imperative",
        "kind": "fill",
        "sentence": "___ vodu, prosím. (вы, пейте)",
        "options": [
          "Pite",
          "Pi",
          "Pijú"
        ],
        "answer": 0,
        "hint": "Просьбы и условное наклонение",
        "explanation": "Правильная форма: Pite."
      }
    ]
  },
  {
    "id": "comparison",
    "title": "Наречия, сравнение и связки",
    "emoji": "📚",
    "color": "from-violet-500 to-purple-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "Прилагательное или наречие",
        "body": "Dobrý študent — хороший студент; študuje dobre — учится хорошо. Pekný → pekne, rýchly → rýchlo, pomalý → pomaly. Наречие не согласуется с существительным.",
        "examples": [
          {
            "en": "Hovorte pomalšie, prosím.",
            "ru": "Говорите медленнее, пожалуйста."
          },
          {
            "en": "Učím sa, pretože mám skúšku.",
            "ru": "Я учусь, потому что у меня экзамен."
          }
        ]
      },
      {
        "title": "Степени сравнения",
        "headers": [
          "Основа",
          "Сравнительная",
          "Превосходная"
        ],
        "rows": [
          [
            "dobrý",
            "lepší",
            "najlepší"
          ],
          [
            "zlý",
            "horší",
            "najhorší"
          ],
          [
            "veľký",
            "väčší",
            "najväčší"
          ],
          [
            "malý",
            "menší",
            "najmenší"
          ],
          [
            "pekný",
            "krajší",
            "najkrajší"
          ],
          [
            "rýchly",
            "rýchlejší",
            "najrýchlejší"
          ]
        ],
        "body": "Формы и примеры в таблице."
      },
      {
        "title": "Чем и потому что",
        "body": "Lepší ako… — лучше, чем… Этот курс быстрее: Tento kurz je rýchlejší ako ten. A связывает, ale противопоставляет, pretože объясняет причину, preto — поэтому. Ak для реального условия; keby для условного наклонения."
      },
      {
        "title": "Сложные предложения",
        "body": "Myslím, že… — Думаю, что… Neviem, či… — Не знаю, ли… Keď skončí prednáška, pôjdem domov. — Когда закончится лекция, пойду домой. В письме части сложного предложения обычно отделяют запятой."
      }
    ],
    "exercises": [
      {
        "id": 49,
        "tenseId": "comparison",
        "kind": "choose",
        "sentence": "Сравнительная степень dobrý",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "dobrší",
          "lepší",
          "najlepší"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: lepší. Объяснение — в разделе «Правила»."
      },
      {
        "id": 50,
        "tenseId": "comparison",
        "kind": "choose",
        "sentence": "«Потому что»",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "preto",
          "pretože",
          "ale"
        ],
        "answer": 1,
        "explanation": "Правильный ответ: pretože. Объяснение — в разделе «Правила»."
      },
      {
        "id": 231,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "___ študent",
        "options": [
          "dobrý",
          "dobre",
          "dobrá"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит dobrý."
      },
      {
        "id": 232,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Študuje ___.",
        "options": [
          "dobre",
          "dobrý",
          "dobrá"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит dobre."
      },
      {
        "id": 233,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Dobrý → ___ (лучше)",
        "options": [
          "lepší",
          "dobrší",
          "najlepší"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит lepší."
      },
      {
        "id": 234,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Zlý → ___ (хуже)",
        "options": [
          "horší",
          "zlší",
          "najhorší"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит horší."
      },
      {
        "id": 235,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Veľký → ___ (больше)",
        "options": [
          "väčší",
          "veľší",
          "najväčší"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит väčší."
      },
      {
        "id": 236,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Učím sa, ___ mám skúšku.",
        "options": [
          "pretože",
          "preto",
          "ale"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит pretože."
      },
      {
        "id": 237,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Myslím, ___ je doma.",
        "options": [
          "že",
          "preto",
          "ako"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит že."
      },
      {
        "id": 238,
        "tenseId": "comparison",
        "kind": "fill",
        "sentence": "Tento kurz je lepší ___ ten.",
        "options": [
          "ako",
          "že",
          "preto"
        ],
        "answer": 0,
        "hint": "Согласование, сравнение и связки",
        "explanation": "Здесь подходит ako."
      }
    ]
  },
  {
    "id": "university",
    "title": "Словацкий в вузе: первый семестр",
    "emoji": "🔤",
    "color": "from-yellow-500 to-orange-600",
    "intro": "A2 · правила и упражнения",
    "rules": [
      {
        "title": "До начала занятий",
        "body": "Найдите študijné oddelenie, уточните zápis, rozvrh и študijný plán. Prijímacie skúšky — вступительные экзамены, skúškové obdobie — сессия, opravný termín — пересдача. Конкретные правила и документы зависят от вуза: приложение не содержит юридических требований к поступлению.",
        "examples": [
          {
            "en": "Kde je študijné oddelenie?",
            "ru": "Где учебный отдел?"
          },
          {
            "en": "Dokedy máme odovzdať úlohu?",
            "ru": "До какого срока нужно сдать задание?"
          }
        ]
      },
      {
        "title": "На занятии",
        "body": "Prednáška — лекция, seminár — семинар, cvičenie — практическое занятие. Вопросы: Kde je učebňa? Čo máme urobiť? Dokedy máme odovzdať úlohu? — Где аудитория? Что нужно сделать? До какого срока нужно сдать задание?"
      },
      {
        "title": "Письмо преподавателю",
        "body": "Начните Dobrý deň, затем кратко представьтесь: Volám sa… Som študent / študentka… Затем просьба: Chcel by som sa opýtať… / Chcela by som sa opýtať… Закончите Ďakujem za odpoveď. S pozdravom + имя. Более формальное обращение: Vážený pán profesor / Vážená pani profesorka."
      },
      {
        "title": "Маршрут после A2",
        "body": "Словарь B1 здесь нужен как мост к учебной лексике. Для полноценных лекций и поступления может понадобиться B1 / B2 и профильная терминология. Уточните языковые требования выбранного вуза. Прохождение приложения не равно официальному сертификату."
      }
    ],
    "exercises": [
      {
        "id": 51,
        "tenseId": "university",
        "kind": "choose",
        "sentence": "Лекция",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "prednáška",
          "prihláška",
          "príloha"
        ],
        "answer": 0,
        "explanation": "Правильный ответ: prednáška. Объяснение — в разделе «Правила»."
      },
      {
        "id": 52,
        "tenseId": "university",
        "kind": "choose",
        "sentence": "Дата пересдачи",
        "hint": "Проверь правило перед ответом.",
        "options": [
          "opravný termín",
          "prvý semester",
          "študijný plán"
        ],
        "answer": 0,
        "explanation": "Правильный ответ: opravný termín. Объяснение — в разделе «Правила»."
      },
      {
        "id": 239,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Kde je študijné ___?",
        "options": [
          "oddelenie",
          "obdobie",
          "odovzdanie"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: oddelenie."
      },
      {
        "id": 240,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Kedy je opravný ___?",
        "options": [
          "termín",
          "semester",
          "zápis"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: termín."
      },
      {
        "id": 241,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Dokedy máme ___ úlohu?",
        "options": [
          "odovzdať",
          "odísť",
          "prísť"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: odovzdať."
      },
      {
        "id": 242,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Potrebujem potvrdenie o ___.",
        "options": [
          "štúdiu",
          "štúdium",
          "štúdia"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: štúdiu."
      },
      {
        "id": 243,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Idem na ___.",
        "options": [
          "prednášku",
          "prednáška",
          "prednáške"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: prednášku."
      },
      {
        "id": 244,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Som na ___.",
        "options": [
          "univerzite",
          "univerzitu",
          "univerzita"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: univerzite."
      },
      {
        "id": 245,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Chcem ___ na univerzite.",
        "options": [
          "študovať",
          "študujem",
          "študoval"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: študovať."
      },
      {
        "id": 246,
        "tenseId": "university",
        "kind": "fill",
        "sentence": "Ďakujem za ___.",
        "options": [
          "odpoveď",
          "odpovedi",
          "odpoveďou"
        ],
        "answer": 0,
        "hint": "Лексика вуза и управление",
        "explanation": "Правильное сочетание: odpoveď."
      }
    ]
  }
];
