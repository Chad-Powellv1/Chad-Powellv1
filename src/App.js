import "./App.scss";

import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./services/particles";
import { Navbar } from "./components/navbar/index";
import { Home } from "./pages/home/index";
import { About } from "./pages/about/index";
import { Portfolio } from "./pages/portfolio/index";
import { Contact } from "./pages/contact/index";

function App() {
  const location = useLocation();

  // Load particles config
  const handleInit = async (main) => {
    await loadFull(main);
  };

  // Only renders particles when on the home page
  const renderParticlesInHomePage = location.pathname === "/";

  return (
    <div className='App'>
      {renderParticlesInHomePage && (
        <Particles id='particles' options={particles} init={handleInit} />
      )}

      <Navbar />

      <div className='App-main-container'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
