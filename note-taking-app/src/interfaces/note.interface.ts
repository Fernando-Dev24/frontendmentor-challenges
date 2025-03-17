import { JSONContent } from "@tiptap/core";

export interface Note {
  id?: string;
  title: string;
  content: JSONContent | null;
  archived: boolean;
  tags: string[];
  created_at: Date;
  update_at: Date;
}
