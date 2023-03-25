import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
//For API Requests
import { AiOutlineUser } from "react-icons/ai";
import { FaFireExtinguisher } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md"

import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/Sidebar";
import "./dashboard.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todos/todos";

const Dashboard = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, [dispatch]);

  //Datatable HTML
  return (
    <>
      <Sidebar>
        {/* top Header */}
        <Topbar />
        {/* Top header end */}
        <div className="dashboard-home">
          <div className="page-inner">
            <div className="row">
              <div className="col-lg-3">
                <div className="card bg-primary-gradient card-body-content">
                  <div className="card-body card-left-content d-flex justify-content-start">
                    <h2 className="d-flex align-items-center text-light cart-icon">
                      <AiOutlineUser />
                    </h2>
                    <div className="cart-right-content">
                      <span className="text-light fs-6">30</span>
                      <p className="text-light fs-6">Total User</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-primary-gradient card-body-content">
                  <div className="card-body card-left-content d-flex justify-content-start">
                    <h2 className="d-flex align-items-center text-light cart-icon">
                      <MdProductionQuantityLimits />
                    </h2>
                    <div className="cart-right-content">
                      <span className="text-light fs-6">100</span>
                      <p className="text-light fs-6">Total Product</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-primary-gradient card-body-content">
                  <div className="card-body card-left-content d-flex justify-content-start">
                    <h2 className="d-flex align-items-center text-light cart-icon">
                      <FaFireExtinguisher />
                    </h2>
                    <div className="cart-right-content">
                      <span className="text-light fs-6">5</span>
                      <p className="text-light fs-6">Total Brand</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card bg-primary-gradient card-body-content">
                  <div className="card-body card-left-content d-flex justify-content-start">
                    <h2 className="d-flex align-items-center text-light cart-icon">
                      <BiCategory />
                    </h2>
                    <div className="cart-right-content">
                      <span className="text-light fs-6">10</span>
                      <p className="text-light fs-6">All Category</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div
                  className="card"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="example"
                        className="display table table-striped table-hover overflow-y:auto"
                      >
                        <thead>
                          <tr>
                            <th>S. No </th>
                            <th>Name</th>
                            <th>price</th>
                            <th>brand</th>
                            <th>category</th>
                            <th>description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {todos.data.map((todo, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{todo.title}</td>
                                <td>{todo.price}</td>
                                <td>{todo.brand}</td>
                                <td>{todo.category}</td>
                                <td>{todo.description}%</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
