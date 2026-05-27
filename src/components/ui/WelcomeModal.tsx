import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";
import { useTravel } from "../../context/TravelContext";

export default function WelcomeModal() {
  const { nickname, setNickname } = useTravel();
  const [visible, setVisible] = useState(!nickname);
  const [name, setName] = useState("");
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    if (name.trim()) setNickname(name.trim());
    setVisible(false);
  };

  const handleSkip = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Top image strip */}
            <div className="h-40 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&h=400&q=80"
                alt="Travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-stone-900" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 bg-white dark:bg-stone-900 rounded-2xl flex items-center justify-center shadow-xl">
                  <Compass
                    className="w-7 h-7 text-stone-800 dark:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <div className="p-8 -mt-4">
              <AnimatePresence mode="wait">
                {step === 0 ? (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center"
                  >
                    <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white mb-2">
                      Welcome to Sibuyan
                    </h2>
                    <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
                      Your personal travel companion. Save destinations, build
                      bucket lists, and explore the Island of Sibuyan.
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="btn-primary w-full justify-center"
                    >
                      Personalize my experience
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleSkip}
                      className="mt-3 text-sm text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                    >
                      Skip for now
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white mb-1">
                      What's your name?
                    </h2>
                    <p className="text-stone-500 dark:text-stone-400 text-sm mb-6">
                      We'll personalize your experience and greet you each
                      visit.
                    </p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="Enter your name..."
                      autoFocus
                      className="w-full px-4 py-3.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-stone-300 text-sm mb-4"
                    />
                    <button
                      onClick={handleSubmit}
                      className="btn-primary w-full justify-center"
                    >
                      Let's explore
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleSkip}
                      className="mt-3 text-sm text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors block w-full text-center"
                    >
                      Skip
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
