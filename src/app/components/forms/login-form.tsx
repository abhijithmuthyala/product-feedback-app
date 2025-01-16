"use client";

import { handleLogin } from "@/actions/login";
import { useFormState } from "react-dom";
import SignInButton from "../buttons/sign-in";
import FormFeedback from "./input";

export default function LoginForm({ onSwitch }) {
  const [fs, loginAction] = useFormState(handleLogin, { error: null });

  return (
    <>
      <form action={loginAction}>
        <div className="grid gap-y-6">
          <label
            htmlFor="email"
            className="grid gap-y-2 font-semibold text-neutral-8"
          >
            Enter your email
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="xyz@gmail.com"
              className="rounded-md px-3 py-2 font-regular text-neutral-7"
            />
          </label>
          <label
            htmlFor="pw"
            className="grid gap-y-2 font-semibold text-neutral-8"
          >
            Enter your password
            <input
              type="password"
              name="pw"
              id="pw"
              required
              minLength={8}
              placeholder="********"
              className="rounded-md px-3 py-2 font-regular text-neutral-7"
            />
          </label>
        </div>
        {fs?.error && (
          <div className="mt-4">
            <FormFeedback message={fs.error} />
          </div>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <SignInButton />
        </div>
      </form>
      <div className="mt-6 grid place-content-center gap-y-2">
        <p className="text-neutral-7">Don&apos;t have an account yet?</p>
        <button
          className="rounded-md bg-secondary px-3 py-1.5 text-base font-bold text-neutral-1"
          onClick={onSwitch}
        >
          Register new account
        </button>
      </div>
    </>
  );
}
