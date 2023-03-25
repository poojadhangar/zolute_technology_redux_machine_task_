import React from "react";
import Topbar from "../topbar/topbar";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "./users.css";

const AddProductDetails = () => {
  const history = useNavigate();
  const onClickCancel = () => {
    history(`/products`);
  };

  return (
    <>
      <Sidebar>
        {/* top Header */}
        <Topbar />
        {/* Top header end */}
        <div className="dashboard-home">
          <div className="page-inner">
            <h4 className="mt-3">Add New Product</h4>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-outlinev">
                              <label className="form-label">Name</label>
                              <input
                                type="email"
                                className="form-control form-control border"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline">
                              <label className="form-label">Price</label>
                              <input
                                type="text"
                                className="form-control form-control border"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <div className="form-outlinev">
                              <label className="form-label">Brand</label>
                              <input
                                type="text"
                                className="form-control form-control border"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-outline">
                              <label className="form-label">Category</label>
                              <input
                                type="text"
                                className="form-control form-control border"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-12">
                            <input
                              type="checkbox"
                              className="checkbox"
                              value="1"
                              required
                            />
                            <label className="form-label status-style">
                              status
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-primary btn-lg shadow-sm btn-submit m-3"
                          type="button"
                          onClick={onClickCancel}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary btn-lg shadow-sm btn-submit"
                          type="button"
                          // onClick={updateUser}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
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

export default AddProductDetails;
