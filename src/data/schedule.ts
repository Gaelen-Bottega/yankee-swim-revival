export type Meet = {
  week: string;
  date: string;
  home: string;
  away: string;
  venue: string;
};

// Placeholder representative dual-meet slate. Actual dates rotate each season
// and are set by coaches at the September meeting per the YSL Constitution.
export const SCHEDULE: Meet[] = [
  { week: "Week 1", date: "Sat, Nov 8", home: "Bristol Splash", away: "West Haven Wizards", venue: "Bristol Family Center" },
  { week: "Week 1", date: "Sat, Nov 8", home: "Watertown Warriors", away: "Plainville Blue Dolphins", venue: "Watertown HS Natatorium" },
  { week: "Week 2", date: "Sat, Nov 15", home: "Newtown Torpedoes", away: "Naugatuck Thunderfish", venue: "Newtown Community Pool" },
  { week: "Week 2", date: "Sat, Nov 15", home: "Seymour Wildcats", away: "New Milford Barracudas", venue: "Seymour Community Center" },
  { week: "Week 3", date: "Sat, Dec 6", home: "Oxford Razors", away: "Madison Marlins", venue: "Oxford High School" },
  { week: "Week 4", date: "Sat, Dec 13", home: "Trumbull Pisces", away: "Bristol Splash", venue: "Trumbull HS Pool" },
  { week: "Week 5", date: "Sat, Jan 10", home: "West Haven Wizards", away: "Watertown Warriors", venue: "West Haven HS" },
  { week: "Week 6", date: "Sat, Jan 24", home: "Plainville Blue Dolphins", away: "Newtown Torpedoes", venue: "Plainville HS" },
  { week: "Week 7", date: "Sat, Feb 7", home: "Naugatuck Thunderfish", away: "Seymour Wildcats", venue: "Naugatuck YMCA" },
];

export const POSTSEASON: { name: string; date: string; venue: string; note: string }[] = [
  { name: "Yankee League Trials", date: "Sat–Sun, Feb 21–22", venue: "TBD (set at September Meeting)", note: "Senior Trials Saturday; Junior Trials & 8 & Under Championships Sunday" },
  { name: "Yankee League Finals", date: "Sat, Feb 28", venue: "TBD", note: "All nine teams compete for the High Point Award" },
  { name: "Yankee League All Stars", date: "Sat, Mar 7", venue: "TBD", note: "Top three per event advance; season culmination" },
];
