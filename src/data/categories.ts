import { Category } from "./types.ts";

// Встроенные категории. Их можно скрыть через менеджер словаря;
// пользовательские категории добавляются поверх этого списка.
export const baseCategories: Category[] = [
  {
    "id": "sk-01",
    "name": "Основы",
    "emoji": "📝",
    "color": "from-blue-500 to-blue-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-02",
    "name": "Связки и наречия",
    "emoji": "🔗",
    "color": "from-cyan-500 to-blue-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-03",
    "name": "Предлоги и местоимения",
    "emoji": "📍",
    "color": "from-violet-500 to-purple-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-04",
    "name": "Глаголы: каждый день",
    "emoji": "⚡",
    "color": "from-yellow-500 to-orange-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-05",
    "name": "Глаголы: действия",
    "emoji": "🚶",
    "color": "from-emerald-500 to-teal-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-06",
    "name": "Глаголы: учёба и общение",
    "emoji": "🎓",
    "color": "from-indigo-500 to-violet-600",
    "description": "50 слов · B1"
  },
  {
    "id": "sk-07",
    "name": "Прилагательные: основы",
    "emoji": "🎨",
    "color": "from-rose-500 to-pink-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-08",
    "name": "Прилагательные: качества",
    "emoji": "💭",
    "color": "from-blue-500 to-blue-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-09",
    "name": "Семья и люди",
    "emoji": "👨‍👩‍👧",
    "color": "from-cyan-500 to-blue-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-10",
    "name": "Дом и жильё",
    "emoji": "🏠",
    "color": "from-violet-500 to-purple-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-11",
    "name": "Еда и напитки",
    "emoji": "🍎",
    "color": "from-yellow-500 to-orange-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-12",
    "name": "Покупки и ресторан",
    "emoji": "🛒",
    "color": "from-emerald-500 to-teal-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-13",
    "name": "Город и транспорт",
    "emoji": "🚍",
    "color": "from-indigo-500 to-violet-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-14",
    "name": "Тело и здоровье",
    "emoji": "🩺",
    "color": "from-rose-500 to-pink-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-15",
    "name": "Одежда и личные вещи",
    "emoji": "👕",
    "color": "from-blue-500 to-blue-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-16",
    "name": "Время и числа",
    "emoji": "🔢",
    "color": "from-cyan-500 to-blue-600",
    "description": "50 слов · A1"
  },
  {
    "id": "sk-17",
    "name": "Календарь и природа",
    "emoji": "📅",
    "color": "from-violet-500 to-purple-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-18",
    "name": "Учёба и вуз",
    "emoji": "🏫",
    "color": "from-yellow-500 to-orange-600",
    "description": "50 слов · A2"
  },
  {
    "id": "sk-19",
    "name": "Вуз: академическая лексика",
    "emoji": "📖",
    "color": "from-emerald-500 to-teal-600",
    "description": "50 слов · B1"
  },
  {
    "id": "sk-20",
    "name": "Документы, работа и техника",
    "emoji": "💻",
    "color": "from-indigo-500 to-violet-600",
    "description": "50 слов · B1"
  },
  {
    "id": "phrases",
    "name": "Готовые фразы",
    "emoji": "💬",
    "color": "from-cyan-500 to-blue-600",
    "description": "129 фраз для жизни и вуза"
  },
  {
    "id": "none",
    "name": "Без категории",
    "emoji": "🗂️",
    "color": "from-slate-500 to-slate-600",
    "description": "Свои слова"
  }
];

const USER_CATEGORIES_KEY = "lingua_slovak_original_user_categories_v1";
const REMOVED_CATEGORIES_KEY = "lingua_slovak_original_removed_categories_v1";

// Палитра градиентов для новых пользовательских категорий.
const COLOR_PALETTE = [
  "from-blue-500 to-blue-600",
  "from-emerald-500 to-emerald-600",
  "from-orange-500 to-orange-600",
  "from-violet-500 to-violet-600",
  "from-pink-500 to-pink-600",
  "from-cyan-500 to-cyan-600",
  "from-amber-500 to-amber-600",
  "from-teal-500 to-teal-600",
  "from-rose-500 to-rose-600",
  "from-indigo-500 to-indigo-600",
  "from-lime-500 to-lime-600",
  "from-fuchsia-500 to-fuchsia-600",
];

function readList<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getUserCategories(): Category[] {
  return readList<Partial<Category>>(USER_CATEGORIES_KEY)
    .filter((item) => item && typeof item === "object" && item.id && item.name)
    .map((item) => ({
      id: String(item.id),
      name: String(item.name),
      emoji: String(item.emoji || "🏷️"),
      color: String(item.color || COLOR_PALETTE[0]),
      description: String(item.description || ""),
    }));
}

function saveUserCategories(items: Category[]) {
  localStorage.setItem(USER_CATEGORIES_KEY, JSON.stringify(items));
}

export function getRemovedCategoryIds(): string[] {
  return readList<string>(REMOVED_CATEGORIES_KEY).map(String);
}

function saveRemovedCategoryIds(ids: string[]) {
  localStorage.setItem(
    REMOVED_CATEGORIES_KEY,
    JSON.stringify(Array.from(new Set(ids)))
  );
}

function buildCategories(): Category[] {
  const removed = new Set(getRemovedCategoryIds());
  const base = baseCategories.filter((cat) => !removed.has(cat.id));
  const user = getUserCategories().filter((cat) => !removed.has(cat.id));
  return [...base, ...user];
}

// Живой список категорий. Пересобирается через refreshCategories().
export let categories: Category[] = buildCategories();

export function refreshCategories(): Category[] {
  categories = buildCategories();
  return categories;
}

export function isUserCategory(id: string): boolean {
  return getUserCategories().some((cat) => cat.id === id);
}

function slugify(name: string): string {
  const base = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "cat";
}

function notifyChanged() {
  window.dispatchEvent(new CustomEvent("lingua:categories-changed"));
}

export function addCategory(input: {
  name: string;
  emoji?: string;
  description?: string;
  color?: string;
}): Category {
  const name = input.name.trim();
  if (!name) throw new Error("Введите название категории");

  const existing = [...baseCategories, ...getUserCategories()];
  if (existing.some((cat) => cat.name.toLowerCase() === name.toLowerCase())) {
    throw new Error("Такая категория уже есть");
  }

  const usedIds = new Set(existing.map((cat) => cat.id));
  let id = slugify(name);
  if (usedIds.has(id)) {
    let n = 2;
    while (usedIds.has(`${id}-${n}`)) n += 1;
    id = `${id}-${n}`;
  }

  const user = getUserCategories();
  const color = input.color || COLOR_PALETTE[user.length % COLOR_PALETTE.length];
  const category: Category = {
    id,
    name,
    emoji: (input.emoji || "🏷️").trim() || "🏷️",
    color,
    description: (input.description || "").trim(),
  };

  saveUserCategories([...user, category]);
  // На случай, если id раньше был скрыт — снимаем пометку удаления.
  saveRemovedCategoryIds(getRemovedCategoryIds().filter((rid) => rid !== id));
  refreshCategories();
  notifyChanged();
  return category;
}

export function removeCategory(id: string): void {
  if (isUserCategory(id)) {
    // Пользовательскую категорию удаляем полностью.
    saveUserCategories(getUserCategories().filter((cat) => cat.id !== id));
  } else {
    // Встроенную — прячем (слова остаются в словаре).
    saveRemovedCategoryIds([...getRemovedCategoryIds(), id]);
  }
  refreshCategories();
  notifyChanged();
}

export function restoreCategory(id: string): void {
  saveRemovedCategoryIds(getRemovedCategoryIds().filter((rid) => rid !== id));
  refreshCategories();
  notifyChanged();
}
