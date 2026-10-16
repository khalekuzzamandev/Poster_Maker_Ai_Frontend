"use client";

import { authClient } from "@/lib/auth-client";
import React, { FormEvent } from "react";

const Register = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      imageUrl: string;
    };

    console.log(data, "all data is here");

    const result = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.imageUrl || undefined,
    });

    console.log(result);
  };

  return (
    <div className="my-10 mx-auto flex max-w-2xl justify-center rounded-xl bg-white py-10 shadow">
      <form className="space-y-3.5" onSubmit={handleSubmit}>
        <div className="px-2 py-1">
          <label>
            Name:
            <input
              className="mx-1 rounded-md border border-green-300 px-2 py-1 outline-none focus:border-green-600"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </label>
        </div>

        <div className="px-2 py-1">
          <label>
            Email:
            <input
              className="mx-1 rounded-md border border-green-300 px-2 py-1 outline-none focus:border-green-600"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </label>
        </div>

        <div className="px-2 py-1">
          <label>
            Image URL:
            <input
              className="mx-1 rounded-md border border-green-300 px-2 py-1 outline-none focus:border-green-600"
              type="url"
              placeholder="Enter image URL"
              name="imageUrl"
            />
          </label>
        </div>

        <div className="px-2 py-1">
          <label>
            Password:
            <input
              className="mx-1 rounded-md border border-green-300 px-2 py-1 outline-none focus:border-green-600"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
            />
          </label>
        </div>

        <button className="rounded-md bg-red-500 p-2 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;