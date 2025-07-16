import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import supabase from "@/utils/supabase";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuthStore } from "@/stores/auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const formSchema = z.object({
    email: z.email({
      message: "올바른 형식의 이메일 주소를 입력해 주세요.",
    }),
    password: z.string().min(8, {
      message: "비밀번호는 최소 8자 이상이어야 합니다.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // 로그인 실패
    if (error) {
      toast.error("로그인에 실패했습니다.");
      console.error(error.message);
    }

    // 로그인 성공
    if (data.session && data.user) {
      authStore.setSession(data.session);
      authStore.setUser(data.user);
      toast.success("로그인에 성공했습니다.");
      navigate("/");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-10">
        {/* 소셜 로그인 버튼 */}
        <div className="flex flex-col gap-2">
          <Button className="bg-green-600">네이버 로그인</Button>
          <Button className="bg-yellow-500">카카오 로그인</Button>
          <Button
            className=""
            onClick={() => {
              supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                  redirectTo: "/",
                },
              });
            }}
          >
            Google 로그인
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* 이메일 */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="이메일을 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 비밀번호 */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">로그인</Button>
            <Link to="/signup">회원가입</Link>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
