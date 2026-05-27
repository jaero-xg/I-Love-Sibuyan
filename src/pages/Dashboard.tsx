import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Bookmark,
  Check,
  Clock,
  Edit3,
  Trash2,
  ArrowRight,
} from "lucide-react";
import { useTravel } from "../context/TravelContext";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/ui/DestinationCard";

type Tab = "favorites" | "tovisit" | "visited" | "recent";

export default function Dashboard() {
  const {
    nickname,
    favorites,
    toVisit,
    visited,
    recentlyViewed,
    setNickname,
    toggleFavorite,
    toggleToVisit,
    markVisited,
  } = useTravel();
  const [activeTab, setActiveTab] = useState<Tab>("favorites");
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(nickname || "");

  useEffect(() => {
    document.title = `${nickname || "My"} Dashboard — I Love Sibuyan`;
  }, [nickname]);

  const favDests = favorites
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean) as typeof destinations;
  const toVisitDests = toVisit
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean) as typeof destinations;
  const visitedDests = visited
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean) as typeof destinations;
  const recentDests = recentlyViewed
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean) as typeof destinations;

  const tabs = [
    {
      id: "favorites" as Tab,
      label: "Favorites",
      icon: Heart,
      count: favorites.length,
    },
    {
      id: "tovisit" as Tab,
      label: "Bucket List",
      icon: Bookmark,
      count: toVisit.length,
    },
    {
      id: "visited" as Tab,
      label: "Visited",
      icon: Check,
      count: visited.length,
    },
    {
      id: "recent" as Tab,
      label: "Recent",
      icon: Clock,
      count: recentlyViewed.length,
    },
  ];

  const activeDests = {
    favorites: favDests,
    tovisit: toVisitDests,
    visited: visitedDests,
    recent: recentDests,
  }[activeTab];

  const handleNameSave = () => {
    if (nameInput.trim()) setNickname(nameInput.trim());
    setEditingName(false);
  };

  return (
    <div className="page-enter min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <motion.div
          className="relative bg-stone-900 dark:bg-stone-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-white/5 rounded-full translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <p className="label-sm text-white/50 mb-3">Personal dashboard</p>

            {editingName ? (
              <div className="flex items-center gap-3 mb-2">
                <input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleNameSave()}
                  autoFocus
                  className="font-display text-3xl md:text-4xl font-bold bg-transparent border-b-2 border-white/40 focus:border-white outline-none text-white placeholder-white/40 pb-1"
                  placeholder="Your name"
                />
                <button
                  onClick={handleNameSave}
                  className="px-4 py-2 bg-white/15 hover:bg-white/25 rounded-full text-sm transition-colors"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-display text-4xl md:text-5xl font-bold">
                  {nickname ? `${nickname}'s` : "My"} Travel Collection
                </h1>
                <button
                  onClick={() => setEditingName(true)}
                  className="p-2 text-white/40 hover:text-white/70 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>
            )}

            <p className="text-white/60 mb-8">
              Places you love, dream of, and have explored ✈️
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Favorites", val: favorites.length, icon: "❤️" },
                { label: "Bucket List", val: toVisit.length, icon: "📌" },
                { label: "Visited", val: visited.length, icon: "✅" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-display font-bold">
                    {s.icon} {s.val}
                  </p>
                  <p className="text-white/50 text-xs font-mono tracking-widest uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex gap-2 border-b border-stone-100 dark:border-stone-800 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? "border-stone-900 dark:border-white text-stone-900 dark:text-white" : "border-transparent text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"}`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count > 0 && (
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${activeTab === tab.id ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900" : "bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400"}`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeDests.length > 0 ? (
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {activeDests.map((d, i) => (
              <div key={d.id} className="relative group">
                <DestinationCard destination={d} index={i} size="md" />
                <div className="absolute top-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                  {activeTab === "favorites" && (
                    <button
                      onClick={() => toggleFavorite(d.id)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-rose-500 text-white rounded-full text-xs font-medium hover:bg-rose-600 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  )}
                  {activeTab === "tovisit" && (
                    <>
                      <button
                        onClick={() => markVisited(d.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-full text-xs font-medium hover:bg-green-700 transition-colors"
                      >
                        <Check className="w-3 h-3" /> Mark visited
                      </button>
                      <button
                        onClick={() => toggleToVisit(d.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-stone-700 text-white rounded-full text-xs font-medium hover:bg-stone-900 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </>
                  )}
                  {activeTab === "visited" && (
                    <button
                      onClick={() => markVisited(d.id)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-stone-700 text-white rounded-full text-xs font-medium hover:bg-stone-900 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeTab + "-empty"}
            className="text-center py-24 pb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-5xl mb-4">
              {activeTab === "favorites"
                ? "❤️"
                : activeTab === "tovisit"
                  ? "📌"
                  : activeTab === "visited"
                    ? "✅"
                    : "🕐"}
            </p>
            <h3 className="font-display text-2xl font-semibold text-stone-700 dark:text-stone-300 mb-2">
              {activeTab === "favorites" && "No favorites yet"}
              {activeTab === "tovisit" && "Bucket list is empty"}
              {activeTab === "visited" && "No visited places yet"}
              {activeTab === "recent" && "Nothing viewed yet"}
            </h3>
            <p className="text-stone-400 text-sm mb-6">
              {activeTab === "recent"
                ? "Start exploring destinations"
                : "Browse destinations and save what inspires you"}
            </p>
            <Link to="/explore" className="btn-primary inline-flex">
              Explore Destinations <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
