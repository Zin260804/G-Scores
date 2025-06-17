import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/OtherPage/NotFound";
import SubjectCharts from "./pages/SubjectCharts.tsx";
import SearchScores from "./pages/SearchScores.tsx";
import Top10 from "./pages/Top10.tsx";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home.tsx";
import Settings from "./pages/Settings.tsx";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/top10-block-a" element={<Top10 />} />
            <Route path="/search-scores" element={<SearchScores />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/subject-wise-charts" element={<SubjectCharts />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
