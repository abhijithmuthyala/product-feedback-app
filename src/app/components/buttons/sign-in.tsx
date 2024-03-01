"use client";

export default function SignInButton({ formAction }) {
  return (
    <button type="submit" formAction={formAction}>
      Login
    </button>
  );
}
