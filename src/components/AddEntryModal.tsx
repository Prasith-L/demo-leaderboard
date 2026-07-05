import type { F1AthleteData } from "../types/LeaderBoard";
import { useEntryForm } from "../hooks/useEntryForm";

interface AddEntryModalProps {
  onAddEntry: (entry: F1AthleteData) => void;
  onClose: () => void;
}

export default function AddEntryModal({
  onAddEntry,
  onClose,
}: AddEntryModalProps) {
  const {
    form,
    setField,
    error,
    handleSubmit,
    handleTimeKeyDown,
    handleTimeChange,
  } = useEntryForm((entry) => {
    onAddEntry(entry);
    onClose();
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-[400px]"
      >
        {error && (
          <p className="text-red-400 text-sm mb-3 bg-red-900/30 p-2 rounded">
            {error}
          </p>
        )}
        <h1 className="text-2xl font-bold mb-4 text-center">Add Entry</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            className="w-full p-2 bg-white border border-slate-700 rounded focus:outline-none focus:border-orange-500"
            placeholder="e.g. Carlos"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            value={form.lastname}
            onChange={(e) => setField("lastname", e.target.value)}
            className="w-full p-2 bg-white border border-slate-700 rounded focus:outline-none focus:border-orange-500"
            placeholder="e.g. Sainz"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Team Color / Flag Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={form.colorCode}
              onChange={(e) => setField("colorCode", e.target.value)}
              className="w-10 h-10 bg-transparent border-0 cursor-pointer"
            />
            <span className="text-sm text-slate-400">
              {form.colorCode.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Lap Time</label>
          <div className="flex justify-between items-center gap-1 sm:gap-2">
            <input
              name="timeInMinutes"
              type="text"
              placeholder="Min"
              value={form.timeInMinutes}
              onChange={handleTimeChange}
              onKeyDown={handleTimeKeyDown}
              className="w-16 sm:w-20 p-2 bg-white border border-slate-700 rounded text-center"
            />
            <span className="font-bold">:</span>
            <input
              name="timeInSeconds"
              type="text"
              placeholder="Sec"
              value={form.timeInSeconds}
              onChange={handleTimeChange}
              onKeyDown={handleTimeKeyDown}
              className="w-16 sm:w-20 p-2 bg-white border border-slate-700 rounded text-center"
            />
            <span className="font-bold">.</span>
            <input
              name="timeInMilliseconds"
              type="text"
              placeholder="Ms"
              value={form.timeInMilliseconds}
              onChange={handleTimeChange}
              onKeyDown={handleTimeKeyDown}
              className="w-20 sm:w-24 p-2 bg-white border border-slate-700 rounded text-center"
            />
          </div>
        </div>

        <div className="flex justify-around">
          <button
            type="button"
            onClick={onClose}
            className="bg-red-500 text-white py-2 px-4 rounded-bl-xl hover:bg-red-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-bl-xl hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
