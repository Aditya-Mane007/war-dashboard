import Link from "next/link";
import React from "react";

function Footer() {
  const d = new Date();
  return (
    <div className="py-3 p-md-3 text-center md-text-start d-md-flex justify-content-between">
      <p className="my-auto">
        Copyright &copy; {d.getFullYear()}{" "}
        <Link href="https://onerooftech.com/" target="_blacnk">
          OneRoof Technologies LLP
        </Link>{" "}
        <span>All rights reserved.</span>
      </p>
      <p className="my-auto">
        Version <span>3.18</span>
      </p>
    </div>
  );
}

export default Footer;
