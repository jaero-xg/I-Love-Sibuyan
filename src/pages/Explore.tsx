import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { destinations, categories } from "../data/destinations";
import DestinationCard from "../components/ui/DestinationCard";

export default function Explore() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>(
    searchParams.get("category") || "All",
  );
  const [activeRegion, setActiveRegion] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = "Explore Destinations — I Love Sibuyan";
  }, []);

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchQuery =
        !query ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.tagline.toLowerCase().includes(query.toLowerCase());
      const matchCat =
        activeCategory === "All" || d.category === activeCategory;
      return matchQuery && matchCat;
    });
  }, [query, activeCategory, activeRegion]);

  const clearFilters = () => {
    setQuery("");
    setActiveCategory("All");
    setActiveRegion("All");
  };
  const hasFilters =
    query || activeCategory !== "All" || activeRegion !== "All";

  return (
    <div className="page-enter min-h-screen">
      {/* Header */}
      <div className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="label-sm mb-3">Discover the world</p>
          <h1 className="heading-xl text-stone-900 dark:text-white mb-8">
            Explore
            <br />
            <em className="font-normal italic text-stone-400">Destinations</em>
          </h1>
        </motion.div>

        {/* Search bar */}
        <motion.div
          className="relative max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, countries..."
            className="w-full pl-11 pr-4 py-4 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-stone-400 text-sm shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </motion.div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-sm border-b border-stone-100 dark:border-stone-800 px-6 py-3">
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${showFilters ? "bg-stone-900 text-white border-stone-900" : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-400"}`}
            >
              <SlidersHorizontal className="w-3 h-3" />
              Filter
            </button>

            {["All", ...categories.map((c) => c.id)].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCategory === cat ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900" : "bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-400 dark:hover:border-stone-500"}`}
              >
                {cat === "All" ? "All Destinations" : cat}
              </button>
            ))}

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="shrink-0 flex items-center gap-1 px-3 py-1.5 text-xs text-rose-500 hover:text-rose-700 transition-colors"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {filtered.length} destination{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && ` in ${activeCategory}`}
            {activeRegion !== "All" && ` · ${activeRegion}`}
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((d, i) => (
              <DestinationCard key={d.id} destination={d} index={i} size="md" />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">🌍</p>
            <h3 className="font-display text-2xl font-semibold text-stone-700 dark:text-stone-300 mb-2">
              No destinations found
            </h3>
            <p className="text-stone-400 text-sm mb-6">
              Try adjusting your search or filters
            </p>
            <button onClick={clearFilters} className="btn-primary">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
