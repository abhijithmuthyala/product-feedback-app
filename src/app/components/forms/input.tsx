export default function FormFeedback({ message = "Invalid credentials" }) {
  console.log("Render: FormFeedback, ", message);
  return <p className="text-red-9">{message}</p>;
}
