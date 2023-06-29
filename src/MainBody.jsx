import React, { useState } from "react";
import Records from "./records.json";
const MainBody = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubThreadsOpen, setIsSubThreadsOpen] = useState(false);
  const [areGroupsOpen, setAreGroupsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSubThreadsToggle = () => {
    setIsSubThreadsOpen(!isSubThreadsOpen);
  };

  const handleGroupsToggle = () => {
    setAreGroupsOpen(!areGroupsOpen);
  };
  return (
    <>
      <div className="mainBodyFirst">
        {Records.map((item, index) => (
          <div className="mainBody">
            <div className="technicalProject">
              <div className="techicalProjectStyle">
                {item.tasks[0].assets[0].asset_title}
              </div>
              <button>Submit task</button>
            </div>
            <div className="exploreTheWord">
              <h1> {item.tasks[0].task_title}</h1>
              <p>{item.tasks[0].task_description}</p>
            </div>
          </div>
        ))}
      </div>

      {Records.map((item, index) => (
        <div className="boxes">
          <div className="twoBoxes">
            <div className="box1">
              <div className="box1Heading">
                <h2>{item.tasks[0].assets[0].asset_title}</h2>
                <div className="i-icon1">i</div>
              </div>
              <div className="box1Para">
                <span>Description:</span>
                <p>{item.tasks[0].assets[0].asset_description}</p>
              </div>
              <img src="Ytimage.png"></img>
            </div>
            <div className="box2">
              <div className="box2Heading">
                <h2>{item.tasks[0].assets[1].asset_title}</h2>
                <div className="i-icon2">i</div>
              </div>
              <div className="box1Para">
                <span>Description:</span>
                <p>{item.tasks[0].assets[1].asset_description}</p>
              </div>
              {/* ********** */}
              <div className="threadA">
                <div className="arrowAndThread">
                  {isDropdownOpen ? (
                    <div className="arrow" onClick={handleDropdownToggle}>
                      &#x25BC; <span>Thread A</span>
                    </div>
                  ) : (
                    <div className="arrow" onClick={handleDropdownToggle}>
                      &#9650;<span>Thread A</span>
                    </div>
                  )}
                </div>
                {!isDropdownOpen && (
                  <div className="subThreads">
                    <div className="subthread1">
                      <div className="threadName">Sub thread 1</div>
                      <div className="textArea">Enter Text here</div>
                    </div>
                    <div className="subthread2">
                      <div className="threadName">Sub thread 1</div>
                      <div className="textArea">Enter Text here</div>
                    </div>
                  </div>
                )}
                {!isDropdownOpen && (
                  <div className="groups">
                    <div className="groupImage">
                      <img src="group.png" />
                    </div>
                    <div className="buttonsGroup">
                      <button>
                        select cat
                        <span>
                          <img src="vector.png" alt="" />
                        </span>
                      </button>
                      <button>
                        select cat
                        <span>
                          <img src="vector.png" alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
                <div className="bluebutton" onClick={handleSubThreadsToggle}>
                  + Sub-thread
                </div>
                {!isSubThreadsOpen && (
                  <div className="lastDiv">
                    <div className="lastDivOne">
                      <p>Summary for Thread A</p>
                      <div className="lastDivtwo">
                        <p>Enter Text here</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* ********** */}

          <div className="twoBoxes">
            <div className="box1">
              <div className="box1Heading">
                <h2>{item.tasks[0].assets[2].asset_title}</h2>
                <div className="i-icon1">i</div>
              </div>
              <div className="box1Para">
                <span>Description:</span>
                <p>{item.tasks[0].assets[2].asset_description}</p>
              </div>
              <div className="titleAndContent">
                <h3>Title</h3>
                <div className="blankDiv"></div>
                <h3>Content</h3>
                <div className="filesStuff">
                  <div className="stuff">
                    <div className="detail">
                      <p>File </p>
                      <p>Edit</p> <p>View </p>
                      <p>Insert</p> <p>Format</p> <p>Tool</p> <p>Table</p>
                      <p>Help</p>
                    </div>
                    <div className="someOtherDetail">
                      <img src="arrowLeft.png" />
                      <img src="arrowRight.png" />
                      <img src="arrowExpand.png" />
                      <div className="para">Paragraph</div>
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                  </div>
                  <div className="stuffBelow"></div>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="box2Heading">
                <h2>{item.tasks[0].assets[3].asset_title}</h2>
                <div className="i-icon2">i</div>
              </div>
              <div className="box1Para">
                <span>Description:</span>
                <p>{item.tasks[0].assets[3].asset_description}</p>
              </div>
              {/* ********** */}
              <di className="threadA">
                <div className="arrowAndThread">
                  {isDropdownOpen ? (
                    <div
                      className="arrow arrow2"
                      onClick={handleDropdownToggle}
                    >
                      &#x25BC; <span>Introduction</span>
                    </div>
                  ) : (
                    <div
                      className="arrow arrow2"
                      onClick={handleDropdownToggle}
                    >
                      &#9650;<span>Introduction</span>
                    </div>
                  )}
                </div>
                {!isDropdownOpen && (
                  <div className="foursaIdea">
                    <p>The 4SA Method , How to bring a idea into progress ?</p>
                  </div>
                )}
                {/* <div className="seemore">See More</div> */}
                {isSubThreadsOpen ? (
                  <div
                    className="arrow arrow2 arrow3"
                    onClick={handleSubThreadsToggle}
                  >
                    &#x25BC; <span>Thread A</span>
                  </div>
                ) : (
                  <div
                    className="arrow arrow2 arrow3"
                    onClick={handleSubThreadsToggle}
                  >
                    &#9650;<span>Thread A</span>
                  </div>
                )}
                {!isSubThreadsOpen && (
                  <div className="threadApara">
                    <p>
                      How are you going to develop your stratergy ? Which method
                      are you going to use to develop a stratergy ? What if the
                      project is lengthy?
                    </p>
                  </div>
                )}
                <div className="examples">
                  <h3>Example 1</h3>
                  <p>You have a concept , How will you put into progress?</p>
                </div>
              </di>
            </div>
          </div>
          {/* ************** */}
          {/* <div className="lastIcon">
            <div className="allIcons">
              <img src="question.png" />
            </div>
            <div className="allIcons">
              <img src="meeting.png" />
            </div>
            <div className="allIcons">
              <img src="schedule.png" />
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default MainBody;

