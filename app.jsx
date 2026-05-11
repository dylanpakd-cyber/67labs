import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Nav } from "./parts/nav";
import { Hero } from "./parts/hero";
import { Marquee } from "./parts/marquee";
import { Manifesto } from "./parts/manifesto";
import { Moonshot } from "./parts/moonshot";
import { Projects } from "./parts/projects";
import { Operators } from "./parts/operators";
import { Dispatch } from "./parts/dispatch";
import { Footer } from "./parts/footer";

const App = () => (
  <>
    <Nav />
    <Hero />
    <Marquee />
    <Manifesto />
    <Moonshot />
    <Projects />
    <Operators />
    <Dispatch />
    <Footer />
  </>
);

createRoot(document.getElementById("root")).render(<App />);
