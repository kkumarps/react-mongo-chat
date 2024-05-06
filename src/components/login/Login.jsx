import { toast } from "react-toastify";

import "./login.css";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Hello");
  };

  return (
    <>
      <div className="login">
        <div className="item">
          <h2>Welcome</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Enter your email" name="email" />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <button>Login</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="item">
          <h2>Create an account</h2>
          <form>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
            />
            <input type="email" placeholder="Enter your email" name="email" />
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
