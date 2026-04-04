import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Home;
