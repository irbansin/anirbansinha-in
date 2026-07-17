import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import BuildResume from "./pages/BuildResume/BuildResume";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Support from "./pages/Support/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import FloatingDownload from "./components/FloatingDownload/FloatingDownload";
import ResumePrintTemplate from "./components/ResumePrintTemplate/ResumePrintTemplate";
import { useEffect, useState } from "react";
import { apiUrl } from "../config";

function App() {
  const [userDetails, setUserDetails] = useState(null);
  const [overrideUserDetails, setOverrideUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl("/api/v1/resume-details"));
        const responseMessage = await res.json();
        setUserDetails(responseMessage.message.userInfo);
      } catch (err) {
        console.error("Failed to fetch resume details globally:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="screen-content">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/resume" element={<Resume userDetails={userDetails} />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/support" element={<Support />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/build-resume"
                element={<BuildResume setOverrideUserDetails={setOverrideUserDetails} />}
              />
            </Routes>
          </main>
          <Footer />
          <FloatingDownload userDetails={overrideUserDetails || userDetails} />
        </div>
        {/* Render print template sibling to screen-content for print isolation */}
        <ResumePrintTemplate userDetails={overrideUserDetails || userDetails} />
      </BrowserRouter>
    </>
  );
}

export default App;
