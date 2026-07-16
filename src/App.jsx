import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import FloatingDownload from "./components/FloatingDownload/FloatingDownload";
import ResumePrintTemplate from "./components/ResumePrintTemplate/ResumePrintTemplate";
import { useEffect, useState } from "react";
import { apiUrl } from "../config";

function App() {
  const [userDetails, setUserDetails] = useState(null);

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
            </Routes>
          </main>
          <Footer />
          <FloatingDownload userDetails={userDetails} />
        </div>
        {/* Render print template sibling to screen-content for print isolation */}
        <ResumePrintTemplate userDetails={userDetails} />
      </BrowserRouter>
    </>
  );
}

export default App;
