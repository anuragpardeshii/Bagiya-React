import zIndex from "@mui/material/styles/zIndex";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <Sidebar className="position-fixed" style={{height: "100vh", width: "250px", minWidth: "250px", zIndex: "1000", top: "0"}}>
      <div className="d-flex align-items-center justify-content-center">
        <img
          className="p-4"
          style={{ width: "72%" }}
          src="media/Images/Bagiya_logo.png"
          alt=""
        />
      </div>
      <Menu
        className=""
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: "#13395e",
              color: "#b6c8d9",
            },
          },
        }}
      >
        <MenuItem component={<Link to="/dashboard" className="ps-4" />}> <i className="fa-solid fa-box-open ms-4 me-3"></i> Dashboard</MenuItem>
        <MenuItem component={<Link to="/dashboard/Bagiya" className="ps-4" />}> <i className="fa-solid fa-seedling ms-4 me-3"></i> Bagiya</MenuItem>
        <MenuItem component={<Link to="/dashboard/profile" className="ps-4" />}> <i className="fa-regular fa-id-badge ms-4 me-3"></i> My Profile</MenuItem>
        <MenuItem component={<Link to="/dashboard/Friends" className="ps-4" />}> <i className="fa-solid fa-people-roof ms-4 me-3"></i> Friends</MenuItem>
        <MenuItem component={<Link to="/dashboard/achievements" className="ps-4" />}> <i className="fa-solid fa-trophy ms-4 me-3"></i> Achievements</MenuItem>
        <MenuItem component={<Link to="/ranking" className="ps-4" />}> <i className="fa-solid fa-ranking-star ms-4 me-3"></i> Ranking</MenuItem>
        <MenuItem component={<Link to="/settings" className="ps-4" />}> <i className="fa-solid fa-gear ms-4 me-3"></i> Settings</MenuItem>
      </Menu>
      <div
        className="m-3 p-1"
        style={{
          borderRadius: ".5rem",
          backgroundColor: "#85ce14",
          color: "white",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div className="d-flex align-items-center justify-content-evenly flex-row" style={{fontSize: ".8rem"}}>
          <p className="m-0 fw-medium">Free Plan</p>
          <p className="m-0 fw-medium">Only 4 days left</p>
        </div>
        <div className="ps-2 pt-2 pe-2">
          <div
            className="progress"
            style={{ height: ".5rem" }}
            role="progressbar"
            aria-label="Success striped example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped bg-success thin-progress-bar"
              style={{ width: "57%" }}
            ></div>
          </div>
        </div>

        <div class="d-grid gap-2 mx-auto p-2">
          <button class="btn btn-light" style={{fontSize: ".8rem"}} type="button">
            Upgrade Now &#x279F;
          </button>
        </div>
      </div>
      <div className="m-4 mt-1" style={{ fontSize: ".8rem" }}>
        <p>
          You're now using free plan <a href="">upgrade plan</a> to continue
          using
        </p>
      </div>
    </Sidebar>
  );
}

export default SideMenu;
