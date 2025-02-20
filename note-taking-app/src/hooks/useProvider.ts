import { useContext } from "react";
import { Context } from "@/provider/provider";

export const useProvider = () => {
  const context = useContext(Context);
  return {
    ...context,
  };
};
