import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-start">
      <MainHeader />
      <main className="py-4 px-16">{children}</main>
      <MainFooter />
    </div>
  );
}
