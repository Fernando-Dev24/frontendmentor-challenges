import { create } from "zustand";
import { Editor } from "@tiptap/core";
import { EditorState } from "@/interfaces";

export const useEditorStore = create<EditorState>()((set, get) => ({
  editor: null,
  formatStates: {
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    left: true,
    center: false,
    right: false,
  },
  content: null,

  // methods

  // Create a new instance of Editor
  setEditor: (editor: Editor) => set({ editor }),

  // Manage formatState
  setFormatState: (id) => {
    const state = get();
    if (!state.editor) return;

    // Create a switch para saber que accion quiere ejecutar el usuario
    switch (id) {
      case "bold":
        state.editor.chain().focus().toggleBold().run();
        break;

      case "italic":
        state.editor.chain().focus().toggleItalic().run();
        break;

      case "underline":
        state.editor.chain().focus().toggleUnderline().run();
        break;

      case "strike":
        state.editor.chain().focus().toggleStrike().run();
        break;

      case "left":
        state.editor.chain().focus().setTextAlign("left").run();
        break;

      case "center":
        state.editor.chain().focus().setTextAlign("center").run();
        break;

      case "right":
        state.editor.chain().focus().setTextAlign("right").run();
        break;

      default:
        break;
    }

    // Manage the formar state
    set({
      ...state,
      formatStates: {
        ...state.formatStates,
        left: false,
        center: false,
        right: false,
        [id]: !state.formatStates[id],
      },
    });
  },

  // Storage content
  setEditorContent: (content) => {
    set({
      content,
    });
  },

  // Destroy editor instance when editor component is destroy
  destroyEditor: () => {
    const { editor } = get();
    if (editor) editor.destroy();
  },
}));
