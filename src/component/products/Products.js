import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
//For API Requests
import { FaEdit, FaTimes } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsCheckLg } from "react-icons/bs";

import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/Sidebar";
import { withRouter } from "../withRouter";
import "./users.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todos/todos";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodos());
    //initialize datatable
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
  }, [dispatch]);

  const addNewProducts = () => {
    navigate(`/addProducts`);
  };

  const updateProducts = (id) => {
    navigate(`/editProductsDetail/${id}`);
  };

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
              <div className="col-md-12">
                <div className="d-flex justify-content-between">
                  <h4 className="mt-3">Products list</h4>
                  <button className="btn btn-primary m-2" onClick={addNewProducts}>
                    Add Product
                  </button>
                </div>
                <div
                  className="card"
                  style={{ maxHeight: "480px", overflowY: "auto" }}
                >
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        id="example"
                        className="display table table-striped table-hover overflow-y:auto"
                      >
                        <thead>
                          <tr>
                            <th>S. No</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>brand</th>
                            <th>category</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {todos.data.map((user, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.title}</td>
                                <td>{user.price}</td>
                                <td>{user.brand}</td>
                                <td>{user.category}</td>
                                <td>
                                  {user.status == 1 ? (
                                    <BsCheckLg className="text-success" />
                                  ) : (
                                    <FaTimes className="text-danger" />
                                  )}
                                </td>
                                <td>
                                  <div className="d-flex justify-content-flex-start">
                                    <div
                                      className="edit-icon"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <FaEdit
                                        onClick={() => {
                                          updateProducts(user.id);
                                        }}
                                        id={user.id}
                                      />
                                    </div>
                                    <div
                                      className="delete-icon"
                                      style={{
                                        marginLeft: "15px",
                                        cursor: "pointer",
                                      }}
                                    >
                                      <RiDeleteBin5Line
                                      // onClick={() => {deleteUser(user.id)}}
                                      />
                                    </div>
                                  </div>
                                </td>
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

export default withRouter(Products);
