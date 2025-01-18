import { useFormStatus } from "react-dom";

export default function FormFeedback({ message = "Something went wrong" }) {
  const { pending } = useFormStatus();

  if (pending) return null;
  return <p className="text-red-9">{message}</p>;
}
