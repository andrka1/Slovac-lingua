import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import AlphabetPage from "./pages/AlphabetPage.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import PhrasesPage from "./pages/PhrasesPage.tsx";
import NumbersPage from "./pages/NumbersPage.tsx";
import MatchingPage from "./pages/MatchingPage.tsx";
import StatsPage from "./pages/StatsPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import FlashcardsPage from "./pages/FlashcardsPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import SpellingPage from "./pages/SpellingPage.tsx";
import GrammarTopicPage from "./pages/GrammarTopicPage.tsx";
import SentenceBuilderPage from "./pages/SentenceBuilderPage.tsx";
import GrammarPage from "./pages/GrammarPage.tsx";
import TensesPage from "./pages/TensesPage.tsx";
import IrregularsPage from "./pages/IrregularsPage.tsx";
import WordsManagerPage from "./pages/WordsManagerPage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import BottomNav from "./components/BottomNav.tsx";
import Onboarding from "./components/Onboarding.tsx";

const ONBOARDING_KEY = "lingua_slovak_original_onboarding_seen_v1";

export default function App() {
  const location = useLocation();
  const [showOnboarding, setShowOnboarding] = useState(
    () => !localStorage.getItem(ONBOARDING_KEY)
  );

  if (showOnboarding) {
    return (
      <Onboarding
        onDone={() => {
          try {
            localStorage.setItem(ONBOARDING_KEY, "1");
          } catch {
            // localStorage недоступен — просто продолжаем
          }
          setShowOnboarding(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto relative">
      <main className="flex-1 pb-20 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alphabet" element={<AlphabetPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/course/:id" element={<GrammarTopicPage key={location.pathname} />} />
          <Route path="/phrases" element={<PhrasesPage />} />
          <Route path="/numbers" element={<NumbersPage />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/flashcards" element={<FlashcardsPage key={location.pathname} />} />
          <Route path="/flashcards/:category" element={<FlashcardsPage key={location.pathname} />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/spelling" element={<SpellingPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/grammar/tenses" element={<TensesPage />} />
          <Route path="/grammar/topic/:id" element={<GrammarTopicPage key={location.pathname} />} />
          <Route path="/grammar/builder" element={<SentenceBuilderPage />} />
          <Route path="/grammar/irregulars" element={<IrregularsPage key={location.pathname} />} />
          <Route path="/grammar/exceptions" element={<IrregularsPage key={location.pathname} />} />
          <Route path="/words" element={<WordsManagerPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
