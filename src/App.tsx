import { useEffect, Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
// import Navigation from "./components/NavigationComponent";
import NavigationRb from "./components/NavigationRb";
import AppProvider from "./context/AppCtx";
import HeroNav from './components/HeroNav'
import Contacto from './pages/Contacto'
import Footer from './components/footer/Footer'
import ContactInfoFooter from "./components/footer/ContactInfoFooter"
import './assets/sass/style.scss'
import 'animate.css'
// Pages
const Home = lazy(() => import('./pages/Home'));
const Servicios = lazy(()=> import('./pages/Servicios'));
const Empresa =  lazy(() => import('./pages/Empresa'));
const ClientesRb = lazy(()=> import('./pages/Clientes'))
const FooterContacto = lazy(()=> import('./components/footer/Contacto'))
import { Container } from "react-bootstrap";
const Galeria = lazy(()=> import('./pages/Galeria'))
import Loading from "./components/Loading";

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
    <Suspense fallback={<Loading/>}>
    <AppProvider>
      <HashRouter>
        <GoToTop />
        <HeroNav />
        <NavigationRb />
        <Container fluid className="p-0" style={{
          overflow: 'hidden'
        }}>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/clientes" element={<ClientesRb />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <FooterContacto />
          <ContactInfoFooter />
          <Footer />
        </Container>
      </HashRouter>
    </AppProvider>
    </Suspense>
  );
}

export default App;
