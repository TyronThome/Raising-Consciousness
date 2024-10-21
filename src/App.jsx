import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ServicesPage from "./components/ServicesPage";
import Donate from "./pages/Donate";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import CancelPage from "./pages/CancelPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

const App = () => {
  return (
    <>
      <Toaster />
      <Analytics />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ServicesPage />
                <Projects />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/donate" element={<Donate />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
