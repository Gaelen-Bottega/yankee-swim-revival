export type Team = {
  slug: string;
  name: string;
  town: string;
  colors: [string, string];
  website: string;
};

export const TEAMS: Team[] = [
  {
    slug: "bristol-splash",
    name: "Bristol Splash",
    town: "Bristol, CT",
    colors: ["#F5CE4D", "#000000"],
    website: "https://www.gomotionapp.com/team/ctbstl/page/home",
  },
  {
    slug: "jcc-blue-marlins",
    name: "JCC Blue Marlins",
    town: "Woodbridge, CT",
    colors: ["#213B8B", "#FFFFFF"],
    website: "https://www.jccnh.org/blue-marlins-swim-team",
  },
  {
    slug: "naugatuck-thunderfish",
    name: "Naugatuck Thunderfish",
    town: "Naugatuck, CT",
    colors: ["#872130", "#000000"],
    website: "https://www.facebook.com/ThunderfishSwimClub/",
  },
  {
    slug: "newtown-torpedoes",
    name: "Newtown Torpedoes",
    town: "Newtown, CT",
    colors: ["#949599", "#FDDC23"],
    website: "https://www.gomotionapp.com/team/nent/page/home",
  },
  {
    slug: "oxford-otters",
    name: "Oxford Otters",
    town: "Oxford, CT",
    colors: ["#ED1C24", "#939598"],
    website: "https://www.gomotionapp.com/team/ctoo/page/home",
  },
  {
    slug: "watertown-warriors",
    name: "Watertown Warriors",
    town: "Watertown, CT",
    colors: ["#FF7900", "#000000"],
    website: "https://www.gomotionapp.com/team/ctycst/page/home",
  },
  {
    slug: "litchfield-aquatics",
    name: "Litchfield Area Swim Team",
    town: "Litchfield, CT",
    colors: ["#0b9444", "#000000"],
    website: "https://www.facebook.com/p/Litchfield-Swim-Team-100051750221788/",
  },
];
