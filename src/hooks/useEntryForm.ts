import { useState } from "react";
import type { F1AthleteData } from "../types/LeaderBoard";

// ─── types ───────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  lastname: string;
  colorCode: string;
  timeInMinutes: string;
  timeInSeconds: string;
  timeInMilliseconds: string;
}

const DEFAULT_FORM: FormState = {
  name: "",
  lastname: "",
  colorCode: "#FFFFFF",
  timeInMinutes: "",
  timeInSeconds: "",
  timeInMilliseconds: "",
};

const TIME_CONFIG = {
  timeInMinutes: { maxLength: 2, maxVal: 99 },
  timeInSeconds: { maxLength: 2, maxVal: 59 },
  timeInMilliseconds: { maxLength: 3, maxVal: 999 },
};

// ─── hook ────────────────────────────────────────────────────────────────────

/**
 * Manages form state, validation, and submission for adding a new F1 entry.
 * @param onAddEntry - called with the validated new entry on successful submit
 */
export function useEntryForm(onAddEntry: (entry: F1AthleteData) => void) {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [error, setError] = useState("");

  const setField = <K extends keyof FormState>(key: K, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setForm(DEFAULT_FORM);
    setError("");
  };

  const handleTimeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
    ];
    const char = e.key;

    if (!/^[0-9]$/.test(char) && !allowedKeys.includes(char)) {
      e.preventDefault();
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const config = TIME_CONFIG[name as keyof typeof TIME_CONFIG];
    const cleanValue = value.replace(/\D/g, "");

    if (config) {
      const timeValidValue = parseInt(cleanValue, 10);

      if (
        timeValidValue > config.maxVal ||
        cleanValue.length > config.maxLength
      ) {
        setField(name as keyof typeof TIME_CONFIG, config.maxVal.toString());
      } else {
        setField(name as keyof typeof TIME_CONFIG, cleanValue);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // clear previous error before validating

    if (!form.name.trim() || !form.lastname.trim()) {
      setError("Please enter both name and lastname");
      return;
    }

    if (
      !form.timeInMinutes ||
      !form.timeInSeconds ||
      !form.timeInMilliseconds
    ) {
      setError("Please enter a valid time");
      return;
    }

    const minutes = parseInt(form.timeInMinutes, 10);
    const seconds = parseInt(form.timeInSeconds, 10);
    const milliseconds = parseInt(form.timeInMilliseconds, 10);

    const newEntry: F1AthleteData = {
      id: crypto.randomUUID(),
      name: form.name,
      lastname: form.lastname,
      colorCode: form.colorCode,
      timeInMs: minutes * 60_000 + seconds * 1_000 + milliseconds,
    };

    onAddEntry(newEntry);
    resetForm();
  };

  return {
    form,
    setField,
    error,
    handleSubmit,
    handleTimeKeyDown,
    handleTimeChange,
    resetForm,
  };
}
