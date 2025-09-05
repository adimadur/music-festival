export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  day: string;
  time: string;
  stage: string;
  featured?: boolean;
  bio?: string;
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "Electric Pulse",
    genre: "Electronic",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Friday",
    time: "9:30 PM",
    stage: "Main Stage",
    featured: true,
    bio: "Electric Pulse is known for their high-energy performances and innovative sound design that blends electronic music with live instruments."
  },
  {
    id: "2",
    name: "Cosmic Waves",
    genre: "Psychedelic Rock",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Saturday",
    time: "8:00 PM",
    stage: "Second Stage",
    featured: true,
    bio: "Cosmic Waves takes listeners on a journey through space and time with their psychedelic soundscapes and mesmerizing visuals."
  },
  {
    id: "3",
    name: "Rhythm Collective",
    genre: "World Fusion",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Sunday",
    time: "7:15 PM",
    stage: "Global Stage",
    bio: "Rhythm Collective brings together musicians from around the world to create a unique fusion of traditional and modern sounds."
  },
  {
    id: "4",
    name: "Midnight Groove",
    genre: "R&B / Soul",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Friday",
    time: "7:45 PM",
    stage: "Soul Stage",
    bio: "Midnight Groove delivers smooth vocals and infectious rhythms that will have you dancing all night long."
  },
  {
    id: "5",
    name: "Neon Dreams",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Saturday",
    time: "10:00 PM",
    stage: "Electronic Stage",
    featured: true,
    bio: "Neon Dreams transports audiences to a retro-futuristic world with their nostalgic synthwave sound and dazzling light show."
  },
  {
    id: "6",
    name: "Urban Poets",
    genre: "Hip Hop",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Friday",
    time: "6:30 PM",
    stage: "Urban Stage",
    bio: "Urban Poets combines thought-provoking lyrics with hard-hitting beats to create a powerful and authentic hip hop experience."
  },
  {
    id: "7",
    name: "Acoustic Hearts",
    genre: "Folk / Indie",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Sunday",
    time: "4:15 PM",
    stage: "Meadow Stage",
    bio: "Acoustic Hearts captivates audiences with heartfelt lyrics and beautiful harmonies that celebrate the simple things in life."
  },
  {
    id: "8",
    name: "Bass Odyssey",
    genre: "Drum & Bass",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Saturday",
    time: "11:30 PM",
    stage: "Electronic Stage",
    bio: "Bass Odyssey delivers high-octane drum and bass sets that push the boundaries of electronic music production."
  },
  {
    id: "9",
    name: "Sunset Vibes",
    genre: "Reggae / Dub",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Sunday",
    time: "6:00 PM",
    stage: "Global Stage",
    bio: "Sunset Vibes brings positive energy and laid-back grooves that perfectly capture the essence of summer festivals."
  },
  {
    id: "10",
    name: "Rock Revolution",
    genre: "Alternative Rock",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Friday",
    time: "8:45 PM",
    stage: "Second Stage",
    bio: "Rock Revolution brings raw energy and powerful anthems that remind us why rock music will never die."
  },
  {
    id: "11",
    name: "Techno Titans",
    genre: "Techno",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Saturday",
    time: "12:00 AM",
    stage: "Electronic Stage",
    bio: "Techno Titans delivers relentless beats and hypnotic rhythms that will keep you dancing until sunrise."
  },
  {
    id: "12",
    name: "Jazz Fusion",
    genre: "Jazz / Funk",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    day: "Sunday",
    time: "5:30 PM",
    stage: "Soul Stage",
    bio: "Jazz Fusion combines technical virtuosity with infectious grooves to create a sound that appeals to both jazz aficionados and casual listeners."
  }
];