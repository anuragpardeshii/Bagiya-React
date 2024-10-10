import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import HeroNav from "./HeroNav";
import Chart from "./Chart";
import Timer from "./Timer";
import Tags from "./Tags";
import InputURL from "./Input";

function Dashboard() {
  return (
    <>
      <Sidebar/>
      <div className="main">
      <HeroNav />
      <div className="d-flex ">
        <div className="col border m-3 mt-2 mb-0" style={{borderRadius: ".5rem"}}><InputURL /></div>
        {/* <div className="col border ms-0 mt-2 m-3 mb-0" style={{borderRadius: ".5rem"}}><Timer /></div> */}
        <div className="col-4 border ms-0 mt-2 m-3 mb-0" style={{borderRadius: ".5rem"}}><Tags /></div>
      </div>
      <div className="d-flex ">
        <div className="col border m-3 mb-0" style={{borderRadius: ".5rem"}}><Chart /></div>
        <div className="col border m-3 ms-0 mb-0" style={{borderRadius: ".5rem"}}><Tags /></div>
      </div>
      </div>

    </>
  );
}

export default Dashboard;
