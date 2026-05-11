import React from "react";
import { Clock, Pulse } from "./atoms";

export const Nav = () => (
  <nav className="nav">
    <div className="wrap nav-inner">
      <a href="#" className="brand" aria-label="67 Labs">
        <svg className="brand-svg" viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="92" y1="4" x2="74" y2="52" stroke="#FF5A1F" strokeWidth="5" strokeLinecap="round" />
          <text x="0" y="46" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="52" letterSpacing="-2" fill="currentColor">67</text>
          <text x="98" y="46" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="52" letterSpacing="-2" fill="currentColor">Labs.</text>
        </svg>
      </a>
      <div className="nav-links">
        <a href="#manifesto">Manifesto</a>
        <a href="#moonshot">Moonshot</a>
        <a href="#projects">Projects</a>
        <a href="#operators">Operators</a>
        <a href="#dispatch">Dispatch</a>
      </div>
      <div className="nav-right">
        <Clock />
        <a href="https://tally.so/r/9qp465" target="_blank" rel="noopener" className="cta"><Pulse /> Apply</a>
      </div>
    </div>
  </nav>
);
