import { useMemo, useState } from "react";
import type { F1AthleteData, F1LeaderboardEntry } from "../types/LeaderBoard";
import { initialMockData } from "../data/mockData";
import { buildLeaderboard } from "../lib/leaderboardUtils";
import LeaderBoardRow from "./LeaderBoardRow";
import AddEntryModal from "./AddEntryModal";

export default function LeaderBoard() {
  const [participants, setParticipants] =
    useState<F1AthleteData[]>(initialMockData);

  const [showAddEntryForm, setShowAddEntryForm] = useState(false);

  const leaderboard: F1LeaderboardEntry[] = useMemo(
    () => buildLeaderboard(participants),
    [participants],
  );

  const handleAddEntry = (newEntry: F1AthleteData) => {
    setParticipants((prev) => [...prev, newEntry]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center py-10 px-4 md:py-20">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-white text-shadow-lg">
          LEADERBOARD
        </h1>

        <div className="w-full max-w-[600px] flex justify-end items-center mt-8 text-sm md:text-lg">
          <button
            type="button"
            onClick={() => setShowAddEntryForm(true)}
            className="bg-black text-white py-2 px-4 text-md rounded-bl-xl hover:bg-blue-600 transition-colors"
          >
            Add Entry
          </button>
        </div>

        <ul className="w-full max-w-[600px] block my-2">
          {leaderboard.map((entry) => (
            <LeaderBoardRow key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>

      {showAddEntryForm && (
        <AddEntryModal
          onAddEntry={handleAddEntry}
          onClose={() => setShowAddEntryForm(false)}
        />
      )}
    </>
  );
}
