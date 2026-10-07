import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProgress,
  resetProgress,
} from "../data/storage.ts";

import { getUserWords, importUserWords } from "../data/words.ts";
import { getUserCategories, getRemovedCategoryIds, refreshCategories } from "../data/categories.ts";
import { getCompletedLessons } from "../data/courseProgress.ts";

const STORAGE_KEY = "lingua_slovak_original_progress";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [exportText, setExportText] = useState<string | null>(null);
  const [importText, setImportText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleReset = () => {
    if (window.confirm("Сбросить весь прогресс? Это действие необратимо.")) {
      resetProgress();
      localStorage.removeItem("lingua_slovak_original_lessons");
      navigate("/");
    }
  };

  const handleExport = () => {
    setExportText(JSON.stringify({format:"lingua-mini-slovak-2",progress:getProgress(),userWords:getUserWords(),userCategories:getUserCategories(),removedCategories:getRemovedCategoryIds(),lessons:getCompletedLessons()}));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportText || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // буфер недоступен — пользователь выделит текст вручную
    }
  };

  const handleImport = () => {
    const text = importText.trim();
    if (!text) return;
    try {
      const parsed = JSON.parse(text);
      if (!parsed || parsed.format!=="lingua-mini-slovak-2" || !Array.isArray(parsed.progress?.learnedWords) || !Array.isArray(parsed.progress?.excludedWords) || !Array.isArray(parsed.progress?.quizResults) || !Array.isArray(parsed.progress?.grammarResults) || !Array.isArray(parsed.progress?.irregularsLearned) || !Array.isArray(parsed.userWords) || !Array.isArray(parsed.userCategories) || !Array.isArray(parsed.removedCategories) || !Array.isArray(parsed.lessons)) throw new Error("bad");
      if (!window.confirm("Заменить текущий прогресс, свои слова и категории данными из копии?")) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed.progress));
      localStorage.setItem("lingua_slovak_original_user_categories_v1", JSON.stringify(parsed.userCategories));
      localStorage.setItem("lingua_slovak_original_removed_categories_v1", JSON.stringify(parsed.removedCategories));
      localStorage.setItem("lingua_slovak_original_lessons", JSON.stringify(parsed.lessons));
      refreshCategories();
      importUserWords(JSON.stringify(parsed.userWords));
      window.alert("Прогресс восстановлен!");
      navigate("/");
    } catch {
      window.alert("Неверный формат резервной копии.");
    }
  };

  return (
    <div className="px-5 pt-8 pb-4 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
        >
          ←
        </button>
        <h1 className="text-2xl font-display font-bold text-white">Настройки</h1>
      </div>

      {/* Backup */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
          💾 Резервная копия
        </h2>
        <p className="text-xs text-slate-500 mb-3">
          Сохрани прогресс, уроки, свои слова и категории в текст и восстанови его на другом устройстве или после переустановки.
        </p>
        <button
          onClick={handleExport}
          className="w-full py-3 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-300 text-sm font-medium active:scale-[0.98] transition-all"
        >
          Создать резервную копию
        </button>
        {exportText && (
          <div className="mt-3">
            <textarea
              readOnly
              value={exportText}
              onFocus={(e) => e.target.select()}
              className="w-full h-24 p-3 rounded-xl bg-slate-800 border border-slate-700/50 text-slate-300 text-xs font-mono resize-none"
            />
            <button
              onClick={handleCopy}
              className="w-full mt-2 py-2.5 rounded-xl bg-slate-800 border border-slate-700/50 text-slate-300 text-sm font-medium active:scale-[0.98] transition-all"
            >
              {copied ? "Скопировано ✓" : "Копировать"}
            </button>
          </div>
        )}
        <label className="text-xs text-slate-400 mt-4 mb-2 block">Восстановить из копии</label>
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Вставь сюда сохранённый текст…"
          className="w-full h-24 p-3 rounded-xl bg-slate-800 border border-slate-700/50 text-slate-200 text-xs font-mono resize-none mb-2"
        />
        <button
          onClick={handleImport}
          disabled={!importText.trim()}
          className="w-full py-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-medium active:scale-[0.98] transition-all disabled:opacity-40"
        >
          Восстановить прогресс
        </button>
      </div>

      {/* Danger zone */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-300 mb-3">Данные</h2>
        <button
          onClick={handleReset}
          className="w-full py-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 font-medium active:scale-[0.98] transition-all"
        >
          Сбросить прогресс
        </button>
      </div>
    </div>
  );
}
