import React from "react";
import "./topbar.css";
import { AiOutlinePoweroff } from "react-icons/ai";

const Topbar = () => {
  return (
    <>
      <div className="navbar-header">
        <div className="container-fluid">
          <div className="collapse d-flex justify-content-end">
            <button className="btn fs-4 text-light">
              <AiOutlinePoweroff />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
