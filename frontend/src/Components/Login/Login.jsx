import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

const Login = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const loginClickHandler = async (event) => {
    event.preventDefault();
    try {
      await userLogin({
        variables: {
          email: enteredEmail,
          password: enteredPassword,
        },
      });
      localStorage.setItem("token", data.loginUser.token);
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
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={enteredEmail}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {/* password */}
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={enteredPassword}
                  onChange={(event) => setPassword(event.target.value)}
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
