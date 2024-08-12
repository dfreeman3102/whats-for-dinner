import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

  const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    }

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try{
        const {data} = await login({
          variables: {...formState}
        });
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
        console.log("Invalid Login Credentials");
      }

      setFormState({
        email: '',
        password: '',
      });
    }

  return (   
    <div>
          <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
    </div> 
  );
};

export default Login;