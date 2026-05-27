import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Wallet,
  Luggage,
  Smartphone,
  Globe,
  Heart,
  Clock,
  Map,
} from "lucide-react";

const tips = [
  {
    icon: Shield,
    title: "Travel Insurance",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    tips: [
      "Always purchase comprehensive travel insurance before your trip",
      "Ensure medical coverage includes evacuation and repatriation",
      "Keep all policy documents saved offline and in cloud storage",
      "Document your belongings with photos before departure",
    ],
  },
  {
    icon: Wallet,
    title: "Money & Budget",
    color:
      "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    tips: [
      "Always carry a mix of local currency and cards",
      "Notify your bank before traveling internationally",
      "Use a no-foreign-transaction-fee card when possible",
      "Keep emergency cash in a separate location from your wallet",
    ],
  },
  {
    icon: Luggage,
    title: "Packing Smart",
    color:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    tips: [
      "Roll clothes instead of folding to save space and reduce wrinkles",
      "Pack a universal power adapter for international trips",
      "Bring a reusable water bottle to stay hydrated and reduce waste",
      "Keep medications and valuables in carry-on luggage",
    ],
  },
  {
    icon: Smartphone,
    title: "Tech & Connectivity",
    color:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    tips: [
      "Download offline maps for your destination before departing",
      "Get a local SIM card or international data plan",
      "Back up all important documents to cloud storage",
      "Carry a portable charger for long days of exploration",
    ],
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
    tips: [
      "Research local customs and dress codes before visiting",
      "Learn a few basic phrases in the local language",
      "Ask permission before photographing people or religious sites",
      "Support local businesses and artisans over international chains",
    ],
  },
  {
    icon: Heart,
    title: "Health & Safety",
    color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    tips: [
      "Check required vaccinations and health advisories",
      "Carry a basic first-aid kit and any prescription medications",
      "Stay hydrated and be cautious about food and water safety",
      "Register with your country's embassy for extended stays",
    ],
  },
  {
    icon: Clock,
    title: "Timing & Planning",
    color:
      "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    tips: [
      "Book popular attractions in advance to avoid disappointment",
      "Visit major sites early morning to avoid crowds",
      "Allow buffer time between connecting flights and tours",
      "Check for local holidays that may affect schedules",
    ],
  },
  {
    icon: Map,
    title: "Getting Around",
    color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400",
    tips: [
      "Research your transportation options ahead of time",
      "Book airport transfers in advance for peace of mind",
      "Consider renting a car for flexible rural exploration",
      "Use reputable taxi apps or hotel-arranged transport",
    ],
  },
];

export default function TravelTips() {
  useEffect(() => {
    document.title = "Travel Tips — I Love Sibuyan";
  }, []);

  return (
    <div className="page-enter min-h-screen">
      {/* Hero */}
      <div className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-white dark:from-stone-900 dark:to-stone-950" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="label-sm mb-3">Expert advice</p>
            <h1 className="heading-xl text-stone-900 dark:text-white mb-4">
              Travel
              <br />
              <em className="font-normal italic text-stone-400">Smarter</em>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 max-w-xl text-lg">
              Essential tips and insights to make every journey safer, smoother,
              and more memorable.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tips grid */}
      <div className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((section, i) => (
            <motion.div
              key={section.title}
              className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-100 dark:border-stone-800 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${section.color}`}
                >
                  <section.icon className="w-5 h-5" />
                </div>
                <h2 className="font-display text-xl font-semibold text-stone-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-600 mt-2 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 relative rounded-3xl overflow-hidden h-64"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://delightgarrovillo.com/wp-content/uploads/2025/10/img_8059.jpg"
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/60 flex items-center justify-center text-center p-8">
            <div>
              <p className="font-display text-white text-4xl font-bold mb-3">
                Ready to explore?
              </p>
              <p className="text-white/70 mb-6">
                Your next adventure is just a click away
              </p>
              <a
                href="/explore"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-900 font-medium rounded-full hover:bg-stone-100 transition-colors"
              >
                Browse Destinations
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
