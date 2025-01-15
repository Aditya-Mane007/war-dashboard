import React, { useEffect, useRef, useState } from "react";
import { IoPauseCircleOutline } from "react-icons/io5";
import { FaRegStopCircle } from "react-icons/fa";
import Graph from "@/UI/Components/Graph";
import Confetti from "react-confetti";
import confetti from "canvas-confetti";
import { tableData, tableHeading } from "@/lib/CONSTANTS";
import styles from "@/styles/Dashboard.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaEye } from "react-icons/fa";

function index() {
  const birthdayDiv = useRef(null);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [isCheckIn, setIsCheckIn] = useState(true);

  useEffect(() => {
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

    setIsConfettiActive(true);

    setTimeout(() => {
      setIsConfettiActive(false);
    }, 6000);
    return () => {
      clearTimeout(timeout);
      canvas.remove();
    };
  }, []);
  return (
    <>
      <div className="container-xxl">
        <div className="dashboardGrid">
          <div className="div1 d-flex flex-column justify-content-around gap-2">
            <div className="px-4 py-3 rounded punchInDiv h-100 d-flex justify-content-between align-items-center">
              <div className="totalWorkingHoursDiv">
                <p className="p-0 m-0 fs-6 ">Total Working Hours </p>
                <div className="text-center fw-bold fs-4">00:00</div>
              </div>
              <div
                className={`p-2 rounded text-white bg-${
                  isCheckIn ? "danger" : "success"
                }`}
              >
                {isCheckIn ? "Check Out" : "Check In"}
              </div>
            </div>

            <div
              ref={birthdayDiv}
              className="px-3 py-3 rounded birthdayDiv h-100"
            >
              <div className="bithdayTitle my-1 z-3">Birthday Today</div>
              <div className="bithdayPerson z-3">Mr. Harry Potter</div>
              <div className="confettiDiv">
                {isConfettiActive && <Confetti width={width} height={height} />}
              </div>
            </div>
          </div>
          <div className="div2 bg-white rounded">
            <div className="backgroundImageDiv z-0"></div>
            <div className="progressTaskDiv z-1 h-100 p-3 rounded d-flex flex-column justify-content-between">
              <div className="prgressTaskTitle">In Progress Task</div>
              <div className="progressInfo z-1 my-2">
                <div className="progerssInfoTitle">
                  <span className="title">Project : </span>
                  Intern - e Learning
                </div>
                <div className="projectDescription ">
                  War Dashboard Clone | Next.js
                </div>
              </div>
              <div className="progressFooter z-1 d-flex justify-content-between my-3">
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
          </div>
          <div
            className="div3 bg-white rounded py-4"
            style={{ height: "auto" }}
          >
            <Calendar
              className="mx-auto rounded"
              style={{ maxHeight: "4rem" }}
            />
          </div>
          <div className="div4">
            <div className="bg-white  rounded p-3">
              <div className="fw-medium">Team Tracker</div>
              <div className={styles.inputDiv}>
                <input
                  type="text"
                  placeholder="Search: "
                  className="px-2 my-2"
                />
              </div>
              <div className={styles.tableDiv}>
                <table>
                  <thead>
                    <tr>
                      {tableHeading.map((heading) => (
                        <td>{heading}</td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.department}</td>
                        <td>{data.checkIn}</td>
                        <td>{data.checkOut ? data.checkOut : "--:--"}</td>
                        <td>{data.warScore}</td>
                        <td>
                          <button
                            data-bs-toggle="modal"
                            data-bs-target={`#example${index}`}
                            style={{ all: "unset", cursor: "pointer" }}
                          >
                            <FaEye />
                          </button>
                          <div
                            class="modal "
                            id={`example${index}`}
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5 text-dark"
                                    id="exampleModalLabel"
                                  >
                                    Current Task
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body py-4">
                                  <div className="fs-6 text-start text-dark">
                                    {data.name}
                                  </div>
                                  <div className="text-start fs-6 text-dark">
                                    <span style={{ color: "gray" }}>
                                      Project :{" "}
                                    </span>
                                    {data.currentTask[0].projectName}
                                  </div>
                                  <div className="text-start fs-6 text-dark">
                                    <span style={{ color: "gray" }}>
                                      Task Detail :{" "}
                                    </span>
                                    {data.currentTask[0].projectDetail}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button
                            data-bs-toggle="modal"
                            data-bs-target={`#exampleWeek${index}`}
                            style={{ all: "unset", cursor: "pointer" }}
                          >
                            <FaEye />
                          </button>
                          <div
                            class="modal "
                            id={`exampleWeek${index}`}
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5 text-dark"
                                    id="exampleModalLabel"
                                  >
                                    Weekly Tasklist
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div
                                  className="modal-body px-2 py-0 m-0 text-dark"
                                  style={{
                                    height: "15rem",
                                    overflow: "scroll",
                                  }}
                                >
                                  {data.weekyTask.length > 0 ? (
                                    <table className="p-0 m-0 bg-white">
                                      <thead>
                                        <tr>
                                          <td>Date</td>
                                          <td>Task Details</td>
                                          <td>Assign By</td>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {data.weekyTask.map((task) => (
                                          <tr>
                                            <td>{task.date}</td>
                                            <td>{task.taskDetails}</td>
                                            <td>{task.AssignBy}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  ) : (
                                    <div className="text-start">
                                      No Task Found
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="div5 p-2 h-100 rounded bg-white">
            <Graph />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

/* <div className="dashboardGrid">
  <div className="div1 d-flex flex-column justify-content-between gap-2">
    <div className="px-3 py-3 rounded punchInDiv">
      <div className="punchInTitle title my-1 fw-normal">Punch In</div>
      <div className="punchInTime">09:30 AM</div>
    </div>

    <div ref={birthdayDiv} className="px-3 py-3 rounded birthdayDiv">
      <div className="bithdayTitle my-1">Birthday Today</div>
      <div className="bithdayPerson">Mr. Harry Potter</div>
      <div className="confettiDiv">
        {isConfettiActive && <Confetti width={width} height={height} />}
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
</div> */

// BootStrap
// <div className="container-xxl">
//   <div className="row gx-2 gy-3">
//     <div className="col-4">
//       <div className="d-flex flex-column gap-3">
//         <div className="p-3 rounded punchInDiv">
//           <div className="punchInTitle title my-1 fw-normal">Punch In</div>
//           <div className="punchInTime">09:30 AM</div>
//         </div>

//         <div ref={birthdayDiv} className="px-3 py-3 rounded birthdayDiv">
//           <div className="bithdayTitle my-1">Birthday Today</div>
//           <div className="bithdayPerson">Mr. Harry Potter</div>
//           <div className="confettiDiv">
//             {isConfettiActive && <Confetti width={width} height={height} />}
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-4 h-auto">
//       <div className="bg-white h-75 rounded">
//         <div className="progressTaskDiv h-100 p-3 rounded d-flex flex-column justify-content-between">
//           <div className="prgressTaskTitle my-2">In Progress Task</div>
//           <div className="progressInfo">
//             <div className="progerssInfoTitle">
//               <span className="title">Project : </span>
//               Intern - e Learning
//             </div>
//             <div className="projectDescription">
//               War Dashboard Clone | Next.js
//             </div>
//           </div>
//           <div className="progressFooter my-2 d-flex justify-content-between">
//             <div className="assignByDiv">
//               <div className="title">Assigned By</div>
//               <div className="MangerName">Akshay Malde</div>
//             </div>
//             <div className="d-flex align-items-center">
//               <div className="playPauseDiv mx-2">
//                 <IoPauseCircleOutline size={25} color="#00b058" />
//               </div>
//               <div className="completeTaskBtn">
//                 <FaRegStopCircle size={22} color="#ef233c" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="p-1  bg-white rounded p-3">
//         <Calendar />
//       </div>
//     </div>
//     <div className="col-8 ">
//       <div className="bg-white rounded p-3 h-100">
//         <div className="fw-medium">Team Tracker</div>
//         <div className="inputDiv">
//           <input type="text" placeholder="Search: " className="px-2 my-2" />
//         </div>
//         <div className={styles.tableDiv}>
//           <table>
//             <thead>
//               <tr>
//                 {tableHeading.map((heading) => (
//                   <td>{heading}</td>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((data) => (
//                 <tr>
//                   <td>{data.name}</td>
//                   <td>{data.department}</td>
//                   <td>{data.checkIn}</td>
//                   <td>{data.checkOut ? data.checkOut : "--:--"}</td>
//                   <td>{data.warScore}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     <div className="col-4">
//       <div className="p-1 h-100 bg-white rounded p-3">
//         <Graph />
//       </div>
//     </div>
//   </div>
// </div>
