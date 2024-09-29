import "./NavBar.css";

function LogIn() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg position-sticky top-0 navbar-h"
        style={{ zIndex: "12" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="Media/images/Bagiya_logo.png"
              alt="logo"
              style={{ height: "3rem" }}
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNavAltMarkup"
          ></div>
          <button className="btn new-btn">Dashboard</button>
          <button className="btn new-btn">LogIn/SignUp</button>
        </div>
      </nav>
    </>
  );
}

export default LogIn;
