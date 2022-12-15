import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navigation from "./components/NavigationComponent";
import NavigationRb from "./components/NavigationRb";
import AppProvider from "./context/AppCtx";
import HeroNav from './components/HeroNav'
// pages
import EmpresaRb from './pages/Empresa'
import Home from "./pages/Home";
import ServicesRb from "./pages/Services";
import ContactoRb from './pages/ContactoRb'
import Footer from './components/Footer'
import ContactInfoFooter from "./components/ContactInfoFooter"
import './assets/sass/style.scss'
import 'animate.css'
import ClientesRb from "./pages/ClientesRb";




function App() {
  function GoToTop() {
    const routePath = useLocation();
    const onTop = () => {
      window.scrollTo(0, 0);
    }
    useEffect(() => {
      onTop()
    }, [routePath]);

    return null;
  };

  return (
    <AppProvider>
      <HashRouter>
        <GoToTop />
        <HeroNav />
        <NavigationRb />
        <div className="bg-dark bg-gradient">
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/servicios" element={<ServicesRb />} />
            <Route path="/contacto" element={<ContactoRb />} />
            <Route path="/empresa" element={<EmpresaRb />} />
            <Route path="/clientes" element={<ClientesRb />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <ContactInfoFooter />
        <Footer />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
