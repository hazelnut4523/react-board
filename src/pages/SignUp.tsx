import Layout from "@/Layout";
import SignUpForm from "@/components/sign-up/SignUpForm";

export default function SignUpPage() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4 min-h-150">
        <div>
          <h1 className="text-xl font-bold">안녕하세요 👋</h1>
        </div>

        <div className="min-w-100">
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
}
