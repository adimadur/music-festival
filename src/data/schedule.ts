export interface ScheduleItem {
  id: string;
  artist: string;
  time: string;
  stage: string;
  duration: string;
}

export const scheduleData = {
  friday: [
    {
      id: "f1",
      artist: "Urban Poets",
      time: "6:30 PM",
      stage: "Urban Stage",
      duration: "45 min"
    },
    {
      id: "f2",
      artist: "Midnight Groove",
      time: "7:45 PM",
      stage: "Soul Stage",
      duration: "45 min"
    },
    {
      id: "f3",
      artist: "Rock Revolution",
      time: "8:45 PM",
      stage: "Second Stage",
      duration: "45 min"
    },
    {
      id: "f4",
      artist: "Electric Pulse",
      time: "9:30 PM",
      stage: "Main Stage",
      duration: "90 min"
    },
    {
      id: "f5",
      artist: "DJ Starlight",
      time: "11:00 PM",
      stage: "Electronic Stage",
      duration: "60 min"
    }
  ],
  saturday: [
    {
      id: "s1",
      artist: "The Morning Birds",
      time: "4:00 PM",
      stage: "Meadow Stage",
      duration: "45 min"
    },
    {
      id: "s2",
      artist: "Funk Brigade",
      time: "5:30 PM",
      stage: "Soul Stage",
      duration: "45 min"
    },
    {
      id: "s3",
      artist: "Indie Dreams",
      time: "6:45 PM",
      stage: "Second Stage",
      duration: "45 min"
    },
    {
      id: "s4",
      artist: "Cosmic Waves",
      time: "8:00 PM",
      stage: "Second Stage",
      duration: "60 min"
    },
    {
      id: "s5",
      artist: "Neon Dreams",
      time: "10:00 PM",
      stage: "Electronic Stage",
      duration: "90 min"
    },
    {
      id: "s6",
      artist: "Bass Odyssey",
      time: "11:30 PM",
      stage: "Electronic Stage",
      duration: "90 min"
    },
    {
      id: "s7",
      artist: "Techno Titans",
      time: "12:00 AM",
      stage: "Electronic Stage",
      duration: "120 min"
    }
  ],
  sunday: [
    {
      id: "su1",
      artist: "Acoustic Hearts",
      time: "4:15 PM",
      stage: "Meadow Stage",
      duration: "45 min"
    },
    {
      id: "su2",
      artist: "Jazz Fusion",
      time: "5:30 PM",
      stage: "Soul Stage",
      duration: "45 min"
    },
    {
      id: "su3",
      artist: "Sunset Vibes",
      time: "6:00 PM",
      stage: "Global Stage",
      duration: "60 min"
    },
    {
      id: "su4",
      artist: "Rhythm Collective",
      time: "7:15 PM",
      stage: "Global Stage",
      duration: "60 min"
    },
    {
      id: "su5",
      artist: "The Closers",
      time: "9:00 PM",
      stage: "Main Stage",
      duration: "90 min"
    }
  ]
};