"use client";

import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useProvider } from "@/hooks";
import { Editor, JSONContent } from "@tiptap/core";
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
import { KeyFormatStates } from "@/interfaces";
import clsx from "clsx";

interface Props {
  content: JSONContent | null | undefined;
}

/* VARIABLES */
const iconSize = 20;
const buttons = [
  {
    id: "bold",
    data_tooltip_content: "Bold",
    className: "editor-toolbar-btn",
    icon: <FaBold size={iconSize} />,
  },
  {
    id: "italic",
    data_tooltip_content: "Italic",
    className: "editor-toolbar-btn",
    icon: <FaItalic size={iconSize} />,
  },
  {
    id: "underline",
    data_tooltip_content: "Underline",
    className: "editor-toolbar-btn",
    icon: <FaUnderline size={iconSize} />,
  },
  {
    id: "strike",
    data_tooltip_content: "Strike Through",
    className: "editor-toolbar-btn",
    icon: <FaStrikethrough size={iconSize} />,
  },
  {
    id: "left",
    data_tooltip_content: "Text left",
    className: "editor-toolbar-btn",
    icon: <FaAlignLeft size={iconSize} />,
  },
  {
    id: "center",
    data_tooltip_content: "Text center",
    className: "editor-toolbar-btn",
    icon: <FaAlignCenter size={iconSize} />,
  },
  {
    id: "right",
    data_tooltip_content: "Text right",
    className: "editor-toolbar-btn",
    icon: <FaAlignRight size={iconSize} />,
  },
];

export const NoteEditor = ({ content }: Props) => {
  const editorElRef = useRef<HTMLDivElement>(null);

  const { editorState } = useProvider();
  const {
    editor,
    formatStates,
    setEditor,
    setFormatState,
    setEditorContent,
    destroyEditor,
  } = editorState;

  /* STATES */
  const [isEditorEmpty, setIsEditorEmpty] = useState(editor?.isEmpty ?? true);

  /* FUNCTION */
  const dispatchFormat = (id: KeyFormatStates) => {
    setFormatState(id);
  };

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
          types: ["heading", "paragraph"],
          alignments: ["left", "center", "right"],
          defaultAlignment: "left",
        }),
      ],
      content: content ?? ``,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
        },
      },
      onUpdate: ({ editor }) => {
        setEditorContent(editor.getJSON());
        setIsEditorEmpty(editor.isEmpty);
      },
    });

    // Set editor
    setEditor(newEditor);

    // Limpieza al desmontar
    return () => {
      destroyEditor();
    };
  }, [editorElRef, destroyEditor, setEditor, setEditorContent, content]);

  return (
    <div className="w-full my-5">
      <div className="mb-8">
        {/* BUTTONS */}
        <div className="w-fit flex justify-start items-center space-x-2 py-2 px-5 rounded-md text-gray-400 bg-neutral-800 transition-shadow duration-300 hover:shadow-lg">
          {/* RENDER BUTTONS */}
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => dispatchFormat(btn.id as KeyFormatStates)}
              data-tooltip-content={btn.data_tooltip_content}
              className={clsx(btn.className, {
                active: formatStates[btn.id as KeyFormatStates],
              })}
              data-tooltip-id="tooltip_id"
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>

      {/* EDITOR */}
      <div className="relative">
        <div
          id="wysiwyg-text-example"
          ref={editorElRef}
          className="mb-40 min-h-[400px]"
        >
          {isEditorEmpty && (
            <span className="absolute top-0 left-0 text-gray-400 pointer-events-none">
              Start writing here...
            </span>
          )}
        </div>
      </div>

      {/* TOOLTIP */}
      <Tooltip id="tooltip_id" className="relative !z-50" />
    </div>
  );
};
