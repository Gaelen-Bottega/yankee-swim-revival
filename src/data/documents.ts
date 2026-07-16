export type DocItem = {
  title: string;
  description: string;
  category: "Registration" | "Rules" | "Meets" | "Records";
  status: "available" | "placeholder";
};

export const DOCUMENTS: DocItem[] = [
  { title: "Swimmer Registration Form", description: "Required for every swimmer prior to first competition.", category: "Registration", status: "placeholder" },
  { title: "Parent Waiver & Release", description: "Liability release signed by parent or legal guardian.", category: "Registration", status: "placeholder" },
  { title: "Coach & Volunteer Code of Conduct", description: "Expectations for adult participants at league events.", category: "Registration", status: "placeholder" },
  { title: "YSL Constitution", description: "Governing document covering rules of competition, officers, and awards.", category: "Rules", status: "placeholder" },
  { title: "Rules of Competition (Article VI)", description: "Meet format, event order, timing rules, and records criteria.", category: "Rules", status: "placeholder" },
  { title: "All-Stars Double-Qualification Rule", description: "Alternate pathway to Yankee League All Stars qualification.", category: "Rules", status: "placeholder" },
  { title: "Dual Meet Entry Template", description: "Spreadsheet used by coaches to submit meet entries.", category: "Meets", status: "placeholder" },
  { title: "Meet Scoring Sheet", description: "Blank scoring sheet used at dual meets.", category: "Meets", status: "placeholder" },
  { title: "Records Update Form", description: "Submit and verify new league records.", category: "Records", status: "placeholder" },
];
