export interface F1AthleteData {
  id: string;
  name: string;
  lastname: string;
  colorCode: string;
  timeInMs: number;
}
export interface F1LeaderboardEntry extends F1AthleteData {
  position: number;
}
