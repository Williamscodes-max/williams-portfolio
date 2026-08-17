import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import AIStudio from "./pages/AIStudio";
import WritingDesk from "./pages/WritingDesk";
import FrontendLab from "./pages/FrontendLab";
import ArticleExcerpt from "./pages/ArticleExcerpt";
import WritingCategory from "./pages/WritingCategory";
import CampaignDetail from "./pages/CampaignDetail";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/writing-desk" element={<WritingDesk />} />
          <Route path="/writing-desk/category/:categorySlug" element={<WritingCategory />} />
          <Route path="/writing-desk/:slug" element={<ArticleExcerpt />} />
          <Route path="/ai-studio" element={<AIStudio />} />
          <Route path="/ai-studio/:slug" element={<CampaignDetail />} />
          <Route path="/frontend-lab" element={<FrontendLab />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}