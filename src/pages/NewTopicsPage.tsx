import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import { ArrowLeft, Asterisk, Rocket } from "lucide-react";
import { useAuthStore } from "@/stores/auth";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import "@blocknote/shadcn/style.css";
import "@blocknote/core/fonts/inter.css";
import { ko } from "@blocknote/core/locales";
import { toast } from "sonner";

export default function NewTopicsPage() {
  const navigate = useNavigate();
  const editor = useCreateBlockNote({
    dictionary: ko,
    uploadFile: async (file: File) => {
      const uuid = crypto.randomUUID();
      const { data } = await supabase.storage
        .from("topics")
        .upload(`content/${uuid}`, file);

      return `https://lojqxmhfwcsldgeeioxr.supabase.co/storage/v1/object/public/${data?.fullPath}`;
    },
  });
  const authStore = useAuthStore();
  const formSchema = z.object({
    title: z.string(),
    category: z.enum(TOPIC_CATEGORY.map((category) => category.category)),
    thumbnail: z.url().optional(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, category, thumbnail } = values;

    console.log(values);
    console.log(editor.document);

    const { error } = await supabase
      .from("topic")
      .insert({
        title,
        category,
        body: editor.document,
        thumbnail,
      })
      .setHeader("Authorization", `bearer ${authStore.session?.access_token}`);

    if (error) {
      toast.error("토픽 업로드에 실패했습니다.");
    } else {
      toast.success("토픽이 성공적으로 업로드되었습니다.");
      navigate("/topics");
    }
  }

  async function uploadThumbnail(
    file: File | undefined,
  ): Promise<string | undefined> {
    if (file === undefined) {
      return undefined;
    }

    const uuid = crypto.randomUUID();
    const ext = file.name.split(".").pop();
    const { data } = await supabase.storage
      .from("topics")
      .upload(`thumbnail/${uuid}.${ext}`, file, {
        headers: {
          Authorization: `bearer ${authStore.session?.access_token}`,
        },
      });

    return `https://lojqxmhfwcsldgeeioxr.supabase.co/storage/v1/object/public/${data?.fullPath}`;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-12 text-lg bg-transparent border-0"
                  type="text"
                  placeholder="토픽 제목을 입력하세요"
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* 작성 폼 하단 */}
        <div className="flex flex-col md:flex-row gap-14">
          {/* 하단 좌측 영역 */}
          <div className="flex flex-col gap-4">
            {/* 버튼 영역 */}
            <div className="flex flex-row gap-2 justify-between">
              <Button asChild variant="secondary">
                <Link to="/topics">
                  <ArrowLeft />
                </Link>
              </Button>
              <Button type="button" variant="secondary">
                임시 저장
              </Button>
              <Button type="submit" className="bg-rose-400 text-white">
                <Rocket /> 토픽 발행하기
              </Button>
            </div>

            <hr />

            {/* 카테고리 선택 영역 */}
            <div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <Asterisk color="red" /> 카테고리
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder="주제 선택"
                          id="category"
                          aria-required={true}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>토픽 Topic</SelectLabel>
                          {TOPIC_CATEGORY.filter(
                            (item) => item.category !== "",
                          ).map((category) => (
                            <SelectItem
                              key={category.id}
                              value={category.category}
                            >
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* 썸네일 영역 */}
            <div>
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field: { name, onBlur, onChange } }) => (
                  <FormItem>
                    <FormLabel>
                      <Asterisk color="red" /> 썸네일
                    </FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      name={name}
                      onBlur={onBlur}
                      onChange={(event) => {
                        console.log(event.target.files?.[0]);
                        uploadThumbnail(event.target.files?.[0])
                          .catch(() => {
                            toast.error("썸네일 업로드에 실패했습니다.");
                          })
                          .then((url) => {
                            toast.success("썸네일 업로드 성공");
                            console.log(url);
                            onChange(url);
                          });
                      }}
                    />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* 본문 작성 영역 */}
          <div className="flex-1 min-h-140">
            <BlockNoteView editor={editor} theme="dark" />
          </div>
        </div>
      </form>
    </Form>
  );
}
