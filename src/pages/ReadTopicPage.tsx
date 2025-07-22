import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ProfileCardLarge from "@/components/ProfileCardLarge";
import type { Topic } from "@/types/topic";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { useAuthStore } from "@/stores/auth";
import { toast } from "sonner";

export default function ReadTopicPage() {
  const { id } = useParams();
  const authStore = useAuthStore();
  const [topic, setTopic] = useState<Topic>();
  const editor = useCreateBlockNote();
  const navigate = useNavigate();

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

  const deleteTopic = async () => {
    const { data, error } = await supabase
      .from("topic")
      .delete()
      .eq("id", id)
      .select()
      .setHeader("Authorization", `bearer ${authStore.session?.access_token}`);

    if (error) {
      toast.error("게시물이 삭제되지 않았습니다.");
    } else {
      console.log(error, data);
      toast.success("게시물이 삭제되었습니다.");
      navigate("/topics");
    }
  };

  const DeleteButton = () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2Icon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>삭제하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            이 작업은 되돌릴 수 없습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteTopic()}>
            삭제하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

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

          {authStore.user?.id === topic?.author && <DeleteButton />}
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
