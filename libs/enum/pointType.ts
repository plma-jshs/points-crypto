const types = ["REWARD", "PENALTY", "ETC"] as const;
export type PointType = (typeof types)[number];
