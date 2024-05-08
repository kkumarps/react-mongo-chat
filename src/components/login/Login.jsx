import { useState } from "react";

import "./login.css";

import useHashString from "../../lib/hooks/useHashString";
import useFetch from "../../lib/hooks/useFetch";
import useNotifier from "../../lib/hooks/useNotifier";

function Login() {
  // const username = useRef();

  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    const data = new Object({
      email: email,
      password: password,
    });

    useHashString(password)
      .then((encPass) => {
        data.password = encPass;

        useFetch("https://fakestoreapi.com/users", { method: "GET" });
      })
      .catch((err) => useNotifier(-1, "Please refresh browser and try again."))
      .finally(() => setLoading(false));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    const data = new Object({
      username: username,
      email: email,
      password: password,
    });

    useHashString(password)
      .then((encPass) => {
        data.password = encPass;

        useFetch("https://fakestoreapi.com/users", { method: "GET" });
      })
      .catch((err) => useNotifier(-1, "Please refresh browser and try again."))
      .finally(() => setLoading(false));
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
            <button disabled={loading}>Login</button>
          </form>
        </div>
        <div className="separator"></div>
        <div className="item">
          <h2>Create an account</h2>
          <form onSubmit={handleRegister}>
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
            <button disabled={loading}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
