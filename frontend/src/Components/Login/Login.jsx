const Login = () => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Login Form</h3>
            <form>
              {/* email */}
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="form-control" />
              </div>
              {/* password */}
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
              {/* buttons */}
              <div className="form-group">
                <div className="d-grid">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
