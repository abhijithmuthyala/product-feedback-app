"use client";

import SignInButton from "./buttons/sign-in";
import SignUpButton from "./buttons/sign-up";

export default function AuthForm() {
  return (
    <form>
      <div className="grid gap-y-6">
        <label htmlFor="email" className="grid gap-y-2">
          Enter your email
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="xyz@gmail.com"
            className="rounded-md px-3 py-2"
          />
        </label>
        <label htmlFor="pw" className="grid gap-y-2">
          Enter your password
          <input
            type="password"
            name="pw"
            id="pw"
            required
            minLength={8}
            placeholder="********"
            className="rounded-md px-3 py-2"
          />
        </label>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <SignUpButton />
        <SignInButton />
      </div>
    </form>
  );
}
