/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Editor, JSONContent } from "@tiptap/core";

export interface EditorState {
  editor: Editor | null;
  formatStates: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strike: boolean;
    left: boolean;
    center: boolean;
    right: boolean;
  };
  content: JSONContent | null;

  // methods
  setEditor: (editor: Editor) => void;
  setFormatState: (id: keyof EditorState["formatStates"]) => void;
  setEditorContent: (content: any) => void;
  destroyEditor: () => void;
}

export type KeyFormatStates = keyof EditorState["formatStates"];
