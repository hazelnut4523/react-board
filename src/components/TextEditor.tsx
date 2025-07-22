import { BlockNoteView } from "@blocknote/shadcn";
import { useCreateBlockNote } from "@blocknote/react";
import { ko } from "@blocknote/core/locales";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import type { Block } from "@blocknote/core";

interface Props {
  onChange?: (document: Block[]) => void;
  uploadFile?: (
    file: File,
    blockId?: string,
  ) => Promise<string | Record<string, any>>;
}

export default function TextEditor(props: Props) {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    dictionary: ko,
    uploadFile: props.uploadFile,
  });

  const onChange = () => {
    if (props.onChange) props.onChange(editor.document);
  };

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} onChange={onChange} theme="dark" />;
}
