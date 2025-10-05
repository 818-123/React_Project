const now = Date.now();

const incidents = [
  { id: "INC-741085", priority: "Medium", severity: "3 - Low", status: "Closed", createdAt: now - 1000 * 60 * 60 * 5 },
  { id: "INC-602934", priority: "Critical", severity: "1 - Critical", status: "Resolved", createdAt: now - 1000 * 60 * 60 * 24 },
  { id: "INC-74108222", priority: "Medium", severity: "3 - Low", status: "Closed", createdAt: now - 1000 * 60 * 30 },
  { id: "INC-741085221111", priority: "Medium", severity: "3 - Low", status: "Closed", createdAt: now - 1000 * 60 * 60 * 10 },
  { id: "INC-7412235085", priority: "Medium", severity: "3 - Low", status: "Closed", createdAt: now - 1000 * 60 * 60 * 48 },
  { id: "INC-7410854546556", priority: "Medium", severity: "3 - Low", status: "Closed", createdAt: now - 1000 * 60 * 120 },
];

export default incidents;