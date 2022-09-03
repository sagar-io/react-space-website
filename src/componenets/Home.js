import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import {useState, setState, useEffect} from 'react'

export default function Home() {
  return (
    <div className="page-wrapper">
      <NavBar />
      

      <main className="home-wrapper">
        <div className="home-text">
          <h5>So, you want to travel to</h5>

          <h1 className="tertiary-clr">Space</h1>

          <p className="secondary-clr">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="explore-btn-container">
          <h4>
            <Link to="/Destination" className="explore-btn-link">
              EXPLORE
            </Link>
          </h4>
        </div>
      </main>
    </div>
  );
}
