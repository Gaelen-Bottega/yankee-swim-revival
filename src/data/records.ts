export type RecordRow = {
  event: string;
  time: string;
  swimmer: string;
  team: string;
  date: string;
};

export type RecordGroup = {
  group: string;
  rows: RecordRow[];
};

export const DUAL_MEET_RECORDS: RecordGroup[] = [
  {
    group: "6 & Under Girls",
    rows: [
      { event: "25 Yard Freestyle", time: "18.27", swimmer: "Meghan Sisson", team: "Plainville Blue Dolphins", date: "1/1997" },
      { event: "25 Yard Butterfly", time: "18.94", swimmer: "Brooke Nebor", team: "West Haven Wizards", date: "3/5/2011" },
      { event: "25 Yard Backstroke", time: "20.34", swimmer: "Lindsay Hallas", team: "Southbury Sharks", date: "3/1991" },
      { event: "25 Yard Breaststroke", time: "23.78", swimmer: "Brooke Nebor", team: "West Haven Wizards", date: "1/22/2011" },
    ],
  },
  {
    group: "6 & Under Boys",
    rows: [
      { event: "25 Yard Freestyle", time: "15.58", swimmer: "Ryan Crowley", team: "Plainville Blue Dolphins", date: "2/1992" },
      { event: "25 Yard Butterfly", time: "25.77", swimmer: "Austin Troisi", team: "Watertown Warriors", date: "3/3/2003" },
      { event: "25 Yard Backstroke", time: "20.82", swimmer: "Jason Portalatin", team: "Watertown Warriors", date: "2/1992" },
      { event: "25 Yard Breaststroke", time: "27.82", swimmer: "Isaiah Williams", team: "Newtown Torpedoes", date: "2/12/2011" },
    ],
  },
  {
    group: "7–8 Girls",
    rows: [
      { event: "100 Yard Medley Relay", time: "1:13.40", swimmer: "Cheshire", team: "Cheshire", date: "2/1975" },
      { event: "25 Yard Freestyle", time: "14.27", swimmer: "Megan Robinson", team: "Meriden Silverfins", date: "2/1993" },
      { event: "25 Yard Butterfly", time: "15.56", swimmer: "Brooke Nebor", team: "West Haven Wizards", date: "11/3/2012" },
      { event: "25 Yard Backstroke", time: "17.72", swimmer: "Lindsay Hallas", team: "Southbury Sharks", date: "12/1992" },
      { event: "100 Yard IM", time: "1:19.77", swimmer: "Megan Robinson", team: "Meriden Silverfins", date: "3/1993" },
      { event: "25 Yard Breaststroke", time: "18.68", swimmer: "Jaime Crowley", team: "Plainville Blue Dolphins", date: "2/1995" },
      { event: "50 Yard Freestyle", time: "31.34", swimmer: "Meghan Robinson", team: "Meriden Silverfins", date: "3/1993" },
      { event: "100 Yard Freestyle Relay", time: "1:05.04", swimmer: "Southbury Sharks", team: "Southbury Sharks", date: "1993" },
    ],
  },
  {
    group: "7–8 Boys",
    rows: [
      { event: "100 Yard Medley Relay", time: "1:13.23", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "1993" },
      { event: "25 Yard Freestyle", time: "13.60", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "11/1988" },
      { event: "25 Yard Butterfly", time: "15.29", swimmer: "Bobby Barnett", team: "Waterbury", date: "3/1987" },
      { event: "25 Yard Backstroke", time: "16.79", swimmer: "Mike Barnett", team: "Waterbury", date: "3/1988" },
      { event: "100 Yard IM", time: "1:15.65", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1989" },
      { event: "25 Yard Breaststroke", time: "18.19", swimmer: "Worth Archambault", team: "Meriden Silverfins", date: "3/1986" },
      { event: "50 Yard Freestyle", time: "30.50", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1989" },
      { event: "100 Yard Freestyle Relay", time: "1:02.26", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "1986" },
    ],
  },
  {
    group: "9–10 Girls",
    rows: [
      { event: "200 Yard Medley Relay", time: "2:18.55", swimmer: "Southbury Sharks", team: "Southbury Sharks", date: "1995" },
      { event: "100 Yard Freestyle", time: "1:03.45", swimmer: "Megan Robinson", team: "Meriden Silverfins", date: "2/1993" },
      { event: "50 Yard Butterfly", time: "31.19", swimmer: "Michelle Tamburo", team: "Watertown Warriors", date: "3/1982" },
      { event: "50 Yard Backstroke", time: "32.93", swimmer: "Allison Went", team: "Southbury Sharks", date: "3/1995" },
      { event: "100 Yard IM", time: "1:10.57", swimmer: "Faith Martin", team: "Plainville Blue Dolphins", date: "2/2004" },
      { event: "50 Yard Breaststroke", time: "36.02", swimmer: "Faith Martin", team: "Plainville Blue Dolphins", date: "2/2004" },
      { event: "50 Yard Freestyle", time: "28.25", swimmer: "Lauren Semchysen", team: "New Fairfield", date: "2/1994" },
      { event: "200 Yard Freestyle Relay", time: "2:04.25", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "3/1993" },
    ],
  },
  {
    group: "9–10 Boys",
    rows: [
      { event: "200 Yard Medley Relay", time: "2:16.54", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "1993" },
      { event: "100 Yard Freestyle", time: "58.35", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "1991" },
      { event: "50 Yard Butterfly", time: "30.97", swimmer: "Josh Wroblewski", team: "Plainville Blue Dolphins", date: "2/27/2010" },
      { event: "50 Yard Backstroke", time: "31.68", swimmer: "Josh Wroblewski", team: "Plainville Blue Dolphins", date: "3/6/2010" },
      { event: "100 Yard IM", time: "1:06.68", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1991" },
      { event: "50 Yard Breaststroke", time: "34.71", swimmer: "Steve Marcucio", team: "Watertown Warriors", date: "3/1995" },
      { event: "50 Yard Freestyle", time: "27.58", swimmer: "Josh Wroblewski", team: "Plainville Blue Dolphins", date: "3/6/2010" },
      { event: "200 Yard Freestyle Relay", time: "2:03.98", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "1991" },
    ],
  },
  {
    group: "11–12 Girls",
    rows: [
      { event: "200 Yard Medley Relay", time: "2:05.04", swimmer: "Southbury Sharks", team: "Southbury Sharks", date: "2/24/2007" },
      { event: "100 Yard Freestyle", time: "57.05", swimmer: "Elizabeth McDonald", team: "Southbury Sharks", date: "2/24/2007" },
      { event: "50 Yard Butterfly", time: "28.88", swimmer: "Claire Moisan", team: "Watertown Warriors", date: "1/12/2008" },
      { event: "200 Yard Freestyle", time: "2:05.79", swimmer: "Elizabeth McDonald", team: "Southbury Sharks", date: "2/2007" },
      { event: "50 Yard Backstroke", time: "30.53", swimmer: "Jill Addesa", team: "Trumbull", date: "3/1978" },
      { event: "200 Yard IM", time: "2:20.95", swimmer: "Faith Martin", team: "Plainville Blue Dolphins", date: "2/2006" },
      { event: "50 Yard Breaststroke", time: "34.27", swimmer: "Tracy Belanger", team: "Naugatuck Thunderfish", date: "3/1987" },
      { event: "50 Yard Freestyle", time: "26.20", swimmer: "Jaime Crowley", team: "Plainville Blue Dolphins", date: "1/17/1997" },
      { event: "200 Yard Freestyle Relay", time: "1:51.50", swimmer: "Trumbull", team: "Trumbull", date: "3/17/1983" },
    ],
  },
  {
    group: "11–12 Boys",
    rows: [
      { event: "200 Yard Medley Relay", time: "1:57.57", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "1993" },
      { event: "100 Yard Freestyle", time: "53.34", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "2/1993" },
      { event: "50 Yard Butterfly", time: "26.78", swimmer: "Joseph Shepley", team: "Southbury Sharks", date: "2/21/2009" },
      { event: "200 Yard Freestyle", time: "1:58.24", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1993" },
      { event: "50 Yard Backstroke", time: "27.67", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1993" },
      { event: "200 Yard IM", time: "2:12.58", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "3/1993" },
      { event: "50 Yard Breaststroke", time: "32.63", swimmer: "Mike Krajewski", team: "Meriden Silverfins", date: "3/1994" },
      { event: "50 Yard Freestyle", time: "24.78", swimmer: "Darren Cooper", team: "Meriden Silverfins", date: "2/1993" },
      { event: "200 Yard Freestyle Relay", time: "1:44.35", swimmer: "Meriden Silverfins", team: "Meriden Silverfins", date: "3/1993" },
    ],
  },
  {
    group: "13–14 Girls",
    rows: [
      { event: "200 Yard Medley Relay", time: "1:56.90", swimmer: "Southbury Sharks", team: "Southbury Sharks", date: "2/21/2009" },
      { event: "100 Yard Freestyle", time: "54.68", swimmer: "Elizabeth McDonald", team: "Southbury Sharks", date: "2/28/2009" },
      { event: "100 Yard Butterfly", time: "1:03.71", swimmer: "Laura Doyle", team: "Trumbull", date: "1978" },
      { event: "200 Yard Freestyle", time: "1:58.58", swimmer: "Elizabeth McDonald", team: "Southbury Sharks", date: "2/28/2009" },
      { event: "100 Yard Backstroke", time: "1:03.19", swimmer: "Jaime Crowley", team: "Plainville Blue Dolphins", date: "1/1998" },
      { event: "200 Yard IM", time: "2:14.95", swimmer: "Faith Martin", team: "Plainville Blue Dolphins", date: "2/24/2007" },
      { event: "100 Yard Breaststroke", time: "1:10.52", swimmer: "Faith Martin", team: "Plainville Blue Dolphins", date: "2/24/2007" },
      { event: "50 Yard Freestyle", time: "25.39", swimmer: "Jaime Crowley", team: "Plainville Blue Dolphins", date: "1/17/1998" },
      { event: "200 Yard Freestyle Relay", time: "1:46.49", swimmer: "Southbury Sharks", team: "Southbury Sharks", date: "2/28/2009" },
    ],
  },
];
