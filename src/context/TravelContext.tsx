import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface TravelStore {
  nickname: string | null;
  theme: "light" | "dark";
  favorites: string[];
  toVisit: string[];
  visited: string[];
  recentlyViewed: string[];
  setNickname: (name: string) => void;
  toggleTheme: () => void;
  toggleFavorite: (id: string) => void;
  toggleToVisit: (id: string) => void;
  markVisited: (id: string) => void;
  addRecentlyViewed: (id: string) => void;
  isFavorite: (id: string) => boolean;
  isToVisit: (id: string) => boolean;
  isVisited: (id: string) => boolean;
}

const TravelContext = createContext<TravelStore | null>(null);

function loadData<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function saveData(key: string, val: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch {}
}

export function TravelProvider({ children }: { children: ReactNode }) {
  const [nickname, setNicknameState] = useState<string | null>(() =>
    loadData("wl_nickname", null),
  );
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    loadData("wl_theme", "light"),
  );
  const [favorites, setFavorites] = useState<string[]>(() =>
    loadData("wl_favorites", []),
  );
  const [toVisit, setToVisit] = useState<string[]>(() =>
    loadData("wl_tovisit", []),
  );
  const [visited, setVisited] = useState<string[]>(() =>
    loadData("wl_visited", []),
  );
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() =>
    loadData("wl_recent", []),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setNickname = (n: string) => {
    setNicknameState(n);
    saveData("wl_nickname", n);
  };
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    saveData("wl_theme", t);
  };

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id)
      ? favorites.filter((x) => x !== id)
      : [...favorites, id];
    setFavorites(next);
    saveData("wl_favorites", next);
  };
  const toggleToVisit = (id: string) => {
    const next = toVisit.includes(id)
      ? toVisit.filter((x) => x !== id)
      : [...toVisit, id];
    setToVisit(next);
    saveData("wl_tovisit", next);
  };
  const markVisited = (id: string) => {
    const next = visited.includes(id)
      ? visited.filter((x) => x !== id)
      : [...visited, id];
    setVisited(next);
    saveData("wl_visited", next);
  };
  const addRecentlyViewed = (id: string) => {
    const next = [id, ...recentlyViewed.filter((x) => x !== id)].slice(0, 6);
    setRecentlyViewed(next);
    saveData("wl_recent", next);
  };

  return (
    <TravelContext.Provider
      value={{
        nickname,
        theme,
        favorites,
        toVisit,
        visited,
        recentlyViewed,
        setNickname,
        toggleTheme,
        toggleFavorite,
        toggleToVisit,
        markVisited,
        addRecentlyViewed,
        isFavorite: (id) => favorites.includes(id),
        isToVisit: (id) => toVisit.includes(id),
        isVisited: (id) => visited.includes(id),
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  const ctx = useContext(TravelContext);
  if (!ctx) throw new Error("useTravel must be used within TravelProvider");
  return ctx;
}
