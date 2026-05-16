export const MEDIA_TYPES = [
  { id: "wallpaper" },
  { id: "song" },
  { id: "ringtone" },
];

export const MEDIA_ITEMS = [
  {
    id: "w1",
    type: "wallpaper",
    size: "2.1 MB",
    categoryId: "wallpapers",
    image:
      "https://images.unsplash.com/photo-1631217879881-e7eb7ea652a3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "w2",
    type: "wallpaper",
    size: "1.8 MB",
    categoryId: "wallpapers",
    image:
      "https://images.unsplash.com/photo-1606293927186-20fad5f0a1db?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "s1",
    type: "song",
    size: "4.9 MB",
    categoryId: "aarti",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "s2",
    type: "song",
    size: "5.4 MB",
    categoryId: "mantra",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "r1",
    type: "ringtone",
    size: "420 KB",
    categoryId: "ringtone",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "r2",
    type: "ringtone",
    size: "390 KB",
    categoryId: "ringtone",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
  },
];

export const SHORTCUTS = [
  {
    id: "r",
    categoryId: "ringtone",
    icon: "🎵",
    colors: ["#E9D5FF", "#DDD6FE"],
  },
  {
    id: "a",
    categoryId: "aarti",
    icon: "🪔",
    colors: ["#FDE68A", "#FDBA74"],
  },
  {
    id: "tv",
    categoryId: "tv",
    icon: "▶️",
    colors: ["#FCE7F3", "#FED7AA"],
  },
  {
    id: "b",
    categoryId: "books",
    icon: "📘",
    colors: ["#DBEAFE", "#E0E7FF"],
  },
];

export const FEATURE_TILES = [
  {
    id: "f1",
    categoryId: "wallpapers",
    colors: ["#7C3AED", "#60A5FA"],
  },
  {
    id: "f2",
    categoryId: "aarti",
    colors: ["#A855F7", "#F97316"],
  },
  {
    id: "f3",
    categoryId: "mantra",
    colors: ["#EC4899", "#8B5CF6"],
  },
  {
    id: "f4",
    categoryId: "status",
    colors: ["#B91C1C", "#F43F5E"],
  },
  {
    id: "f5",
    categoryId: "horoscope",
    colors: ["#1D4ED8", "#06B6D4"],
  },
  {
    id: "f6",
    categoryId: "status",
    colors: ["#0D9488", "#22C55E"],
  },
];

export const DRAWER_ITEMS = [
  { id: "d1", page: "profile" },
  { id: "d2", page: "downloads" },
  { id: "d3", page: "favorites" },
  { id: "d4", page: "settings" },
  { id: "d5", page: "logout" },
];

export const LANGUAGES = [
  { id: "hi", title: "Hindi", native: "\u0939\u093f\u0928\u094d\u0926\u0940" },
  { id: "mr", title: "Marathi", native: "\u092e\u0930\u093e\u0920\u0940" },
  {
    id: "gu",
    title: "Gujarati",
    native: "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",
  },
  { id: "bn", title: "Bengali", native: "\u09ac\u09be\u0982\u09b2\u09be" },
  { id: "or", title: "Odia", native: "\u0b13\u0b21\u0b3c\u0b3f\u0b06" },
  { id: "ta", title: "Tamil", native: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
  { id: "te", title: "Telugu", native: "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41" },
  { id: "kn", title: "Kannada", native: "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1" },
];

export const CATEGORY_CONTENT = {
  wallpapers: {
    title: "Wallpapers",
    description:
      "Sample wallpaper content. Replace this array with DB data later.",
    items: [
      {
        id: "wallpaper-shiv",
        title: "Mahadev Trishul HD",
        subtitle: "1080x1920 • Mobile wallpaper",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1631217879881-e7eb7ea652a3?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "wallpaper-temple",
        title: "Morning Temple Darshan",
        subtitle: "4K • Peaceful devotional wallpaper",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1606293927186-20fad5f0a1db?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "wallpaper-diya",
        title: "Diya Light Background",
        subtitle: "HD • Festival wallpaper",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  ringtone: {
    title: "Ringtones",
    description: "Bhakti ringtone samples for future API data.",
    items: [
      {
        id: "ringtone-om",
        title: "Om Namah Shivay Tone",
        subtitle: "30 sec • 420 KB",
        type: "audio",
      },
      {
        id: "ringtone-ram",
        title: "Jai Shri Ram Tone",
        subtitle: "24 sec • 390 KB",
        type: "audio",
      },
      {
        id: "ringtone-bell",
        title: "Temple Bell Mantra",
        subtitle: "18 sec • 310 KB",
        type: "audio",
      },
    ],
  },
  aarti: {
    title: "Aarti Bhajan",
    description: "Popular aarti and bhajan collection.",
    items: [
      {
        id: "aarti-ganesh",
        title: "Ganesh Aarti",
        subtitle: "Morning prayer • 5:12",
        type: "audio",
      },
      {
        id: "aarti-hanuman",
        title: "Hanuman Chalisa",
        subtitle: "Devotional • 7:45",
        type: "audio",
      },
      {
        id: "aarti-shiv",
        title: "Shiv Aarti",
        subtitle: "Evening prayer • 4:30",
        type: "audio",
      },
    ],
  },
  tv: {
    title: "Sanatan TV",
    description: "Live and recorded devotional programs.",
    items: [
      {
        id: "tv-live",
        title: "Live Darshan",
        subtitle: "Live stream placeholder",
        type: "video",
      },
      {
        id: "tv-katha",
        title: "Bhagwat Katha",
        subtitle: "Episode series",
        type: "video",
      },
    ],
  },
  books: {
    title: "Books",
    description: "Devotional books and reading material.",
    items: [
      {
        id: "book-gita",
        title: "Bhagavad Gita",
        subtitle: "Hindi • PDF sample",
        type: "book",
      },
      {
        id: "book-chalisa",
        title: "Hanuman Chalisa",
        subtitle: "Pocket path • PDF sample",
        type: "book",
      },
    ],
  },
  mantra: {
    title: "Mantra and Stuti",
    description: "Mantras, stuti and devotional chants.",
    items: [
      {
        id: "mantra-mahamrityunjay",
        title: "Mahamrityunjaya Mantra",
        subtitle: "108 times • audio",
        type: "audio",
      },
      {
        id: "mantra-vishnu",
        title: "Vishnu Sahasranamam",
        subtitle: "Stotra • audio",
        type: "audio",
      },
    ],
  },
  status: {
    title: "Status",
    description: "Ready-to-share devotional status templates.",
    items: [
      {
        id: "status-good-morning",
        title: "Good Morning Bhakti Status",
        subtitle: "Image status • 1080x1080",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "status-festival",
        title: "Festival Wishes Status",
        subtitle: "Image status • square",
        type: "image",
        image:
          "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  horoscope: {
    title: "Today's Horoscope",
    description: "Daily horoscope placeholder content.",
    items: [
      {
        id: "horoscope-aries",
        title: "Mesh Rashi",
        subtitle: "Aaj ka din shubh rahega.",
        type: "text",
      },
      {
        id: "horoscope-taurus",
        title: "Vrishabh Rashi",
        subtitle: "Kaam me dhairya rakhein.",
        type: "text",
      },
    ],
  },
};
