"use client";

import { handleSignup } from "@/actions/login";
import { useFormState } from "react-dom";
import SignUpButton from "../buttons/sign-up";
import FormFeedback from "./input";

export default function RegisterForm({ onSwitch }) {
  const [fs, signupAction] = useFormState(handleSignup, { error: null });

  return (
    <>
      <form action={signupAction}>
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
        {fs?.error && (
          <div className="mt-4">
            <FormFeedback message={fs.error} />
          </div>
        )}
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
