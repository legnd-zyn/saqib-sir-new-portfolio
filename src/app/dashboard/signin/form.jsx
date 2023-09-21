"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

import show from "@/images/icons/view.png";
import hide from "@/images/icons/hide.png";

const LoginForm = () => {
  const [isShown, setIsShown] = useState(false);
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const res = await signIn({ username, password });
    console.log(res);
  }

  return (
    <form className="bg-zinc-100 rounded-md p-5 my-10" onSubmit={handleSubmit}>
      <p className="text-lg font-bold text-center">Portfolio Login</p>
      <div className="flex flex-col mt-5">
        <label htmlFor="username" className="font-bold">
          Username
        </label>
        <input
          className="px-4 py-2 border-none outline-none rounded-md"
          type="text"
          placeholder="username"
          id="username"
          name="username"
          ref={usernameRef}
          minLength={6}
          required={true}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <div className="flex rounded-md overflow-hidden">
          <input
            className="px-4 py-2 border-none flex-grow outline-none"
            type={isShown ? "text" : "password"}
            placeholder="password"
            id="password"
            name="password"
            required={true}
            minLength={8}
            ref={passwordRef}
          />
          <button
            className="bg-white pr-2 outline-none"
            onClick={() => setIsShown((prev) => !prev)}
          >
            <Image
              src={isShown ? show : hide}
              className="px-0.5"
              alt="Show hide password icon"
            />
          </button>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="py-2 rounded-md px-4 bg-zinc-200 mt-2 w-full font-bold active:scale-95 transition-all"
        >
          Login
        </button>
      </div>
    </form>
  );
};

async function signIn({ username, password }) {
  const res = await fetch("/api/signin", {
    body: JSON.stringify({ username, password }),
    method: "POST",
    cache: "no-store",
  });
  if (res.ok) {
    return await res.json();
  }
  return { success: false };
}

export default LoginForm;
