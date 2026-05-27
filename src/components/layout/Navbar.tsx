import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Moon,
  Sun,
  Heart,
  MapPin,
  Menu,
  X,
  Compass,
} from "lucide-react";
import { useTravel } from "../../context/TravelContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/categories", label: "Categories" },
  { to: "/travel-tips", label: "Travel Tips" },
];

export default function Navbar() {
  const { nickname, theme, toggleTheme, favorites, toVisit } = useTravel();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg =
    scrolled || !isHome
      ? "bg-white/90 dark:bg-stone-950/90 backdrop-blur-md shadow-sm border-b border-stone-100 dark:border-stone-800"
      : "bg-transparent";

  const linkColor =
    !scrolled && isHome
      ? "text-white hover:text-white/70"
      : "text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white";

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 font-display font-bold text-xl tracking-tight ${!scrolled && isHome ? "text-white" : "text-stone-900 dark:text-white"}`}
          >
            <Compass className="w-6 h-6" strokeWidth={1.5} />I love Sibuyan
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium transition-colors duration-200 ${linkColor} ${location.pathname === link.to ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/explore"
              className={`p-2 rounded-full transition-colors ${!scrolled && isHome ? "text-white hover:bg-white/10" : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"}`}
            >
              <Search className="w-4 h-4" />
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${!scrolled && isHome ? "text-white hover:bg-white/10" : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"}`}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <Link
              to="/dashboard"
              className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${!scrolled && isHome ? "bg-white/15 text-white border border-white/20 hover:bg-white/25" : "bg-stone-900 dark:bg-white text-white dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-100"}`}
            >
              {nickname ? (
                <>
                  <Heart className="w-3 h-3" />
                  {nickname}'s List{" "}
                  {favorites.length + toVisit.length > 0 &&
                    `(${favorites.length + toVisit.length})`}
                </>
              ) : (
                <>
                  <MapPin className="w-3 h-3" />
                  My Travel
                </>
              )}
            </Link>
            <button
              className={`md:hidden p-2 rounded-full ${!scrolled && isHome ? "text-white" : "text-stone-700 dark:text-stone-300"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-stone-950 flex flex-col pt-20 px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className="block font-display text-3xl font-bold py-3 text-stone-800 dark:text-white border-b border-stone-100 dark:border-stone-800"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link
                  to="/dashboard"
                  className="block font-display text-3xl font-bold py-3 text-stone-800 dark:text-white border-b border-stone-100 dark:border-stone-800"
                >
                  My Travel
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
