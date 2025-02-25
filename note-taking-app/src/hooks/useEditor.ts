import { useRef } from "react";

export const useEditor = () => {
  const editorRef = useRef(null);

  return {
    editorRef,
  };
};
