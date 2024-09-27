function LogIn() {
  return (
    <>
      <div className="row" style={{height: "100vh"}}>
        <div className="col-6 text-center p-0">
          <img src="Media/images/Bagiya_logo.png" alt="BagiyaLogo" style={{minWidth: "35rem"}} />
        </div>
        <div className="col-6 d-flex justify-content-center p-0 " style={{alignItems: "center", display: "flex", justifyContent: "center"}}>
          <form className="col-8 border p-4 mb-2 border-opacity-50 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 className="text-center mb-4">Login</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn green-btn text-center" style={{backgroundColor:"#033801", color: "white", width: "100%"}}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
