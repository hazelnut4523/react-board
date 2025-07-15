import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import TopicsPage from "./pages/Topics";
import NewTopicsPage from "./pages/NewTopicsPage";
import ReadTopicPage from "./pages/ReadTopicPage";
import Welcome from "./pages/Welcome";
import { Toaster } from "sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />

          <Route
            path="/topics"
            element={
              <Layout>
                <TopicsPage />
              </Layout>
            }
          />
          <Route
            path="/topics/new-topic"
            element={
              <Layout>
                <NewTopicsPage />
              </Layout>
            }
          />
          <Route
            path="/topics/:id"
            element={
              <Layout>
                <ReadTopicPage />
              </Layout>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
