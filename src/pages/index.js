import React from "react";
import { IoPauseCircleOutline } from "react-icons/io5";
import { FaRegStopCircle } from "react-icons/fa";

function index() {
  return (
    <div className="dashboardGrid">
      <div className="div1 d-flex flex-column justify-content-between">
        <div className="px-3 py-3 rounded punchInDiv">
          <div className="punchInTitle my-1">Punch In</div>
          <div className="punchInTime">09:30 AM</div>
        </div>

        <div className=" px-3 py-3 rounded birthdayDiv">
          <div className="bithdayTitle my-1">Birthday Today</div>
          <div className="bithdayPerson">Mr. Harry Potter</div>
        </div>
      </div>
      <div className="div2 progressTaskDiv p-3 rounded d-flex flex-column justify-content-between">
        <div className="prgressTaskTitle">In Progress Task</div>
        <div className="progressInfo">
          <div className="projectTitle">Project : Intern - e Learning</div>
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
              <IoPauseCircleOutline />
            </div>
            <div className="completeTaskBtn">
              <FaRegStopCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="div3">3</div>
      <div className="div4">
        <div className="table">table</div>
      </div>
      <div className="div5">5</div>
    </div>
  );
}

export default index;
