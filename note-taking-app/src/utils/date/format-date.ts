import { format } from "date-fns";

export const formatDate = (date = new Date()) => {
  return format(date, "PPPP");
};

export const formatShortDate = (date = new Date()) => {
  return format(date, "dd-MM-yyyy");
};
