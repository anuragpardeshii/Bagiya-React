import "./Features.css";

function Features() {
  return (
    <>
      <div className="main-content">
        <h3 className="m-4 text-center" style={{color: "white", fontSize: "2rem", fontWeight: "600"}}>
          Bagiya is an app that helps you stay focused on what matters, while
          supporting real tree planting for a greener world.
        </h3>
        <div className="d-flex m-auto justify-content-around align-items-center m-auto flex-wrap stage-container">
          <div
            className="d-flex flex-column p-1 text-center"
            style={{ maxWidth: "300px" }}
          >
            <img
              className="m-auto mt-5"
              style={{
                height: "12rem",
                width: "12rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "8rem",
                padding: ".5rem",
              }}
              src="Media/images/progress/cropped-image1.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.2rem", padding: "1rem", color: "white" }}>
              Enhance your focus with planting a tree
            </p>
          </div>
          <div
            className="d-flex flex-column p-1 text-center"
            style={{ maxWidth: "300px" }}
          >
            <img
              className="m-auto mt-5"
              style={{
                height: "12rem",
                width: "12rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "8rem",
                padding: ".5rem",
              }}
              src="Media/images/progress/cropped-image1.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.2rem", padding: "1rem", color: "white" }}>
              Your tree will grow as you stay focused on your work
            </p>
          </div>
          <div
            className="d-flex flex-column p-1 text-center"
            style={{ maxWidth: "300px" }}
          >
            <img
              className="m-auto mt-5"
              style={{
                height: "12rem",
                width: "12rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "8rem",
                padding: ".5rem",
              }}
              src="Media/images/progress/cropped-image1.png"
              alt=""
            />
            <p className="mt-1" style={{ fontSize: "1.2rem", padding: "1rem", color: "white" }}>
              Abandoning the app midway will cause your tree to wither
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
