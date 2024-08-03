import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

export default function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          name="email"
          type="email"
          placeholder="Your email"
        />
        <input
          name="password"
          type="password"
          placeholder="Your password"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Sign Up</h2>
      <form>
        <input
          name="fullName"
          type="text"
          placeholder="Your full name"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
        />
        <input
          name="password"
          type="password"
          placeholder="Your password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
