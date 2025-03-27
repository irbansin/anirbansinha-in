import "./App.scss";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
