"use client";

import { useEffect, useRef } from "react";
import { useProvider } from "@/hooks";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";

/* ICONS */
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa6";

/* VARIABLES */
const iconSize = 20;

export const NoteEditor = () => {
  const editorElRef = useRef<HTMLDivElement>(null);

  const { editorState } = useProvider();
  const { setEditor, destroyEditor } = editorState;

  useEffect(() => {
    if (!editorElRef.current) return;

    // Inicialización del editor
    const newEditor = new Editor({
      element: editorElRef.current,
      extensions: [
        StarterKit.configure({}),
        Underline,
        TextStyle,
        TextAlign.configure({
          types: ["paragraph"],
          alignments: ["left", "center", "right"],
          defaultAlignment: "right",
        }),
      ],
      content: ``,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
        },
      },
    });

    // Set editor
    setEditor(newEditor);

    // todo: Event Listeners para los botones
    /* const setupEventListeners = () => {
      document
        .getElementById("toggle-bold")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleBold().run()
        );
      document
        .getElementById("toggle-italic")
        ?.addEventListener("click", () =>
          editor?.chain().focus().toggleItalic().run()
        );
      document
        .getElementById("toggle-underline")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleUnderline().run()
        );
      document
        .getElementById("toggle-strike")
        ?.addEventListener("click", () =>
          editor.chain().focus().toggleStrike().run()
        );
      document
        .getElementById("format-text-left")
        ?.addEventListener("click", () =>
          editor.chain().focus().setTextAlign("left").run()
        );
      document
        .getElementById("format-text-center")
        ?.addEventListener("click", () =>
          editor.chain().focus().setTextAlign("center").run()
        );
      document
        .getElementById("format-text-right")
        ?.addEventListener("click", () =>
          editor.chain().focus().setTextAlign("right").run()
        );
    };

    setupEventListeners(); */

    // Limpieza al desmontar
    return () => {
      destroyEditor();
    };
  }, [editorElRef, destroyEditor, setEditor]);

  return (
    <div className="w-full my-5">
      {/* Toolbar */}

      <div className="mb-8">
        {/* BUTTONS */}
        <div className="w-fit flex justify-start items-center space-x-2 py-2 px-5 rounded-md text-gray-400 bg-neutral-800 transition-shadow duration-300 hover:shadow-lg">
          {/* BOLD BUTTON */}
          <button
            id="toggle-bold"
            data-tooltip-target="tooltip-bold"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaBold size={iconSize} />
            <span className="sr-only">Bold</span>
          </button>

          {/* ITALIC BUTTON */}
          <button
            id="toggle-italic"
            data-tooltip-target="tooltip-italic"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaItalic size={iconSize} />
            <span className="sr-only">Italic</span>
          </button>

          {/* UNDERLINE BUTTON */}
          <button
            id="toggle-underline"
            data-tooltip-target="tooltip-underline"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaUnderline size={iconSize} />
            <span className="sr-only">Underline</span>
          </button>

          {/* STRIKE BUTTON */}
          <button
            id="toggle-strike"
            data-tooltip-target="tooltip-strike"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaStrikethrough size={iconSize} />
            <span className="sr-only">Strike</span>
          </button>

          {/* TEXT LEFT */}
          <button
            id="format-text-left"
            data-tooltip-target="tooltip-strike"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaAlignLeft size={iconSize} />
            <span className="sr-only">Strike</span>
          </button>

          {/* TEXT CENTER */}
          <button
            id="format-text-center"
            data-tooltip-target="tooltip-strike"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaAlignCenter size={iconSize} />
            <span className="sr-only">Strike</span>
          </button>

          {/* TEXT RIGHT */}
          <button
            id="format-text-right"
            data-tooltip-target="tooltip-strike"
            type="button"
            className="editor-toolbar-btn"
          >
            <FaAlignRight size={iconSize} />
            <span className="sr-only">Strike</span>
          </button>
        </div>
      </div>

      {/* EDITOR */}
      <div className="">
        <label htmlFor="wysiwyg-text-example" className="">
          Write comment
        </label>
        <div id="wysiwyg-text-example" ref={editorElRef} />
      </div>
    </div>
  );
};
