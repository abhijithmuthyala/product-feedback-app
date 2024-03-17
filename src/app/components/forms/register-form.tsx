"use client";

import SignUpButton from "../buttons/sign-up";

export default function RegisterForm({ onSwitch }) {
  return (
    <>
      <form>
        <div className="grid gap-y-6">
          <label
            htmlFor="email"
            className="grid gap-y-2 font-semibold text-neutral-7 "
          >
            Enter your email
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="xyz@gmail.com"
              className="rounded-md px-3 py-2 font-regular"
            />
          </label>
          <label
            htmlFor="firstname"
            className="grid gap-y-2 font-semibold text-neutral-7"
          >
            First name
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              className="rounded-md px-3 py-2 font-regular"
            />
          </label>
          <label
            htmlFor="lastname"
            className="grid gap-y-2 font-semibold text-neutral-7"
          >
            Last name
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              className="rounded-md px-3 py-2 font-regular"
            />
          </label>
          {/* <label
            htmlFor="username"
            className="grid gap-y-2 font-semibold text-neutral-7"
          >
            User name
            <input
              type="text"
              name="username"
              id="username"
              required
              className="rounded-md px-3 py-2 font-regular"
            />
          </label> */}
          <label
            htmlFor="pw"
            className="grid gap-y-2 font-semibold text-neutral-7"
          >
            Enter your password
            <input
              type="password"
              name="pw"
              id="pw"
              required
              minLength={8}
              placeholder="********"
              className="rounded-md px-3 py-2 font-regular"
            />
          </label>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <SignUpButton />
        </div>
      </form>
      <div className="mt-6 grid place-content-center gap-y-2">
        <p className="text-neutral-7">Already have an account? </p>
        <button
          className="rounded-md bg-secondary px-3 py-1.5 text-base font-bold text-neutral-1"
          onClick={onSwitch}
        >
          Login
        </button>
      </div>
    </>
  );
}
