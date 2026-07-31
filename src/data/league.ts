export const LEAGUE = {
  name: "Yankee Swim League",
  short: "YSL",
  tagline: "Competition. Camaraderie. Excellence.",
  region: "Connecticut",
  teamsCount: 7,
  seasons: "40+",
  description:
    "The Yankee Swim League is comprised of teams located throughout the state of Connecticut, with a proud history spanning more than three decades of youth competitive swimming.",
};

export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Teams", to: "/teams" },
  { label: "Schedule", to: "/schedule" },
  { label: "Results", to: "/results" },
  { label: "Records", to: "/records" },
  { label: "Registration", to: "/registration" },
  { label: "Documents", to: "/documents" },
  { label: "Contact", to: "/contact" },
];
