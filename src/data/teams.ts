export type Team = {
  slug: string;
  name: string;
  town: string;
  mascot: string;
  colors: [string, string];
};

export const TEAMS: Team[] = [
  { slug: "bristol-splash", name: "Bristol Splash", town: "Bristol, CT", mascot: "Splash", colors: ["#0055B8", "#FFFFFF"] },
  { slug: "madison-marlins", name: "Madison Marlins", town: "Madison, CT", mascot: "Marlin", colors: ["#001F5B", "#FFC72C"] },
  { slug: "naugatuck-thunderfish", name: "Naugatuck Thunderfish", town: "Naugatuck, CT", mascot: "Thunderfish", colors: ["#0B2545", "#E63946"] },
  { slug: "new-milford-barracudas", name: "New Milford Barracudas", town: "New Milford, CT", mascot: "Barracuda", colors: ["#005B41", "#FFFFFF"] },
  { slug: "newtown-torpedoes", name: "Newtown Torpedoes", town: "Newtown, CT", mascot: "Torpedo", colors: ["#001F5B", "#C0C0C0"] },
  { slug: "oxford-razors", name: "Oxford Razors", town: "Oxford, CT", mascot: "Razor", colors: ["#111111", "#0055B8"] },
  { slug: "plainville-blue-dolphins", name: "Plainville Blue Dolphins", town: "Plainville, CT", mascot: "Blue Dolphin", colors: ["#0055B8", "#FFFFFF"] },
  { slug: "seymour-wildcats", name: "Seymour Wildcats", town: "Seymour, CT", mascot: "Wildcat", colors: ["#8B0000", "#FFFFFF"] },
  { slug: "trumbull-pisces", name: "Trumbull Pisces", town: "Trumbull, CT", mascot: "Pisces", colors: ["#001F5B", "#FFC72C"] },
  { slug: "watertown-warriors", name: "Watertown Warriors", town: "Watertown, CT", mascot: "Warrior", colors: ["#8B0000", "#001F5B"] },
  { slug: "west-haven-wizards", name: "West Haven Wizards", town: "West Haven, CT", mascot: "Wizard", colors: ["#4B1E7A", "#FFFFFF"] },
];
