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
import { Link } from "react-router-dom";
import "@blocknote/shadcn/style.css";
import "@blocknote/core/fonts/inter.css";

export default function NewTopicsPage() {
  const editor = useCreateBlockNote();
  const authStore = useAuthStore();
  const formSchema = z.object({
    title: z.string(),
    category: z.enum([
      "humanities",
      "startup",
      "it",
      "strategy",
      "marketing",
      "design",
      "self-developing",
    ]),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, category } = values;
    await supabase.from("topic").insert({
      title,
      category,
      body: editor.document,
      author: authStore.user?.id,
    });
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
                  className="h-12"
                  type="text"
                  placeholder="토픽 제목을 입력하세요"
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
              <Button variant="secondary">임시 저장</Button>
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
          </div>

          {/* 본문 작성 영역 */}
          <div className="flex-1 min-h-140">
            <BlockNoteView editor={editor} />
          </div>
        </div>
      </form>
    </Form>
  );
}
