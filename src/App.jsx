import React, { useState } from "react";
import Records from "./records.json";
import MainBody from "./MainBody";
const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <header className="header">
        <div className="leftIcons">
          <div className="logo">
            <img src="download.png" alt="Logo" />
          </div>
          <div className="name">
            <span>
              <img src="deep.png" alt="Logo" />
            </span>
            <span>
              <img src="thought.png" alt="Logo" />
            </span>
          </div>
        </div>
        <div>
          <ul className="menu">
            <li className="homeLi">
              <img src="home.png" alt="Home" />
            </li>
            <li className="homeLi">
              <img src="tools.png" alt="Tool" />
            </li>
            <img src="bell.png" alt="Profile" className="bell" />
            <img src="photoicon.png" alt="Others" className="bell" />
            <div className="points">
              <div className="point"></div>
              <div className="point"></div>
              <div className="point"></div>
            </div>
          </ul>
        </div>
      </header>
      <div className={`mainNav ${isNavOpen ? "open" : ""}`}>
        <div className={`blackNav ${isNavOpen ? "open" : ""}`}>
          {isNavOpen ? (
            <button className="closeBtn" onClick={handleToggleNav}>
              &#x2715;
            </button>
          ) : (
            <button className="closeBtn" onClick={handleToggleNav}>
              &#x2192;
            </button>
          )}
        </div>
        {isNavOpen ? (
          Records.map((item, index) => (
            <div className={`whiteNav ${isNavOpen ? "open" : ""}`}>
              <div className="one">
                <ul>
                  <li>{item.tasks[0].task_title}</li>
                  <li>{item.tasks[0].assets[0].asset_title}</li>
                  <li>{item.tasks[0].assets[1].asset_title}</li>
                  <li>{item.tasks[0].assets[2].asset_title}</li>
                  <li>{item.tasks[0].assets[3].asset_title}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className={`whiteNav ${isNavOpen ? "open" : ""}`}>
            <div className="one oneNav">1</div>
          </div>
        )}
      </div>
      <MainBody />
      <div className="sideBar">
        <div className="blackSideBar">
          <img src="x.png" />
          <p> N </p>
          <p>o</p>
          <p>t</p>
          <p>i</p>
          <p>c</p>
          <p>e</p>
          <p>B</p>
          <p>o</p>
          <p>a</p>
          <p>r</p>
          <p>d</p>
        </div>
      </div>
    </div>
  );
};

export default App;
