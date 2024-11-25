import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Header from "./components/header";
import { Portfolio } from "./components/portfolio";
import SideMenu from "./components/SideMenu";
import Skills from "./components/skills";

export default function Home() {
  return (
    <>
      <SideMenu />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
