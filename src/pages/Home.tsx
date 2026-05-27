import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Star,
  TrendingUp,
  Sparkles,
  Globe,
} from "lucide-react";
import { useTravel } from "../context/TravelContext";
import { destinations, categories } from "../data/destinations";
import DestinationCard from "../components/ui/DestinationCard";

const greetings = (name: string | null) => {
  if (!name)
    return [
      "Discover your next destination",
      "The world awaits you",
      "Where will you go next?",
    ];
  return [
    `Welcome back, ${name} 👋`,
    `Ready for another adventure, ${name}?`,
    `Your next chapter starts here, ${name}`,
  ];
};

export default function Home() {
  const { nickname } = useTravel();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const msgs = greetings(nickname);
  const greeting = msgs[Math.floor(Date.now() / 86400000) % msgs.length];

  const featured = destinations.filter((d) => d.featured).slice(0, 6);
  const trending = destinations.filter((d) => d.trending).slice(0, 4);

  useEffect(() => {
    document.title = "I Love Sibuyan — Discover the World";
  }, []);

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
      >
        <motion.div className="absolute inset-0" style={{ y: yBg }}>
          <img
            src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/12/06183204/Mt-Guiting-Guiting-range-seen-from-Magdiwang-e1701888319348.png"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          style={{ opacity }}
        >
          <motion.p
            className="label-sm text-white/70 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {greeting}
          </motion.p>
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Sibuyan
            <br />
            <em className="italic font-normal text-white/80">Awaits</em>
          </motion.h1>
          <motion.p
            className="font-body text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Discover extraordinary places, curate your dream itinerary, and
            create memories that last a lifetime.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Browse Categories
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="bg-white/10 backdrop-blur-md border-t border-white/10 px-10 py-4 flex items-center gap-10 md:gap-16">
            {[
              { value: "100+", label: "Destinations" },
              { value: "7", label: "Categories" },
              { value: "∞", label: "Adventures" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="label-sm mb-2">Handpicked for you</p>
            <h2 className="heading-lg text-stone-900 dark:text-white">
              Featured
              <br />
              <em className="font-normal italic text-stone-400">
                Destinations
              </em>
            </h2>
          </div>
          <Link to="/explore" className="btn-outline hidden md:inline-flex">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((d, i) => (
            <DestinationCard
              key={d.id}
              destination={d}
              index={i}
              size={i === 0 ? "lg" : "md"}
            />
          ))}
        </div>
      </section>

      {/* ── CATEGORIES STRIP ── */}
      <section className="py-16 px-6 bg-stone-100 dark:bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="label-sm mb-2">Explore by type</p>
              <h2 className="heading-md text-stone-900 dark:text-white">
                Browse Categories
              </h2>
            </div>
            <Link
              to="/categories"
              className="text-sm font-medium text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              All categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/explore?category=${cat.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-2">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-2 left-0 right-0 text-center text-xl">
                      {cat.icon}
                    </span>
                  </div>
                  <p className="text-center text-xs font-medium text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                    {cat.label}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRENDING ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="label-sm mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" /> Trending now
            </p>
            <h2 className="heading-lg text-stone-900 dark:text-white">
              What's Hot
              <br />
              <em className="font-normal italic text-stone-400">Right Now</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trending.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} size="md" />
          ))}
        </div>
      </section>

      {/* ── QUOTE/EDITORIAL SECTION ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://delightgarrovillo.com/wp-content/uploads/2025/10/img_8059.jpg"
            alt="Africa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.p
            className="label-sm text-white/50 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Travel philosophy
          </motion.p>
          <motion.blockquote
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "Not all those who wander are lost — but some find exactly what they
            were searching for."
          </motion.blockquote>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-all duration-300"
            >
              Start exploring <Globe className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── RECENTLY VIEWED (if any) ── */}
      <RecentlyViewedSection />

      {/* ── CTA DASHBOARD ── */}
      <section className="section-pad max-w-7xl mx-auto">
        <motion.div
          className="relative bg-stone-900 dark:bg-stone-800 rounded-3xl overflow-hidden p-10 md:p-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-40 h-40 bg-white/5 rounded-full translate-y-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <p className="label-sm text-white/50">Personal dashboard</p>
              </div>
              <h2 className="heading-md mb-3">
                {nickname
                  ? `${nickname}'s Travel Collection`
                  : "Build your travel collection"}
              </h2>
              <p className="text-white/60 text-sm max-w-md">
                Save favorites, build your bucket list, track visited places —
                all stored locally, just for you.
              </p>
            </div>
            <Link
              to="/dashboard"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              Open dashboard <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100 dark:border-stone-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-stone-900 dark:text-white">
            <Star className="w-5 h-5" strokeWidth={1.5} />I ♥ Sibuyan
          </div>
          <p className="text-stone-400 dark:text-stone-600 text-sm font-mono">
            © 2026 · Crafted with ♥ for explorers
          </p>
          <div className="flex gap-6">
            {["Explore", "Categories", "Travel Tips", "About"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function RecentlyViewedSection() {
  const { recentlyViewed } = useTravel();
  if (recentlyViewed.length === 0) return null;

  const recent = recentlyViewed
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean) as typeof destinations;

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-6">
        <div>
          <p className="label-sm mb-1">Continue exploring</p>
          <h3 className="heading-md text-stone-900 dark:text-white">
            Recently Viewed
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {recent.map((d, i) => (
          <DestinationCard key={d.id} destination={d} index={i} size="sm" />
        ))}
      </div>
    </section>
  );
}
