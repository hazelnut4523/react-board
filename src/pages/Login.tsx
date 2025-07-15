import Layout from "@/Layout";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-150">
        <div className="min-w-100">
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}
