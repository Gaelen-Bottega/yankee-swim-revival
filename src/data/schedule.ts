export type Meet = {
  date: string;
  warmup: string;
  home: string;
  away: string | string[];
  venue: string;
};

export const SCHEDULE: Meet[] = [
  { date: "Sat, Nov 7", warmup: "9:00 AM", home: "New Milford Barracuda's", away: ["Newtown Torpedoes", "Madison Racquet & Swim Club"], venue: "Higgins Aquatic Center" },
  { date: "Sat, Nov 7", warmup: "TBD", home: "Watertown Warriors", away: "JCC Blue Marlins", venue: "Watertown HS Natatorium" },
  { date: "Sat, Nov 21", warmup: "9:00 AM", home: "New Milford Barracuda's", away: "Litchfield Area Swim Team", venue: "Higgins Aquatic Center" },
  { date: "Sat, Nov 21", warmup: "1:30 PM", home: "Bristol Splash", away: "Naugatuck Thunderfish", venue: "Dennis Malone Aquatics Center" },
  { date: "Sat, Nov 21", warmup: "10:30 AM", home: "Oxford Otters", away: "JCC Blue Marlins", venue: "Oxford High School" },
  { date: "Sat, Dec 5", warmup: "11:30 AM", home: "Naugatuck Thunderfish", away: "Oxford Otters", venue: "Naugatuck High School" },
  { date: "Sat, Dec 5", warmup: "1:30 PM", home: "Bristol Splash", away: "JCC Blue Marlins", venue: "Dennis Malone Aquatics Center" },
  { date: "Sat, Dec 12", warmup: "1:30 PM", home: "Bristol Splash", away: "Oxford Otters", venue: "Dennis Malone Aquatics Center" },
  { date: "Sat, Jan 9", warmup: "11:30 AM", home: "Naugatuck Thunderfish", away: "JCC Blue Marlins", venue: "Naugatuck High School" },
  // Fix below
  { date: "Sat, Jan 9", warmup: "TBD", home: "Plainville Swim Club", away: "Madison Racquet & Swim Club", venue: "Plainville High School" },
  { date: "Sat, Jan 16", warmup: "TBD", home: "Watertown Warriors", away: "Bristol Splash", venue: "Watertown HS Natatorium" },
  { date: "Sat, Jan 16", warmup: "9:00 AM", home: "Plainville Swim Club", away: ["New Milford Barracuda's", "JCC Blue Marlins"], venue: "Plainville High School" },
  { date: "Sat, Jan 23", warmup: "1:30 PM", home: "Bristol Splash", away: ["Plainville Swim Club", "Newtown Torpedoes"], venue: "Dennis Malone Aquatics Center" },
  { date: "Sat, Jan 30", warmup: "1:30 PM", home: "Bristol Splash", away: "Litchfield Area Swim Team", venue: "Dennis Malone Aquatics Center" },
  // Fix below
  { date: "Sat, Jan 30", warmup: "TBD", home: "Plainville Swim Club", away: "Madison Racquet & Swim Club", venue: "Plainville High School" },
  { date: "Thurs, Feb 4", warmup: "5:30 PM", home: "JCC Blue Marlins", away: "Madison Racquet & Swim Club", venue: "JCC Community Center" },
];

export const POSTSEASON: { name: string; date: string; venue: string; note: string }[] = [
  { name: "9/10 Championships", date: "Sat, Feb 13 @ 8:00 AM", venue: "Bristol", note: "All teams bring their 9/10's to the YSL Championships." },
  { name: "11/12 Championships", date: "Sat, Feb 13 @ 12:00 PM", venue: "Bristol", note: "All teams bring their 11/12's to the YSL Championships." },
  { name: "8/Under Championships", date: "Sun, Feb 14 @ 8:00 AM", venue: "Watertown", note: "All teams bring their 8 & Unders to the YSL Championships." },
  { name: "13/Over Championships", date: "Sun, Feb 14 @ 12:00 PM", venue: "Watertown", note: "All teams bring their 13 & Overs to the YSL Championships." },
  { name: "Yankee League All Stars", date: "Sat, Feb 20 @ TBD", venue: "TBD", note: "Pentathlon of swimming events for the top swimmers in each age group. Must qualify at Championships for this event!" },
];
