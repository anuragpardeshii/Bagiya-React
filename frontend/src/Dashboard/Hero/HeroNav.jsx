function Hero() {
  return (
    <nav class="navbar bg-body-tertiary border-bottom sticky-top" >
      <div class="container-fluid d-flex">
        <div className="">
          <p className="text-muted m-0" style={{ fontSize: ".8rem" }}>
            Welcome Back!{" "}
          </p>
          <p className="m-0">Anurag Pardeshi</p>
        </div>
        <div className="d-flex justify-content-end align-items-center" style={{flex:"1"}}>
        <div class="input-group" style={{maxWidth: "30rem", height: "2rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.1)"}}>
          <input
            type="text"
            className="form-control"
            placeholder="Search something..."
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn border-bottom border-end border-top"
            style={{backgroundColor: "#fff"}}
            type="button"
            id="button-addon2"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <button type="button" class="btn border ms-2 me-2" style={{backgroundColor: "#fff", borderRadius: "1rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.1)"}}>
          <i class="fa-regular fa-bell"></i>
        </button>
        <div className="d-flex align-items-center border" style={{borderRadius: "20rem", width: "15rem", backgroundColor: "#fff", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 12px 0 rgba(0, 0, 0, 0.1)"}}>
            <div>
          <img className="m-1" src="media/Images/avatar3.png" style={{width: "2rem", borderRadius: "50%"}} alt="" />
          </div>
          <div className="m-0 p-0" style={{fontSize: ".8rem"}}>
            <p className="m-0">Anurag Pardeshi</p>
            <p className="text-muted m-0">pardeshianurag22@gmail.com</p>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Hero;
