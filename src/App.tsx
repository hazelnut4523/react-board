import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import TopicsPage from "./pages/Topics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NewTopicsPage from "./pages/NewTopicsPage";
import ReadTopicPage from "./pages/ReadTopicPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/topics/new-topic" element={<NewTopicsPage />} />
            <Route path="/topics/:id" element={<ReadTopicPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
