import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TravelProvider } from "./context/TravelContext";
import Navbar from "./components/layout/Navbar";
import WelcomeModal from "./components/ui/WelcomeModal";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Categories from "./pages/Categories";
import DestinationDetail from "./pages/DestinationDetail";
import Dashboard from "./pages/Dashboard";
import TravelTips from "./pages/TravelTips";
import About from "./pages/About";

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <WelcomeModal />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/destination/:id" element={<DestinationDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <TravelProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TravelProvider>
  );
}
