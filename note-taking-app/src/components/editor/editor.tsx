"use client"; // Esto indica que el componente se ejecuta en el cliente

import { useEffect } from "react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor } from "@/hooks";

export const NoteEditor = () => {
  const { editorRef } = useEditor();
  console.log(editorRef);
  console.log(editorRef?.current);

  useEffect(() => {
    if (!editorRef.current) return;

    // Inicialización del editor
    const editor = new Editor({
      element: editorRef.current,
      extensions: [StarterKit.configure({}), Underline, TextStyle],
      content: ``,
      editorProps: {
        attributes: {
          className:
            "format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl mx-auto",
        },
      },
      // todo: add on update
    });

    // Event Listeners para los botones
    const setupEventListeners = () => {
      document
        .getElementById("toggleBoldButton")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleBold().run()
        );
      document
        .getElementById("toggleItalicButton")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleItalic().run()
        );
      document
        .getElementById("toggleUnderlineButton")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleUnderline().run()
        );
      document
        .getElementById("toggleStrikeButton")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleStrike().run()
        );
    };

    setupEventListeners();

    // Limpieza al desmontar
    return () => {
      if (editor) editor.destroy();
    };
  }, [editorRef]);

  return (
    <div className="w-full">
      {/* Toolbar (puedes personalizarlo según necesites) */}

      <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-600">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">
              {/* BOLD BUTTON */}
              <button
                id="toggleBoldButton"
                data-tooltip-target="tooltip-bold"
                type="button"
                className="p-1.5 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                  />
                </svg>
                <span className="sr-only">Bold</span>
              </button>
              <div
                id="tooltip-bold"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
              >
                Toggle bold
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>

              {/* ITALIC BUTTON */}
              <button
                id="toggleItalicButton"
                data-tooltip-target="tooltip-italic"
                type="button"
                className="p-1.5 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                  />
                </svg>
                <span className="sr-only">Italic</span>
              </button>
              <div
                id="tooltip-italic"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
              >
                Toggle italic
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>

              {/* UNDERLINE BUTTON */}
              <button
                id="toggleUnderlineButton"
                data-tooltip-target="tooltip-underline"
                type="button"
                className="p-1.5 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
                  />
                </svg>
                <span className="sr-only">Underline</span>
              </button>
              <div
                id="tooltip-underline"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
              >
                Toggle underline
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>

              {/* STRIKE BUTTON */}
              <button
                id="toggleStrikeButton"
                data-tooltip-target="tooltip-strike"
                type="button"
                className="p-1.5 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"
                  />
                </svg>
                <span className="sr-only">Strike</span>
              </button>
              <div
                id="tooltip-strike"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
              >
                Toggle strike
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>

        {/* EDITOR */}
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
          <label htmlFor="wysiwyg-text-example" className="sr-only">
            Write comment
          </label>
          <div
            id="wysiwyg-text-example"
            ref={editorRef}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          ></div>
        </div>
      </div>
    </div>
  );
};
