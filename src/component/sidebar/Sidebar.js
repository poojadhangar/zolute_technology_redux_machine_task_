import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/products",
      name: "Products",
      icon: <MdProductionQuantityLimits />,
    },
  ];

  const navigate = useNavigate();
  const changeDashbordRouting = () => {
    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h5 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Admin Panel
          </h5>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="user-details border-top border-bottom">
          <span style={{ display: isOpen ? "block" : "none" }}>Hii System</span>
          <h6 style={{ display: isOpen ? "block" : "none" }}>
            admin@system.com
          </h6>
        </div>
        <div className="dashboard-page" onClick={changeDashbordRouting}>
          <div className="dashboard-main-field">
            <div className="dashboard-option-icon">
              <IoHome />
            </div>
            <div
              className="dashboard-menu-option"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <span>Dashboard</span>
            </div>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link to={item.path} key={index} className="link">
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
