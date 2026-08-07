export type DocItem = {
  title: string;
  description: string;
  category: "Registration" | "Rules" | "Meets" | "Records";
  status: "available" | "placeholder";
  url?: string;
};

export const DOCUMENTS: DocItem[] = [
  // { title: "Swimmer Registration Form", description: "Required for every swimmer prior to first competition.", category: "Registration", status: "placeholder" },
  // { title: "Parent Waiver & Release", description: "Liability release signed by parent or legal guardian.", category: "Registration", status: "placeholder" },
  // { title: "Coach & Volunteer Code of Conduct", description: "Expectations for adult participants at league events.", category: "Registration", status: "placeholder" },
  { title: "YSL Bylaws", description: "Governing document covering rules of the league.", category: "Rules", status: "available", url: "https://drive.google.com/file/d/1sCP0oMoDmAQxiyvOsdG34C_V4YGqaJay/view?usp=drive_link" },
  { title: "All-Stars Double-Qualification Rule", description: "Alternate pathway to Yankee League All Stars qualification.", category: "Rules", status: "placeholder" },
  { title: "Dual Meet Entry Template", description: "Meet Manager template used by coaches to submit meet entries.", category: "Meets", status: "placeholder" },
  // { title: "Meet Scoring Sheet", description: "Blank scoring sheet used at dual meets.", category: "Meets", status: "placeholder" },
  // { title: "Records Update Form", description: "Submit and verify new league records.", category: "Records", status: "placeholder" },
];
