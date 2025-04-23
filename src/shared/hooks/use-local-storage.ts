import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = globalThis.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Error accessing localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value: ((value_: T) => T) | T) => {
    try {
      const valueToStore =
        typeof value === "function"
          ? (value as (value_: T) => T)(storedValue)
          : value;

      setStoredValue(valueToStore);
      globalThis.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn("Error saving to localStorage:", error);
    }
  };

  const removeValue = () => {
    try {
      globalThis.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn("Error removing from localStorage:", error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
}
