import { ModalsState } from "@/interfaces";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useModalStore = create<ModalsState>()(
  devtools((set, get) => ({
    modals: {
      search_modal: false,
      tags_modal: false,
    },

    handleModal: (id) => {
      const { modals } = get();
      set({
        modals: {
          ...modals,
          [id]: !modals[id],
        },
      });
    },
  }))
);
