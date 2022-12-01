import { HashRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./components/NavigationComponent";
import NavigationRb from "./components/NavigationRb";
import AppProvider from "./context/AppCtx";
// pages
import About from './pages/About'
import Home from "./pages/Home";
import Services from "./pages/Services";
// import Contacto from './pages/Contacto'
import ContactoRb from './pages/ContactoRb'



function App() {

  return (
    <AppProvider>
      <HashRouter>
        <NavigationRb />
        <Routes>
          <Route path="/" element={<Home />} index/>
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<ContactoRb />} />
          <Route path="/acerca-de-nosotros" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;
