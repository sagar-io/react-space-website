import NavBar from "./NavBar";
import { useState, setState } from "react";
import React from "react";

const Technology = (props) => {
   const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const [techNum, setTechNum] = useState(0);
  const [terminologyName, setTerminologyName] = useState(props[0].name);
  const [terminologyDescription, setTerminologyDescription] = useState(
    props[0].description
  );

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  let imgUrl = screenWidth > 880 ? props[0].images.portrait : props[0].images.landscape;

  const [terminologyImg, setTerminologyImg] = useState(imgUrl);

  function handleTerm(e) {
    const currentNum = e.target.innerText - 1;
    setTechNum(currentNum);
    setTerminologyName(props[currentNum].name);
    setTerminologyDescription(props[currentNum].description);
    setTerminologyImg(screenWidth > 880 ? props[currentNum].images.portrait : props[currentNum].images.landscape);
  }

  return (
    <div className="tech-wrapper-container">
      <NavBar />

      <div className="tech-wrapper">
        <div className="tech-text-part">
          <h5 className="index-heading">
            <span className="faded">03</span> Space Launch 101
          </h5>

          <div className="terminology-wrapper">
            <div className="terminology-count">
              <div
                style={{
                  background: techNum === 0 ? "#ffffff" : "none",
                  color: techNum === 0 ? "#000" : "#fff",
                }}
                className="dot"
                onClick={handleTerm}
              >
                1
              </div>
              <div
                style={{
                  background: techNum === 1 ? "#ffffff" : "none",
                  color: techNum === 1 ? "#000" : "#fff",
                }}
                className="dot"
                onClick={handleTerm}
              >
                2
              </div>
              <div
                style={{
                  background: techNum === 2 ? "#ffffff" : "none",
                  color: techNum === 2 ? "#000" : "#fff",
                }}
                className="dot"
                onClick={handleTerm}
              >
                3
              </div>
            </div>

            <div className="terminology-text">
              <h6>The Terminology</h6>
              <h3>{terminologyName}</h3>
              <p>{terminologyDescription}</p>
            </div>
          </div>
        </div>

        <div className="tech-img">
          <img src={terminologyImg} alt="technology-image" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
