"use client";

export default function SignUpButton({ formAction }) {
  return (
    <button type="submit" formAction={formAction}>
      Signup
    </button>
  );
}
