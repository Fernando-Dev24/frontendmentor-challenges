"use client";

import {
  type ReactNode,
  type RefObject,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Loader } from "@/components";
import { useModalStore } from "@/store/modals/modals-store";
import { ModalsState } from "@/interfaces";

interface Props {
  children: ReactNode;
}

interface ContextType {
  modalsState: ModalsState;
  appEl: RefObject<HTMLElement | null>;
}

export const Context = createContext({} as ContextType);

export const Provider = ({ children }: Props) => {
  const modalsState = useModalStore((state) => state);

  const [loaded, setLoaded] = useState(false);

  const appEl = useRef<HTMLElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <Context.Provider
      value={{
        modalsState,
        appEl,
      }}
    >
      <main ref={appEl}>{children}</main>
    </Context.Provider>
  );
};
