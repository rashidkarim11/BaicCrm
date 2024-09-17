import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/login-page";
import { SignUpPage } from "./pages/sign-up-page";
import { OnboardingPage } from "./pages/onboarding-page";
import { DashboardPage } from "./pages/dashboard-page";
import { UserSettings } from "./components/user-settings";
import { ClientsPage } from "./pages/clients-page";
import { DealsPage } from "./pages/deals-page";
import { TasksPage } from "./pages/tasks-page";
import { IndexPage } from "./pages";
import { AuthGuard } from "./components/auth-guard";
import Header from "./components/header";
import AuthContextProvider from "./context/auth-context";
import LangContextProvider from "./context/lang-context";

function App() {
  return (
    <Router>
      <LangContextProvider>
        <AuthContextProvider>
          <div className="min-h-screen bg-gray-100">
            <Header />

            <div className="py-10">
              <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <Routes>
                    <Route path="/" element={<IndexPage isAuthenticated />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/onboarding" element={<OnboardingPage />} />
                    {[
                      { path: "/dashboard", page: <DashboardPage /> },
                      { path: "/clients", page: <ClientsPage /> },
                      { path: "/deals", page: <DealsPage /> },
                      { path: "/tasks", page: <TasksPage /> },
                      { path: "/settings", page: <UserSettings /> },
                    ].map(({ page, path }) => (
                      <Route
                        key={path}
                        path={path}
                        element={<AuthGuard>{page}</AuthGuard>}
                      />
                    ))}
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </AuthContextProvider>
      </LangContextProvider>
    </Router>
  );
}

export default App;
