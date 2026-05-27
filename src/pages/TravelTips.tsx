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
} from "lucide-react";

const tips = [
  {
    icon: Shield,
    title: "Travel Insurance",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    tips: [
      "Secure reliable travel insurance before visiting the island",
      "Choose coverage that includes medical emergencies and transportation assistance",
      "Keep digital and printed copies of important travel and insurance documentse",
      "Save emergency contact numbers for quick access during your trip",
      "Review weather and travel advisories before departure",
    ],
  },
  {
    icon: Wallet,
    title: "Money & Budget",
    color:
      "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    tips: [
      "Carry enough local currency for transportation, small stores, and remote areas",
      "Keep your cash, cards, and important valuables secured while traveling",
      "Set a realistic travel budget for food, accommodation, and activities",
      "Prepare emergency funds for unexpected expenses during your trip",
      "Use trusted payment methods and avoid displaying large amounts of cash in public",
    ],
  },
  {
    icon: Luggage,
    title: "Packing Smart",
    color:
      "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    tips: [
      "Pack light and bring only essential travel items for a more comfortable journey",
      "Wear comfortable clothing suitable for island weather and outdoor activities",
      "Bring reusable water bottles, personal hygiene kits, and eco-friendly essentials",
      "Keep important items such as gadgets, medications, and documents secured at all times",
      "Prepare waterproof bags or cases to protect valuables during beach or river activities",
    ],
  },
  {
    icon: Smartphone,
    title: "Tech & Connectivity",
    color:
      "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    tips: [
      "Download offline maps and important travel information before exploring remote areas",
      "Bring a fully charged power bank for long trips and outdoor activities",
      "Keep your devices protected from water, heat, and unexpected weather conditions",
      "Save emergency contacts and accommodation details on your phone for easy access",
      "Ensure stable communication by preparing mobile data, local SIM access, or offline alternatives",
    ],
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400",
    tips: [
      "Respect local traditions, communities, and cultural practices while visiting destinations",
      "Help preserve natural and historical sites by following local guidelines and regulations",
      "Practice responsible tourism by keeping surroundings clean and minimizing environmental impact",
      "Support local businesses, guides, and artisans to contribute to the community’s livelihood",
      "Show courtesy and kindness to residents and fellow travelers throughout your journey",
    ],
  },
  {
    icon: Heart,
    title: "Health & Safety",
    color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    tips: [
      "Prioritize your safety by staying aware of weather conditions and travel advisories",
      "Bring essential medications, personal health supplies, and emergency necessities",
      "Stay hydrated, wear proper protection from the sun, and take breaks during outdoor activities",
      "Follow local safety guidelines when visiting beaches, rivers, mountains, and remote areas",
      "Keep emergency contacts and important medical information easily accessible during your trip",
    ],
  },
  {
    icon: Clock,
    title: "Timing & Planning",
    color:
      "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
    tips: [
      "Plan your itinerary ahead to make the most of your travel experience",
      "Allow extra time for transportation, weather changes, and unexpected delays",
      "Visit popular attractions early in the day for a more relaxed and enjoyable trip",
      "Check local schedules, tourism guidelines, and seasonal conditions before traveling",
      "Balance activities with enough rest time to enjoy your journey comfortably",
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
