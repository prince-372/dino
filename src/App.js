import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Usecase from "./components/Usecase";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTop from "./components/Backtotop";
import Loader from "./components/Priloder";
import Mynav from "./components/Mynav";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Mynav />
      <Header />
      <About />
      <Tokenomics />
      <Usecase />
      <Roadmap />
      <Faq />
      <Footer />
      <BackToTop />
      <Loader />
    </>
  );
}

export default App;
