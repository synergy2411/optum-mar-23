import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

const CREATE_POST = gql`
  mutation {
    createPost(data: { title: "Post created from React", body: "...." }) {
      id
      title
      body
    }
  }
`;

const Login = () => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const [userLogin, { data, loading, error }] = useMutation(USER_LOGIN);
  const [createPost, { data: postData }] = useMutation(CREATE_POST);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const loginClickHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await userLogin({
        variables: {
          email: enteredEmail,
          password: enteredPassword,
        },
      });
      console.log(data);
      localStorage.setItem("token", data.loginUser.token);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  const createPostHandler = async (event) => {
    event.preventDefault();
    try {
      await createPost();
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
                <div className="row">
                  <div className="col-6">
                    <div className="d-grid">
                      <button
                        className="btn btn-primary"
                        onClick={loginClickHandler}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid">
                      <button
                        className="btn btn-secondary"
                        onClick={createPostHandler}
                        disabled={!show}
                      >
                        Create Post
                      </button>
                    </div>
                  </div>
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
