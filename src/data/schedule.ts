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
  { week: "Week 1", date: "Sat, Nov 8", home: "Bristol Splash", away: "JCC Blue Marlins", venue: "Dennis Malone Aquatics Center" },
  { week: "Week 1", date: "Sat, Nov 8", home: "Watertown Warriors", away: "Naugatuck Thunderfish", venue: "Watertown HS Natatorium" },
  { week: "Week 2", date: "Sat, Nov 15", home: "Newtown Torpedoes", away: "Naugatuck Thunderfish", venue: "Newtown Community Pool" },
  { week: "Week 2", date: "Sat, Nov 15", home: "Oxford Otters", away: "Litchfield Area Swim Team", venue: "Oxford High School" },
  { week: "Week 3", date: "Sat, Dec 6", home: "Oxford Otters", away: "Newtown Torpedoes", venue: "Oxford High School" },
  { week: "Week 4", date: "Sat, Dec 13", home: "JCC Blue Marlins", away: "Bristol Splash", venue: "JCC Community Center" },
  { week: "Week 5", date: "Sat, Jan 10", home: "Naugatuck Thunderfish", away: "Watertown Warriors", venue: "Naugatuck High School" },
  { week: "Week 6", date: "Sat, Jan 24", home: "Newtown Torpedoes", away: "Bristol Splash", venue: "Newtown Community Pool" },
  { week: "Week 7", date: "Sat, Feb 7", home: "Naugatuck Thunderfish", away: "JCC Blue Marlins", venue: "Naugatuck High School" },
];

export const POSTSEASON: { name: string; date: string; venue: string; note: string }[] = [
  { name: "8/Under Championships", date: "Sat, Feb 6", venue: "TBD", note: "All teams bring their 8 & Unders to the YSL Championships." },
  { name: "13/Over Championships", date: "Sat, Feb 6", venue: "TBD", note: "All teams bring their 13 & Overs to the YSL Championships." },
  { name: "9/10 Championships", date: "Sun, Feb 7", venue: "TBD", note: "All teams bring their 9/10's to the YSL Championships." },
  { name: "11/12 Championships", date: "Sun, Feb 7", venue: "TBD", note: "All teams bring their 11/12's to the YSL Championships." },
  { name: "Yankee League All Stars", date: "Sat, Feb 13", venue: "West Haven High School", note: "Pentathlon of swimming events for the top swimmers in each age group. Must qualify at Championships for this event!" },
];
