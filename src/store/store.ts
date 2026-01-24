import { create } from "zustand";

type TeamName = "Player" | "Enemy"

type ECS_Store = {
  units: string[]; // array of ids
  team: Record<TeamName, string[]>;
}

const useECS = create<ECS_Store>((set, get) => ({
  units: [],
  team: {
    "Player": [],
    "Enemy": [],
  },
}))