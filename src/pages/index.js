import React, { useEffect, useRef, useState } from "react";
import { IoPauseCircleOutline } from "react-icons/io5";
import { FaRegStopCircle } from "react-icons/fa";
import Graph from "@/UI/Components/Graph";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";

function index() {
  const birthdayDiv = useRef(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    console.log(birthdayDiv.current.clientHeight);
    setWidth(birthdayDiv.current.clientWidth);
    setHeight(birthdayDiv.current.clientHeight);

    console.log(width, height);
    const canvas = document.createElement("canvas");

    canvas.style.width = `${birthdayDiv.current.clientWidth}px`;
    canvas.style.height = `${birthdayDiv.current.clientHeight}px`;

    birthdayDiv.current.children[2].appendChild(canvas);
    const myConfetti = confetti.create(canvas, { resize: false });

    myConfetti({
      particleCount: 400,
      spread: 170,
      origin: { x: 0, y: 1 },
    });

    myConfetti({
      particleCount: 400,
      spread: 170,
      origin: { x: 1, y: 1 },
    });

    const timeout = setTimeout(() => {
      canvas.remove();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      canvas.remove();
    };
  }, []);
  return (
    <div className="dashboardGrid">
      <div className="div1 d-flex flex-column justify-content-between gap-2">
        <div className="px-3 py-3 rounded punchInDiv">
          <div className="punchInTitle title my-1 fw-normal">Punch In</div>
          <div className="punchInTime">09:30 AM</div>
        </div>

        <div ref={birthdayDiv} className="px-3 py-3 rounded birthdayDiv">
          <div className="bithdayTitle my-1">Birthday Today</div>
          <div className="bithdayPerson">Mr. Harry Potter</div>
          <div className="confettiDiv">
            {/* {isConfettiActive && <Confetti width={width} height={height} />} */}
          </div>
        </div>
      </div>
      <div className="div2 progressTaskDiv p-3 rounded d-flex flex-column justify-content-between">
        <div className="prgressTaskTitle">In Progress Task</div>
        <div className="progressInfo">
          <div className="progerssInfoTitle">
            <span className="title">Project : </span>
            Intern - e Learning
          </div>
          <div className="projectDescription">
            War Dashboard Clone | Next.js
          </div>
        </div>
        <div className="progressFooter d-flex justify-content-between">
          <div className="assignByDiv">
            <div className="title">Assigned By</div>
            <div className="MangerName">Akshay Malde</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="playPauseDiv mx-2">
              <IoPauseCircleOutline size={25} color="#00b058" />
            </div>
            <div className="completeTaskBtn">
              <FaRegStopCircle size={22} color="#ef233c" />
            </div>
          </div>
        </div>
      </div>
      <div className="div3">3</div>
      <div className="div4">
        <div className="table">table</div>
      </div>
      <div className="div5 p-2 rounded">
        <Graph />
      </div>
    </div>
  );
}

export default index;
