"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface HamburgerContentContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerContentContext = createContext<HamburgerContentContextType>({
  open: false,
  setOpen: () => {},
});

const HamburgerContentProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return <HamburgerContentContext.Provider value={{ open, setOpen }}>{children}</HamburgerContentContext.Provider>;
};

export { HamburgerContentContext, HamburgerContentProvider };
