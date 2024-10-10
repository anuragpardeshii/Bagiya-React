import './Uses.css';

function Uses() {
  return (
    <>
      <div className="main-content2">
      <h3 className="m-4 text-center" style={{color: "#366827", fontSize: "2rem", fontWeight: "700"}}> 
          Stay attentive wherever you are, whenever you are.
        </h3>
        <div className="d-flex m-auto justify-content-around align-items-center m-auto flex-wrap">
          <div
            className="d-flex flex-column p-1 text-center m-3"
            style={{ maxWidth: "360px" }}
          >
            <img
                className='mt-3'
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: ".5rem",
              }}
              src="Media/images/1.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.5rem", padding: "1rem", color: "#366827", fontWeight: "700"}}>
              At the office
            </p>
          </div>
          <div
            className="d-flex flex-column p-1 text-center m-3"
            style={{ maxWidth: "360px" }}
          >
            <img
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: ".5rem",
              }}
              src="Media/images/2.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.5rem", padding: "1rem", color: "#366827", fontWeight: "700"}}>
              In the Library
            </p>
          </div>
          <div
            className="d-flex flex-column p-1 text-center m-3"
            style={{ maxWidth: "360px" }}
          >
            <img
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: ".5rem",
              }}
              src="Media/images/3.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.5rem", padding: "1rem", color: "#366827", fontWeight: "700"}}>
              While Socialising
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uses;