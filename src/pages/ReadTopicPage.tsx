import ProfileCardLarge from "@/components/ProfileCardLarge";
import type { Topic } from "@/types/topic";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";

export default function ReadTopicPage() {
  const { id } = useParams();
  const [topic, setTopic] = useState<Topic>();
  const editor = useCreateBlockNote();

  useEffect(() => {
    supabase
      .from("topic")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data }) => {
        setTopic(data);

        editor.replaceBlocks(editor.document, data?.body);
      });
  }, [id]);

  return (
    <div className="flex flex-col gap-4">
      <TopicHeader
        thumbnail_url={topic?.thumbnail ?? ""}
        title={topic?.title ?? ""}
        uploaded_at={topic?.upload_date ?? ""}
      />

      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <BlockNoteView editor={editor} theme="dark" editable={false} />
        </div>

        <div className="w-1/4">
          <ProfileCardLarge />
        </div>
      </div>
    </div>
  );
}

function TopicHeader(props: {
  title: string;
  uploaded_at: string;
  thumbnail_url: string;
}) {
  return (
    <header
      style={{ "--thumbnail-url": `url(${props.thumbnail_url})` }}
      className={`w-full bg-(image:--thumbnail-url)`}
    >
      <div className="flex flex-col gap-2 items-center w-full bottom-[50%] py-24">
        <h1 className="text-3xl font-bold">{props.title}</h1>

        <time>
          {props.uploaded_at.split("T")[0].replaceAll("-", ". ") + "."}
        </time>
      </div>
    </header>
  );
}
