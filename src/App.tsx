import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import TopicsPage from "./pages/Topics";
import NewTopicsPage from "./pages/NewTopicsPage";
import ReadTopicPage from "./pages/ReadTopicPage";

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

          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <SignUpPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
