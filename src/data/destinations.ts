export type Category = 'Beaches' | 'Mountains' | 'Historical' | 'Nature' | 'Culture' |'Food' |'Adventure' | 'Hidden Gems';
export type Municipality = "Magdiwang" | "Cajidiocan" | "San Fernando";
export const MUNICIPALITY_LOGOS: Record<string, string> = {
  Magdiwang: "/MagdiwangLogo.png",
  Cajidiocan: "/CajidiocanLogo.png",
  San_Fernando: "/SanFernandoLogo.png",
};
export interface Destination {
  id: string;
  name: string;
  category: Category[];
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  rating: number;
  municipality: string;
  bestTime: string;
  activities: string[];
  quickFacts: { label: string; value: string }[];
  googleMapsUrl: string;
  featured?: boolean;
  trending?: boolean;
}

export const destinations: Destination[] = [
  
  {
    id: 'cantingas-river',
    name: 'Cantingas River',
    category: ['Nature'],
    tagline: 'Where crystal-clear waters flow from the heart of Sibuyan',
    description: 'A renowned eco-tourism destination in San Fernando, Sibuyan Island, Cantingas River Resort is celebrated for its exceptionally clear freshwater, cool mountain-fed currents, and relaxing natural surroundings. Nestled beneath the lush landscapes of Mt. Guiting-Guiting, the resort offers visitors a refreshing escape through swimming, riverside recreation, diving platforms, and peaceful scenic views that showcase the island’s untouched beauty.',
    image: 'https://www.journeyera.com/wp-content/uploads/2018/06/CANTINGAS-RIVER-ROMBLON-02403.jpg',
    gallery: [
      'https://www.journeyera.com/wp-content/uploads/2018/06/CANTINGAS-RIVER-ROMBLON-02403.jpg',
      'https://www.journeyera.com/wp-content/uploads/2018/06/CANTINGAS-RIVER-ROMBLON-02386.jpg',
      'https://shoestringdiary.wordpress.com/wp-content/uploads/2024/03/cantingas_river14-cover-ssd.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ae/a7/bd/downstream-of-the-river.jpg?w=1200&h=1200&s=1',
    ],
    rating: 4.8,
    municipality: 'San_Fernando',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29663.023830488444!2d122.5728430292891!3d12.34164246871127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a444f05b2cda85%3A0x51b3b12971eddd77!2sCantingas%20River!5e0!3m2!1sen!2sph!4v1779881423888!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: true,
    trending: true,
  },
  
  {
    id: 'mt-guiting',
    name: 'Mt. Guiting Guiting',
    category: ['Mountains','Adventure'],
    tagline: 'The jagged crown of Sibuyan’s untouched wilderness.',
    description: 'Towering at the heart of Sibuyan Island, Mount Guiting-Guiting is a world-renowned natural landmark celebrated for its rugged peaks, dense forests, and extraordinary biodiversity. Known as one of the most challenging mountains to climb in the Philippines, the mountain offers breathtaking landscapes, dramatic ridges, and an unforgettable adventure for mountaineers and nature enthusiasts alike. As the centerpiece of the Mt. Guiting-Guiting Natural Park, it stands as a symbol of Sibuyan’s rich ecological heritage and pristine beauty.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Guiting-guiting_1.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Guiting-guiting_1.jpg',
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/12/06183204/Mt-Guiting-Guiting-range-seen-from-Magdiwang-e1701888319348.png',
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Guiting-guiting_3.jpg',
      'https://mimaropaventures.ph/uploads/tourist/1673342557-g2.jpg',
    ],
    rating: 4.8,
    municipality: 'Magdiwang',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92028.26324575316!2d122.55493468457809!3d12.418043628521154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a4429305df7281%3A0xe8e4a62974176fcb!2sMount%20Guiting-Guiting!5e0!3m2!1sen!2sph!4v1779885736085!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: true,
    trending: true,
  },
  {
    id: 'casa-sanfernando',
    name: 'Casa Del San Fernando',
    category: ['Historical'],
    tagline: 'A timeless Spanish heritage standing in the heart of Sibuyan.',
    description: 'A historic cultural landmark in San Fernando, Sibuyan Island, Casa San Fernando showcases the island’s rich Spanish colonial heritage through its centuries-old stone architecture and iconic watchtower design. Built during the Spanish era, the structure reflects the history, resilience, and cultural identity of the municipality, offering visitors a glimpse into Sibuyan’s storied past and preserved architectural beauty.',
    image: 'https://starliteferries.com/wp-content/uploads/2025/08/0302-Casa-Del-San-Fernando-768x507.jpg',
    gallery: [
      'https://starliteferries.com/wp-content/uploads/2025/08/0302-Casa-Del-San-Fernando-768x507.jpg',
      'https://mystormlesssky.wordpress.com/wp-content/uploads/2016/05/wp-1462680766212.jpg?w=660',
      'https://photos.wikimapia.org/p/00/01/86/67/82_big.jpg',
      'https://romblonnews.net/wp-content/uploads/2022/10/Casa-del-San-Fernando.jpg',
    ],
    rating: 4.8,
    municipality: 'San_Fernando',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1831.261254359835!2d122.59961186808074!3d12.303413290275506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a4451038b1358d%3A0xa88ee05b58d0a4f9!2sCasa%20San%20Fernando!5e0!3m2!1sen!2sph!4v1779885113161!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    trending: false,
  },
  {
    id: 'magdiwang-beach',
    name: 'Magdiwang Beach',
    category: ['Beaches'],
    tagline: 'Where crystal waters meet island serenity',
    description: 'A serene coastal destination in Sibuyan Island, Romblon known for its clear waters, relaxing shoreline, and peaceful atmosphere. Magdiwang Beach offers visitors a refreshing escape surrounded by natural beauty, making it an ideal spot for swimming, sightseeing, beach walks, and experiencing the calm island lifestyle of Sibuyan.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEj8YUkMP30N2w9hjyrZ8QwhLLAKb6ZgMGKfugpEfK_jD6PGCvinB2roytmwSLe17qd1N2dWcc7qyJ1-BU-7abDak6R5wLYBKyS1Z3aEo0Qhj8yEiAog-7iO0Zlv1TAl3jVUnuF1g=s1360-w1360-h1020-rw',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEj8YUkMP30N2w9hjyrZ8QwhLLAKb6ZgMGKfugpEfK_jD6PGCvinB2roytmwSLe17qd1N2dWcc7qyJ1-BU-7abDak6R5wLYBKyS1Z3aEo0Qhj8yEiAog-7iO0Zlv1TAl3jVUnuF1g=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGRV157UqZjEFlMKKIC6LP5g5sLYhrm-fQ7xcaXscYHYiQ25rnaYBHvmIbv4nfGF6XTmUoEJ4s-p3lDm4bkygbCZmXeK7pLyYwnkdIEMY9LjdAfoYCd-FAx-t6pgSnFSJ62In9PYg=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHkudb_BH6grTPvYqfA5xGcEn--oVdnHiHoKQetpOWuRF-lwCKlXA1ieYirdBSiH92-KBKEH8l5lLVgphfOAf_mjsRQSc-U-R3EWUpciu7Y8Aw7VrL_MyZPYEPM_X4wctK3THL0=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHordrsvdoqNW5RkygIGO9M4tPN4yRRHSsGW02kimRf5hHGGr76A5wsMC3oV1IIKYk2pYcfqCWO49OXk0Pqg6vbl3-HWP7dwi-NkiJXGsIiFrOvn8igQqlUX-o-IxAmaD1_F0hO=s1360-w1360-h1020-rw',
    ],
    rating: 4.4,
    municipality: 'Magdiwang',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5855517884283!2d122.5141496206425!3d12.494448733226404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a46640b16bc5a5%3A0xf51e0fbf7c81b1c8!2sMagdiwang%20Beach!5e0!3m2!1sen!2sph!4v1779875188609!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: true,
    trending: false,
  },
  {
    id: 'cawa-cawaFalls',
    name: 'Cawa-cawa Falls',
    category: ['Nature','Hidden Gems'],
    tagline: 'A hidden cascade carved by nature’s timeless flow',
    description: 'Nestled within the lush forests of Cajidiocan, Sibuyan Island, Cawa-Cawa Falls is a breathtaking three-tier waterfall known for its crystal-clear waters, natural rock formations, and refreshing mountain-fed pools. Named after its cauldron-shaped basin, the falls offer visitors a serene escape filled with scenic landscapes, swimming spots, cliff-jumping adventures, and the untouched beauty of Sibuyan’s tropical wilderness.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFU138qXUmxm6fWRkMKLERved4yj3STgZU9Wb-WEdqIs-rH7kEXKQwhpfpbFs2QJXz_EPz4k17O1vtT0H9kZMRkxb0cq4fZhaDCCk2C7ch2Nq9zNQdgQN8fdppHt9YDD559YXe8=s1360-w1360-h1020-rw',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWVNwib-oVE-CxsMxej3fPSA_fT5dh9hIyxyOP1PUYzZ4XJ2zEnJy9fSikWaIHBAeK0Cyvme1QIkk68VBXneSwD-5_XDGLRl4fM0XvIqJY28Ms5G4VU5EQKKS4aBvpZH8-5zx7=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFU138qXUmxm6fWRkMKLERved4yj3STgZU9Wb-WEdqIs-rH7kEXKQwhpfpbFs2QJXz_EPz4k17O1vtT0H9kZMRkxb0cq4fZhaDCCk2C7ch2Nq9zNQdgQN8fdppHt9YDD559YXe8=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gpms-cs-s/ABJJf50-T6G0GDPyJdieobbVBIlEYnp4E1lKVPxjTcngabntRGmuKy53I8_9PRY0f7dhdkOB_gBaRPxaccHbGXPBq_O1OnAICijSqjDpM6DGmN6BkHkjXymocXoZS9gsJ_BEFhkCloS0Qg=s1360-w1360-h1020-rw',
    ],
    rating: 4.4,
    municipality: 'Cajidiocan',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5855517884283!2d122.5141496206425!3d12.494448733226404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a46640b16bc5a5%3A0xf51e0fbf7c81b1c8!2sMagdiwang%20Beach!5e0!3m2!1sen!2sph!4v1779875188609!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    trending: false,
  },
  
  {
    id: 'dagubdub-falls',
    name: 'Dagubdub Falls',
    category: ['Nature','Adventure'],
    tagline: 'A hidden cascade carved by nature’s timeless flow',
    description: 'Nestled within the lush forests of Cajidiocan, Sibuyan Island, Cawa-Cawa Falls is a breathtaking three-tier waterfall known for its crystal-clear waters, natural rock formations, and refreshing mountain-fed pools. Named after its cauldron-shaped basin, the falls offer visitors a serene escape filled with scenic landscapes, swimming spots, cliff-jumping adventures, and the untouched beauty of Sibuyan’s tropical wilderness.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGbGEHdjMtsFPjpgicMVGhXBavZQBJqHMhd7-eBZYfozG9m1pvU5tu7bsUo-ir-TWA1lm5uPHIZHE9g__4vGizMFO25v5qSEsTUFNslEYlCMO_fKUsm6qERUR-QZtwaNy5dxN40=s1360-w1360-h1020-rw',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGQZwpAhPRjgieG0KQuilgsQHfn51xuSthSL3j_gYARmOcZA4N9SlBdtVLPOhGwMk26XLuetCT6vtVUupBLI_6ePMhJ899YoDi9JQTI_bxJrtREWIfGyvTuSDr0p1v9lfhRn1El=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGbGEHdjMtsFPjpgicMVGhXBavZQBJqHMhd7-eBZYfozG9m1pvU5tu7bsUo-ir-TWA1lm5uPHIZHE9g__4vGizMFO25v5qSEsTUFNslEYlCMO_fKUsm6qERUR-QZtwaNy5dxN40=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGCMFDbYm2y8gK8RxBMIeqOrH_jO_uSbmZpCLbd2HT9_Cob-5K0wuSffnSEFgyau4UTnatITlz5qQjOSG1wOZNRYeEX5qw2yF55-oMMH2lNxVST-G75yoIX_5XRXlI1KQ8xpyTX2g=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAF4xEFYt19DXtJWYMOuWHjVgzE0QswoCPO9LmLgIBMHNoy5ZsuqACcDw7Zrx0Wpn18S9KeRE7mitNTE5KtY1S8f5rvGzPMUy14e568FW7EYhvOtJK_XObntFTcSTLPx7Y1Buj138g=s1360-w1360-h1020-rw',
    ],
    rating: 4.4,
    municipality: 'Cajidiocan',
    bestTime: 'Anytime as long as the weather is clear',
    activities: ['Swimming', 'Sunset'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5855517884283!2d122.5141496206425!3d12.494448733226404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a46640b16bc5a5%3A0xf51e0fbf7c81b1c8!2sMagdiwang%20Beach!5e0!3m2!1sen!2sph!4v1779875188609!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    trending: false,
  },
  {
    id: 'gabi',
    name: 'Ginataang Gabi',
    category: ['Food', 'Culture'],
    tagline: 'A creamy island comfort rooted in Romblon tradition.',
    description: 'A traditional delicacy from Romblon, Ginataang Gabi is the local version of Laing made with fresh taro leaves slowly cooked in rich coconut milk until they develop a thick and creamy texture. Unlike the spicy Bicolano variant, Romblon’s version is milder, chunkier, and highlights the natural flavor of gabi blended with savory local ingredients.',
    image: 'https://i0.wp.com/c7.staticflickr.com/9/8218/28417747414_1c1c51bc92_b.jpg?resize=1024%2C577&quality=89&ssl=1',
    gallery: [
      'https://i0.wp.com/c7.staticflickr.com/9/8218/28417747414_1c1c51bc92_b.jpg?resize=1024%2C577&quality=89&ssl=1',
    ],
    rating: 4.4,
    municipality: '',
    bestTime: 'Available anytime, best served fresh',
    activities: ['Eating'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159397.10694490053!2d122.55836197277848!3d12.397470969235542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a44318b9db900b%3A0x2e3d2b6bb34bbd40!2sSibuyan%20Island!5e0!3m2!1sen!2sph!4v1779903128528!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    trending: false,
  },
  
  {
    id: 'kweba',
    name: 'Kweba Falls',
    category: ['Adventure', 'Hidden Gems'],
    tagline: 'A hidden cascade surrounded by Sibuyan’s untouched wilderness',
    description: 'Nestled within the lush landscapes of Sibuyan Island, Kweba Falls is a serene natural attraction known for its refreshing waters, scenic rock formations, and peaceful forest surroundings. Hidden away from crowded tourist spots, the falls offer visitors a quiet escape where nature, adventure, and relaxation come together in one of the island’s untouched tropical settings.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE1b_nPUuqYvC5rBJRLJ-XAUOKpuTuaszF3WzoH-S6Lo9mD1rJbbEMBecaa2AvyBPRtTxnPam25de7zsErMzCA5DR1MrwmYlXttgt6JRbfh53M4nUrs3ldIB8GmbtgMdao2c3jsT9Ebves=s1360-w1360-h1020-rw',
    gallery: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGxDwRz9onTCcsJRuQfLiNCwOyM0y7WKqe0iUFkpYZk1GePBfewUpWQegccU9OHQPtnmVoSSQKrnc7gaENl8eblRChzTgGsJIqh8Q5exMpvLwvU3FbLDp-qxYSL8EvFYyqRU6GL7Ch_0DZ-=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE1b_nPUuqYvC5rBJRLJ-XAUOKpuTuaszF3WzoH-S6Lo9mD1rJbbEMBecaa2AvyBPRtTxnPam25de7zsErMzCA5DR1MrwmYlXttgt6JRbfh53M4nUrs3ldIB8GmbtgMdao2c3jsT9Ebves=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHDDuSoCrUpw7PlZmFW-Nysv2_w-S-Rw9KSdnC5WhiGE0bV7Tf1rBkoTqA0CbgZZ5NCH87tgnKA4NvZYnaQ9rhO5XZrl9PoGr93WpGomPAiujwhBAq8a7zgSzgwMcgxErf9jvoIzypsiszn=s1360-w1360-h1020-rw',
    ],
    rating: 5.0,
    municipality: 'San Fernando',
    bestTime: 'As long as the weather is clear',
    activities: ['Eating'],
    quickFacts: [
      { label: 'Language', value: 'Italian' },
      { label: 'Currency', value: 'Euro (€)' },
      { label: 'Climate', value: 'Mediterranean' },
      { label: 'UNESCO', value: 'Since 1997' },
    ],
    googleMapsUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16498.912791750685!2d122.52697376321376!3d12.391513586764525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a45d8209a3e921%3A0xcefbeefd3121b981!2sKweba%20falls!5e0!3m2!1sen!2sph!4v1779986614320!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    featured: false,
    trending: false,
  },
  
];

export const categories = [
  { id: 'Beaches', label: 'Beaches', color: 'from-blue-400 to-cyan-300', image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEj8YUkMP30N2w9hjyrZ8QwhLLAKb6ZgMGKfugpEfK_jD6PGCvinB2roytmwSLe17qd1N2dWcc7qyJ1-BU-7abDak6R5wLYBKyS1Z3aEo0Qhj8yEiAog-7iO0Zlv1TAl3jVUnuF1g=s1360-w1360-h1020-rw' },
  { id: 'Mountains', label: 'Mountains', color: 'from-stone-500 to-stone-300', image: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/12/06183204/Mt-Guiting-Guiting-range-seen-from-Magdiwang-e1701888319348.png' },
  { id: 'Historical', label: 'Historical', color: 'from-amber-600 to-yellow-400', image: 'https://starliteferries.com/wp-content/uploads/2025/08/0302-Casa-Del-San-Fernando-768x507.jpg' },
  { id: 'Nature', label: 'Nature & Parks', color: 'from-green-600 to-emerald-400', image: 'https://www.journeyera.com/wp-content/uploads/2018/06/CANTINGAS-RIVER-ROMBLON-02403.jpg' },
  { id: 'Culture', label: 'Culture', image: 'https://jontotheworld.com/wp-content/uploads/2025/09/Biniray-Festival-1180x786.jpg' },
  { id: 'Food', label: 'Foods', image: 'https://i0.wp.com/c5.staticflickr.com/9/8364/28932159572_003ec7fd4d_b.jpg?resize=1024%2C577&quality=89&ssl=1' },
  { id: 'Adventure', label: 'Adventure', color: 'from-orange-600 to-red-400', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Guiting-guiting_3.jpg'},
  { id: 'Hidden Gems', label: 'Hidden Gems', color: 'from-teal-500 to-cyan-400', image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE1b_nPUuqYvC5rBJRLJ-XAUOKpuTuaszF3WzoH-S6Lo9mD1rJbbEMBecaa2AvyBPRtTxnPam25de7zsErMzCA5DR1MrwmYlXttgt6JRbfh53M4nUrs3ldIB8GmbtgMdao2c3jsT9Ebves=s1360-w1360-h1020-rw' },
];

