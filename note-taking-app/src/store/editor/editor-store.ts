import { create } from "zustand";
import { Editor } from "@tiptap/core";
import { EditorState } from "@/interfaces";

export const useEditorStore = create<EditorState>()((set, get) => ({
  editor: null,
  setEditor: (editor: Editor) => set({ editor }),
  destroyEditor: () => {
    const { editor } = get();
    if (editor) editor.destroy();
  },
}));
