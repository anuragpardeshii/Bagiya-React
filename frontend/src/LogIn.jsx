function LogIn() {
  return (
    <>
      <div className="row " style={{height: "100vh", width: "100%", alignItems: "center", display: "flex", justifyContent: "center"}}>
      <div className="col-5 text-center lh-base " style={{padding:"4rem", margin: "2rem"}}>
          <h1 style={{padding: "1rem"}}>New Here?</h1>
          <p style={{padding: "1rem"}} className="fs-5">Enhance your focus and contribute to environmental sustainability. Sign up with Bagiya today to get started.</p>
          <div class="d-grid gap-2 col-6 mx-auto" style={{padding: "1rem"}}>
          <button type="submit" className="btn green-btn text-center fs-5" style={{backgroundColor:"#033801", color: "white", width: "100%", borderRadius: "10rem"}}>
              SIGN IN
            </button>
            </div>
          </div>
        <div className="col-7 p-0 border-start" style={{alignItems: "center", display: "flex", justifyContent: "center", flex: "1", margin: "1rem"}}>
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
            <div class="d-grid gap-2 col-6 mx-auto" style={{padding: "1rem"}}>
          <button type="submit" className="btn green-btn text-center fs-5" style={{backgroundColor:"#033801", color: "white", width: "100%", borderRadius: "10rem"}}>
              LOG IN
            </button>
            </div>
          </form>
        </div>
        </div>
    </>
  );
}

export default LogIn;
