import { useEffect, useState } from "react";
import DotGroup from "./components/DotGroup";
import LineGradient from "./components/LineGradient";
import Navbar from "./apps/navbar/Navbar";
import Projects from "./apps/Projects/Projects";
import useMediaQuery from "./hooks/useMediaQuery";
import Landing from "./apps/Landing/Landing";
import MySkills from "./apps/Skill/MySkills";
import Contact from "./apps/Contact/Contact";
import Footer from "./apps/Footer/Footer";
import Abilities from "./apps/Ability/Abilities";

function App() {
  const [selectedPage, setSelectedPage] = useState();
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Landing setSelectedPage={setSelectedPage} />
      <LineGradient width=" md:w-auto" />
      <MySkills />
      <LineGradient />
      <Abilities />
      <LineGradient />
      <Projects />
      <LineGradient />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;
