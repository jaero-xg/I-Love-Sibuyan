import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, destinations, type Category } from "../data/destinations";

export default function Categories() {
  useEffect(() => {
    document.title = "Categories — Sibuyan";
  }, []);

  return (
    <div className="page-enter min-h-screen">
      <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="label-sm mb-3">What moves you</p>
          <h1 className="heading-xl text-stone-900 dark:text-white mb-4">
            Explore
            <br />
            <em className="font-normal italic text-stone-400">Categories</em>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 max-w-xl text-lg">
            Find your kind of travel. From sun-soaked beaches to ancient ruins,
            every journey has a category.
          </p>
        </motion.div>
      </div>

      <div className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const count = destinations.filter((d) =>
              d.category.includes(cat.id as Category),
            ).length;
            const sample = destinations
              .filter((d) => d.category.includes(cat.id as Category))
              .slice(0, 3);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  to={`/explore?category=${cat.id}`}
                  className="group relative block rounded-3xl overflow-hidden h-72 cursor-pointer"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="text-4xl mb-2">{cat.icon}</p>
                      <h2 className="font-display text-2xl font-bold text-white mb-1">
                        {cat.label}
                      </h2>
                      <p className="text-white/60 text-sm">
                        {count} destination{count !== 1 ? "s" : ""}
                      </p>
                    </div>

                    {/* Mini gallery */}
                    <div className="flex -space-x-2 mb-1">
                      {sample.map((d) => (
                        <div
                          key={d.id}
                          className="w-9 h-9 rounded-full border-2 border-white/30 overflow-hidden"
                        >
                          <img
                            src={d.image}
                            alt={d.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
