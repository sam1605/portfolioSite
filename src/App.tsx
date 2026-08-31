import Loader from './components/Loader';
import Nav from './components/Nav';
import Side from './components/Side';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Loader />
      <Nav />
      <Side orientation="left" />
      <Side orientation="right" />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
