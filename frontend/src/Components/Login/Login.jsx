import { useMutation, gql } from "@apollo/client";

const USER_LOGIN = gql`
  mutation {
    loginUser(data: { email: "foo@test", password: "foo123" }) {
      token
    }
  }
`;

const Login = () => {
  const [userLogin] = useMutation(USER_LOGIN);

  const loginClickHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await userLogin();
      console.log("TOKEN : ", data.loginUser.token);
    } catch (err) {
      console.log(err);
    }
  };

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
                  <button
                    className="btn btn-primary"
                    onClick={loginClickHandler}
                  >
                    Login
                  </button>
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
