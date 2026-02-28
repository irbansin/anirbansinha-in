import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          {/* navigate to external blog page */}
          <Route
            path="/blog"
            element={
              <Navigate
                to="https://anirbansinha.notion.site/a0bcc45fa11c47fb99ab7d24dadecd49?v=5519d501ffd74921b9903e65dad4691b"
                replace
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
