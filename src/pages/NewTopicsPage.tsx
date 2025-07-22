import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOPIC_CATEGORY } from "@/constants/category.const";
import supabase from "@/utils/supabase";
import { ArrowLeft, Asterisk, Rocket, Trash2Icon } from "lucide-react";
import { useAuthStore } from "@/stores/auth";
import { useNavigate } from "react-router-dom";
import "@blocknote/shadcn/style.css";
import "@blocknote/core/fonts/inter.css";
import { toast } from "sonner";
import { useState } from "react";
import Layout from "@/Layout";
import type { Block } from "@blocknote/core";
import { Label } from "@/components/ui/label";
import ImageUpload from "@/components/ImageUpload";
import TextEditor from "@/components/TextEditor";

export default function NewTopicsPage() {
  // hooks
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<Block[]>();
  const [category, setCategory] = useState<string>();
  const [thumbnail, setThumbnail] = useState<URL | File | null>(null);
  const authStore = useAuthStore();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const uuid = crypto.randomUUID();

    // 입력 했는지 검증
    if (!title || !body || !category) {
      if (!title) {
        toast.error("제목을 입력해주세요.");
      }

      if (!body) {
        toast.error("내용을 입력해주세요.");
      }

      if (!category) {
        toast.error("카테고리를 선택해주세요.");
      }

      return;
    }

    // 이미지 버킷에 게시
    let imageUrl: URL | null = null;
    if (thumbnail instanceof File) {
      const { data } = await supabase.storage
        .from("topics")
        .upload("thumbnail/" + uuid, thumbnail);

      const rawUrl = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`;
      imageUrl = new URL(rawUrl);
    } else if (thumbnail === null) {
      toast.error("썸네일을 선택해주세요.");
      return;
    }

    const { error } = await supabase
      .from("topic")
      .insert({
        title,
        body,
        category,
        thumbnail: imageUrl?.toString(),
      })
      .select()
      .setHeader("Authorization", "bearer " + authStore.session?.access_token);

    if (error) {
      toast.error("토픽 생성에 실패했습니다.");
    } else {
      toast.success("토픽이 생성되었습니다.");
      navigate("/topics");
    }
  };

  const uploadFile = async (file: File): Promise<string> => {
    const uuid = crypto.randomUUID();
    const { data } = await supabase.storage
      .from("topics")
      .upload("content/" + uuid, file, {
        headers: {
          Authorization: `Bearer ${authStore.session?.access_token}`,
        },
      });

    return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`;
  };

  const BackButton = () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">
          <ArrowLeft />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>기록했던 내용을 잃게 됩니다.</AlertDialogTitle>
          <AlertDialogDescription>
            그래도 뒤로가시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              navigate("/topics");
            }}
          >
            뒤로가기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return (
    <Layout>
      <div className="flex flex-col gap-8">
        {/* 제목 영역 */}
        <div>
          <Input
            type="text"
            placeholder="토픽 제목을 입력하세요"
            className="w-full h-12 text-base placeholder:text-base"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        {/* 하단 영역 */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* 좌측 영역 */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            {/* 버튼 영역 */}
            <div className="flex flex-row gap-2 justify-between">
              <BackButton />
              <Button variant="secondary">임시 저장</Button>
              <Button className="bg-rose-500 text-white" onClick={onSubmit}>
                <Rocket /> 토픽 발행하기
              </Button>
            </div>

            <hr />

            {/* 카테고리 영역 */}
            <div className="flex flex-col gap-2">
              <Label>
                <Asterisk color="red" /> 카테고리
              </Label>

              <Select onValueChange={(event) => setCategory(event)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="주제 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>토픽 Topic</SelectLabel>
                    {TOPIC_CATEGORY.filter(
                      (category) => category.category !== "",
                    ).map((category) => (
                      <SelectItem key={category.id} value={category.category}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* 썸네일 영역 */}
            <div className="flex flex-col gap-2">
              <Label>
                <Asterisk color="red" />
                썸네일
              </Label>

              <ImageUpload
                onChange={(e) => {
                  setThumbnail(e.target.files?.[0] ?? null);
                }}
              />
            </div>
          </div>

          {/* 우측 영역 */}
          <div className="flex-1 min-h-150">
            <TextEditor
              onChange={(document) => setBody(document)}
              uploadFile={uploadFile}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
