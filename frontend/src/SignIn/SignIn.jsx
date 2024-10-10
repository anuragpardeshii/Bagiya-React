import React from 'react';
import { Link } from 'react-router-dom';
function LogIn() {
  return (
    <>
      <div
        className="row m-0 d-flex align-items-center"
        style={{
          height: "100vh",
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="col-7 p-0 border-end"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: "1",
            margin: "1rem",
          }}
        >
          <form className="col-8 border p-4 mb-2 border-opacity-50 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 className="text-center mb-4">Sign in</h1>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <label for="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
              />
              <label for="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div
              className="d-grid gap-2 col-6 mx-auto"
              style={{ padding: "1rem" }}
            >
              <button
                type="submit"
                className="btn green-btn text-center fs-5"
                style={{
                  backgroundColor: "#033801",
                  color: "white",
                  width: "100%",
                  borderRadius: "10rem",
                }}
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        <div
          className="col-5 text-center lh-base "
          style={{ padding: "4rem", margin: "2rem" }}
        >
          <h1 style={{ padding: "1rem" }}>Back to Login?</h1>
          <p style={{ padding: "1rem" }} className="fs-5">
            Need to log in again? Click here to return to the login screen
            conveniently.
          </p>
          <div
            className="d-grid gap-2 col-6 mx-auto"
            style={{ padding: "1rem" }}
          >
            <Link to="/login"
              className="btn green-btn text-center fs-5"
              style={{
                backgroundColor: "#033801",
                color: "white",
                width: "100%",
                borderRadius: "10rem",
              }}
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
