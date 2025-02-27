import type { Editor } from "@tiptap/core";

export interface EditorState {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
  destroyEditor: () => void;

  // methods
}
