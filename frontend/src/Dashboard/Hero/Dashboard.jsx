import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import HeroNav from "./HeroNav";
// import History from "./History";
// import Chart from "./Chart";
import Timer from "./Timer";
import Tags from "./Tags";
import Activity from "./Activity";
import SuccessRate from "./SuccessRate";
import ImageSection from "./ImageSection";
// import InputURL from "./Input";

function Dashboard() {
  return (
    <>
      <Sidebar/>
      <div className="main">
      <HeroNav />
      <div className="d-flex ">
        <div className="col-5 border m-1" style={{borderRadius: ".5rem"}}><Timer /></div>
        {/* <div className="col border ms-0 mt-2 m-3 mb-0" style={{borderRadius: ".5rem"}}><Timer /></div> */}
        <div className="col-5 border m-1" style={{borderRadius: ".5rem"}}><ImageSection /></div>
      </div>
      <div className="d-flex ">
      <div className="col-3 border m-1" style={{borderRadius: ".5rem"}}><Tags /></div>
      <div className="col-3 border m-1" style={{borderRadius: ".5rem"}}><SuccessRate /></div>
        <div className="col border m-1 " style={{borderRadius: ".5rem"}}><Activity /></div>
      </div>
      </div>
    </>
  );
}

export default Dashboard;
