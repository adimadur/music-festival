import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LineupPage from "./pages/LineupPage";
import SchedulePage from "./pages/SchedulePage";
import TicketsPage from "./pages/TicketsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lineup" element={<LineupPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;