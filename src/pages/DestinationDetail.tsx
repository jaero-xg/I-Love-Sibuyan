import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Bookmark,
  MapPin,
  Calendar,
  Star,
  ChevronLeft,
  Check,
  Share2,
} from "lucide-react";
import { destinations, MUNICIPALITY_LOGOS } from "../data/destinations";
import { useTravel } from "../context/TravelContext";
import DestinationCard from "../components/ui/DestinationCard";

export default function DestinationDetail() {
  const { id } = useParams();
  const {
    isFavorite,
    isToVisit,
    isVisited,
    toggleFavorite,
    toggleToVisit,
    markVisited,
    addRecentlyViewed,
  } = useTravel();
  const [activeImg, setActiveImg] = useState(0);

  const destination = destinations.find((d) => d.id === id);

  useEffect(() => {
    if (destination) {
      document.title = `${destination.name} — I Love Sibuyan`;
      addRecentlyViewed(destination.id);
    }
  }, [destination?.id]);

  if (!destination) return <Navigate to="/explore" replace />;

  const fav = isFavorite(destination.id);
  const bucket = isToVisit(destination.id);
  const visited = isVisited(destination.id);

  const nearby = destinations
    .filter(
      (d) =>
        d.id !== destination.id &&
        d.category.some((c) => destination.category.includes(c)),
    )
    .slice(0, 3);

  const logo = MUNICIPALITY_LOGOS[destination.municipality];

  return (
    <div className="page-enter min-h-screen">
      {/* Hero Gallery */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.img
          key={activeImg}
          src={destination.gallery[activeImg]}
          alt={destination.name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Back button */}
        <Link
          to="/explore"
          className="absolute top-20 left-6 flex items-center gap-1.5 px-4 py-2 bg-black/30 backdrop-blur-sm text-white rounded-full text-sm hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </Link>

        {/* Action buttons */}
        <div className="absolute top-20 right-6 flex gap-2">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleFavorite(destination.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors ${fav ? "bg-rose-500 text-white" : "bg-black/30 text-white hover:bg-black/50"}`}
          >
            <Heart className="w-4 h-4" fill={fav ? "currentColor" : "none"} />
            {fav ? "Saved" : "Save"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleToVisit(destination.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors ${bucket ? "bg-stone-900 text-white" : "bg-black/30 text-white hover:bg-black/50"}`}
          >
            <Bookmark
              className="w-4 h-4"
              fill={bucket ? "currentColor" : "none"}
            />
            {bucket ? "In bucket list" : "Bucket list"}
          </motion.button>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {destination.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-12 h-8 rounded-lg overflow-hidden border-2 transition-all ${activeImg === i ? "border-white scale-110" : "border-white/30 opacity-60"}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Main info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <div>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p className="label-sm mb-2">
                    {destination.category.join(" · ")}
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-stone-900 dark:text-white mb-1">
                    {destination.name}
                  </h1>
                  <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-stone-300 dark:text-stone-700">
                      ·
                    </span>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => markVisited(destination.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${visited ? "bg-green-600 text-white border-green-600" : "border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-green-500 hover:text-green-600"}`}
                >
                  <Check className="w-4 h-4" />
                  {visited ? "Visited ✓" : "Mark as visited"}
                </button>
              </div>
            </div>

            {/* Tagline */}
            <blockquote className="border-l-4 border-stone-200 dark:border-stone-700 pl-6">
              <p className="font-display text-2xl italic text-stone-600 dark:text-stone-400">
                "{destination.tagline}"
              </p>
            </blockquote>

            {/* Description */}
            <div>
              <h2 className="heading-md text-stone-900 dark:text-white mb-4">
                About
              </h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
                {destination.description}
              </p>
            </div>

            {/* Activities */}
            <div>
              <h2 className="heading-md text-stone-900 dark:text-white mb-4">
                Activities
              </h2>
              <div className="flex flex-wrap gap-2">
                {destination.activities.map((a) => (
                  <span
                    key={a}
                    className="px-4 py-2 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-full text-sm font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="heading-md text-stone-900 dark:text-white mb-4">
                Location
              </h2>
              <div className="rounded-2xl overflow-hidden h-64 border border-stone-200 dark:border-stone-700">
                <iframe
                  title={`Map of ${destination.name}`}
                  src={destination.googleMapsUrl}
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Quick info card */}
            <div className="bg-white dark:bg-stone-800 rounded-2xl border border-stone-100 dark:border-stone-700 p-6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-white">
                Overview
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <img src={logo} className="w-9 h-9 shrink-0 object-contain" />
                <div>
                  <p className="font-medium text-stone-700 dark:text-stone-300">
                    Municipality
                  </p>
                  <p className="text-stone-500 dark:text-stone-400">
                    {destination.municipality}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                <div>
                  <p className="font-medium text-stone-700 dark:text-stone-300">
                    Best time to experience
                  </p>
                  <p className="text-stone-500 dark:text-stone-400">
                    {destination.bestTime}
                  </p>
                </div>
              </div>

              {/* <div className="border-t border-stone-100 dark:border-stone-700 pt-4 space-y-3">
                <h4 className="label-sm">Quick Facts</h4>
                {destination.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-stone-500 dark:text-stone-400">
                      {fact.label}
                    </span>
                    <span className="font-medium text-stone-700 dark:text-stone-300">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleFavorite(destination.id)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-sm transition-all ${fav ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-100"}`}
              >
                <Heart
                  className="w-4 h-4"
                  fill={fav ? "currentColor" : "none"}
                />
                {fav ? "Remove from Favorites" : "Add to Favorites"}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => toggleToVisit(destination.id)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-sm border transition-all ${bucket ? "border-stone-900 dark:border-white bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-white" : "border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-900 dark:hover:border-white"}`}
              >
                <Bookmark
                  className="w-4 h-4"
                  fill={bucket ? "currentColor" : "none"}
                />
                {bucket ? "In Bucket List" : "Add to Bucket List"}
              </motion.button>
              <button
                onClick={() =>
                  navigator.share?.({
                    title: destination.name,
                    url: window.location.href,
                  })
                }
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-sm border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-stone-400 transition-all"
              >
                <Share2 className="w-4 h-4" />
                Share Destination
              </button>
            </div>
          </div>
        </div>

        {/* Nearby destinations */}
        {nearby.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="label-sm mb-1">You might also like</p>
                <h2 className="heading-lg text-stone-900 dark:text-white">
                  Similar{" "}
                  <em className="font-normal italic text-stone-400">
                    Destinations
                  </em>
                </h2>
              </div>
              <Link
                to={`/explore?category=${destination.category}`}
                className="btn-outline hidden md:inline-flex text-sm"
              >
                More {destination.category}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {nearby.map((d, i) => (
                <DestinationCard
                  key={d.id}
                  destination={d}
                  index={i}
                  size="lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
