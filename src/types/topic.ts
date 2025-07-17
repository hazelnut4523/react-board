import type { Block } from "@blocknote/core";

export interface Topic {
  id: string;
  title: string;
  upload_date: string;
  body: Block[];
  author: string;
  category: string;
  thumbnail: string;
}
