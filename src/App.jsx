import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Footer } from "./components/footer/Footer";
export const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};
