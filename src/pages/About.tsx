import { useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Heart, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "About — I Love Sibuyan";
  }, []);

  return (
    <div className="page-enter min-h-screen">
      <div className="pt-28 pb-12 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="label-sm mb-4">Our story</p>
          <h1 className="heading-xl text-stone-900 dark:text-white mb-6">
            Born from a love
            <br />
            <em className="font-normal italic text-stone-400">of travel</em>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-lg max-w-2xl mx-auto">
            I Love Sibuyan was created to inspire curious minds to explore the
            world — discovering hidden gems, iconic landmarks, and the stories
            that make every destination unique.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {[
            {
              icon: Compass,
              title: "Curated Discovery",
              text: "Every destination is carefully selected to offer genuine inspiration — from famous classics to hidden corners of the world.",
            },
            {
              icon: Heart,
              title: "Personal Journey",
              text: "Your travel story is yours alone. Save favorites, build bucket lists, and track your adventures without signing up.",
            },
            {
              icon: Globe,
              title: "Global Perspective",
              text: "We celebrate the diversity of our world — cultures, landscapes, cuisines, and experiences across all continents.",
            },
            {
              icon: Sparkles,
              title: "Premium Experience",
              text: "Every visual, animation, and interaction is crafted with care to create a truly luxurious browsing experience.",
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              className="flex gap-5 p-6 bg-stone-50 dark:bg-stone-800/50 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-12 h-12 bg-stone-900 dark:bg-white rounded-xl flex items-center justify-center shrink-0">
                <v.icon
                  className="w-5 h-5 text-white dark:text-stone-900"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-white mb-1">
                  {v.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                  {v.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/explore" className="btn-primary text-base px-10 py-4">
            Start Exploring
          </Link>
        </div>
      </div>
    </div>
  );
}
