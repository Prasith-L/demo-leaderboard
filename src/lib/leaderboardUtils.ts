import type { F1AthleteData, F1LeaderboardEntry } from "../types/LeaderBoard";

/**
 * Sorts athletes by timeInMs ascending and attaches a 1-based position.
 * Returns a new array — does not mutate the input.
 */
export function buildLeaderboard(data: F1AthleteData[]): F1LeaderboardEntry[] {
  return [...data]
    .sort((a, b) => a.timeInMs - b.timeInMs)
    .map((athlete, index) => ({ ...athlete, position: index + 1 }));
}

/**
 * Formats a lap time given in milliseconds to "M:SS.mmm"
 * @example formatLapTime(92456) → "1:32.456"
 */
export function formatLapTime(ms: number): string {
  const minutes = Math.floor(ms / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1_000);
  const millis = ms % 1_000;
  return `${minutes}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
}
