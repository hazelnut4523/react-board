import LoginCard from "@/components/LoginCard";
import { ThemeProvider } from "@/components/theme-provider";

export default function LoginPage() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="page flex justify-center items-center">
        <LoginCard></LoginCard>
      </div>
    </ThemeProvider>
  );
}
