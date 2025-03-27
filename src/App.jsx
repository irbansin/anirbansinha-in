import "./App.scss";
import Header from "./components/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          {/* <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
