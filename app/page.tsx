import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
