import type { F1LeaderboardEntry } from "../types/LeaderBoard";
import { formatLapTime } from "../lib/leaderboardUtils";
import AnimatedContent from "./AnimatedContent";

interface LeaderBoardRowProps {
  entry: F1LeaderboardEntry;
}

export default function LeaderBoardRow({ entry }: LeaderBoardRowProps) {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={0.4 + entry.position * 0.1}
      ease="power3.out"
      initialOpacity={0.1}
      animateOpacity
      scale={1}
      threshold={0}
      delay={0}
    >
      <li className="w-full flex items-stretch my-2 rounded-bl-4xl bg-black/80">
        {/* Position + color accent */}
        <span
          className="position w-[60px] sm:w-[80px] text-center text-white text-2xl sm:text-3xl p-2 sm:p-3 rounded-bl-4xl shrink-0"
          style={{ borderRight: `12px solid ${entry.colorCode}` }}
        >
          {entry.position}
        </span>

        {/* Athlete name */}
        <span className="athlete-name pl-3 sm:pl-5 flex flex-col sm:flex-row grow sm:items-center text-white overflow-hidden">
          <span className="mr-2 text-sm sm:text-lg truncate">{entry.name}</span>
          <span className="font-bold text-base sm:text-xl uppercase truncate">
            {entry.lastname}
          </span>
        </span>

        {/* Lap time */}
        <span className="lap-time w-[90px] sm:w-[120px] flex items-center justify-end text-white text-base sm:text-xl p-2 pr-3 sm:p-3 sm:pr-4 shrink-0">
          {formatLapTime(entry.timeInMs)}
        </span>
      </li>
    </AnimatedContent>
  );
}
