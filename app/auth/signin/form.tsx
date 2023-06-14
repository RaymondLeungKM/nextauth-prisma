"use client";

import { signIn } from "next-auth/react";
import { useState, ChangeEvent } from "react";

export const FormComponent = ({ csrfToken }: { csrfToken: string }) => {
  let [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const signInHandler = (e: React.FormEvent) => {
    e.preventDefault();

    signIn("credentials", {
      email: formValues.email,
      password: formValues.password,
      callbackUrl: "/",
    });
  };

  return (
    <form method="post" onSubmit={signInHandler}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email
        <input
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};
