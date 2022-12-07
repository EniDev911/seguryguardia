import { HashRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/NavigationComponent";
import NavigationRb from "./components/NavigationRb";
import AppProvider from "./context/AppCtx";
import HeroNav from './components/HeroNav'
// pages
import AboutRb from './pages/About'
import Home from "./pages/Home";
import ServicesRb from "./pages/Services";
import ContactoRb from './pages/ContactoRb'
import Footer from './components/Footer'
function App() {

  return (
    <AppProvider>
      <HashRouter>
        <HeroNav />
        <NavigationRb />
        <div className="bg-dark bg-gradient">
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/servicios" element={<ServicesRb />} />
            <Route path="/contacto" element={<ContactoRb />} />
            <Route path="/empresa" element={<AboutRb />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
