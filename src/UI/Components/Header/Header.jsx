import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

import { AiOutlineFileAdd } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";
import { PiSignIn } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";

import styles from "./Header.module.css";

function Header() {
  const d = new Date();
  const [greeting, setGreeting] = useState("");
  const [iamge, setImage] = useState("");

  useEffect(() => {
    if (d.getHours() >= 12) {
      setGreeting("Good Afternoon,");
    } else if (d.getHours() >= 18) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Morning");
    }
  }, []);
  return (
    <div className="container-xxl">
      <div className="d-flex justify-content-between py-3 p-md-3">
        <div className="d-flex">
          <HiMenuAlt2
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="mr-2 my-auto"
            style={{ fontSize: "2rem", cursor: "pointer" }}
          />

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <Image src="/blackLogo.png" width={100} height={30} alt="ORT_" />
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between align-items-end">
              <div class="w-100 accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Dashboards
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show text-black"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <LuLayoutDashboard className="mx-2" /> Dashboard
                        </li>
                        <li>
                          <SlCalender className="mx-2" /> Attendance Calendar
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Task Master
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <AiOutlineFileAdd className="mx-2" /> Add Tasks
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Leave
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <svg
                            className="mx-2"
                            id="Group_19770"
                            data-name="Group 19770"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 34 34"
                          >
                            <rect
                              id="Rectangle_11025"
                              data-name="Rectangle 11025"
                              width="20"
                              height="20"
                              fill="#282828"
                              opacity="0"
                            />
                            <path
                              id="event_upcoming_FILL0_wght400_GRAD0_opsz48"
                              d="M68.289-852.286v-2.079h7.585v-14.9H54.608v7.621H52.481v-14.2a1.973,1.973,0,0,1,.638-1.455,2.064,2.064,0,0,1,1.489-.623h2.3V-880h2.3v2.078H71.266V-880h2.3v2.078h2.3a2.064,2.064,0,0,1,1.489.623A1.973,1.973,0,0,1,78-875.843v21.478a1.973,1.973,0,0,1-.638,1.455,2.064,2.064,0,0,1-1.489.624ZM59.57-850l-1.489-1.455,4.005-3.949H50v-2.079H62.086l-4.005-3.949,1.489-1.455,6.592,6.443Zm-4.962-21.34H75.873v-4.5H54.608Zm0,0v0Z"
                              transform="translate(-46.999 882)"
                              fill="#282828"
                            />
                          </svg>
                          Leave Calendar
                        </li>
                        <li>
                          <PiSignIn className="mx-2" /> Apply Leave
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Attendance
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <svg
                            className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 34 34"
                          >
                            <g
                              id="Group_19771"
                              data-name="Group 19771"
                              transform="translate(-125 -335)"
                            >
                              <rect
                                id="Rectangle_11025"
                                data-name="Rectangle 11025"
                                width="20"
                                height="20"
                                transform="translate(125 335)"
                                fill="#282828"
                                opacity="0"
                              />
                              <path
                                id="pending_actions_FILL0_wght400_GRAD0_opsz48"
                                d="M140.49,170a6.773,6.773,0,1,1,4.8-1.984A6.537,6.537,0,0,1,140.49,170Zm2.09-3.158,1-1-2.691-2.691v-4.019h-1.4v4.522ZM120,168.062V142.871h8.756a3.587,3.587,0,0,1,7.033,0h9.4V155.61a9.935,9.935,0,0,0-1.059-.556,10.251,10.251,0,0,0-1.094-.413v-9.617h-3.8v4.665H125.957v-4.665h-3.8v20.885h9.8a8.927,8.927,0,0,0,.431,1.059,11.563,11.563,0,0,0,.61,1.094Zm12.919-23.182a1.41,1.41,0,1,0-1.023-.413A1.389,1.389,0,0,0,132.919,144.88Z"
                                transform="translate(8.364 197)"
                                fill="#282828"
                              />
                            </g>
                          </svg>
                          Attendance Application
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Profile
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse text-black"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <LuCircleUser className="mx-2" size={20} /> My Profile
                        </li>
                        <li>
                          <svg
                            className="mx-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="20px"
                            height="20px"
                          >
                            <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z" />
                          </svg>{" "}
                          Change Password
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <button className={styles.logoutBtn}>Logout</button>
            </div>
          </div>
          <div className="logo mx-2 my-auto">
            <Image src="/blackLogo.png" width={100} height={30} alt="ORT_" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <IoMdNotificationsOutline
            size={25}
            className="mx-2"
            style={{ cursor: "pointer" }}
          />
          <div className="d-flex justify-content-between align-items-center">
            {greeting} Aditya{" "}
            <div className="userIcon">
              <Image
                src="/userImage.jpg"
                width={40}
                height={40}
                alt="Random User"
                className="rounded-circle mx-2"
                style={{ cursor: "pointer" }}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
