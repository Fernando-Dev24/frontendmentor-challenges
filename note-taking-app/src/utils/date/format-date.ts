import { format } from "date-fns";

export const formatDate = (date: Date = new Date()) => {
  return format(date, "PPPP");
};
