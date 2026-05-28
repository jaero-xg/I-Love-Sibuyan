import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Star, Bookmark, Landmark } from "lucide-react";
import type { Destination } from "../../data/destinations";
import { useTravel } from "../../context/TravelContext";

interface Props {
  destination: Destination;
  index?: number;
  size?: "sm" | "md" | "lg";
}

export default function DestinationCard({
  destination,
  index = 0,
  size = "md",
}: Props) {
  const { isFavorite, isToVisit, toggleFavorite, toggleToVisit } = useTravel();
  const fav = isFavorite(destination.id);
  const bucket = isToVisit(destination.id);

  const heights = { sm: "h-52", md: "h-64", lg: "h-80" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400"
    >
      {/* Image */}
      <div className={`relative ${heights[size]} overflow-hidden`}>
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {destination.featured && (
            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-mono font-medium tracking-widest uppercase rounded-full">
              Featured
            </span>
          )}
          {destination.trending && (
            <span className="px-2.5 py-1 bg-stone-900/80 backdrop-blur-sm text-white text-[10px] font-mono font-medium tracking-widest uppercase rounded-full">
              Trending
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(destination.id);
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${fav ? "bg-rose-500 text-white" : "bg-white/80 text-stone-700 hover:bg-white"}`}
          >
            <Heart
              className="w-3.5 h-3.5"
              fill={fav ? "currentColor" : "none"}
            />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.preventDefault();
              toggleToVisit(destination.id);
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${bucket ? "bg-stone-900 text-white" : "bg-white/80 text-stone-700 hover:bg-white"}`}
          >
            <Bookmark
              className="w-3.5 h-3.5"
              fill={bucket ? "currentColor" : "none"}
            />
          </motion.button>
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
          <span className="text-white text-xs font-medium">
            {destination.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <Link to={`/destination/${destination.id}`} className="block p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="label-sm mb-2">{destination.category.join(" · ")}</p>
            <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white leading-tight">
              {destination.name}
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400 mb-2">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
        </div>
        {size !== "sm" && (
          <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed line-clamp-2">
            {destination.tagline}
          </p>
        )}
        {size === "lg" && (
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-1 text-stone-500 dark:text-stone-400">
              <Landmark className="w-3.5 h-3.5" />
              <span className="text-xs">{destination.municipality}</span>
            </div>
            <div className="text-stone-300 dark:text-stone-700 text-xs">•</div>
            <span className="text-xs text-stone-500 dark:text-stone-400">
              {destination.bestTime}
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}
