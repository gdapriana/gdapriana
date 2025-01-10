"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState, ReactNode } from "react";

interface ScrollContextType {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}

const ProgressContext = createContext<ScrollContextType>({
  progress: 0,
  setProgress: () => {},
});

const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<number>(0);
  return <ProgressContext.Provider value={{ progress, setProgress }}>{children}</ProgressContext.Provider>;
};

export { ProgressContext, ProgressProvider };
