"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { EditorState } from "lexical";

interface Props {
  editorState: EditorState | null;
}

const theme = {
  // Theme styling goes here
  //...
};

function onError(error: Error) {
  console.error(error);
}

const initialConfig = {
  namespace: "note_editor",
  theme,
  onError,
};

export const NoteEditor = ({ editorState }: Props) => {
  return (
    <LexicalComposer
      initialConfig={{
        ...initialConfig,
        editorState: editorState,
      }}
    >
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={"Enter some text..."}
            placeholder={<div>Enter some text</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      {/* <OnChangePlugin onChange={onEditorChange} /> */}
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
};
