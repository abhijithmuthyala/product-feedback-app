import AuthForm from "../components/auth-form";

export default async function LoginPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-lg rounded-lg bg-neutral-1 px-6 py-6 shadow-md shadow-neutral-4">
        <AuthForm />
      </section>
    </main>
  );
}
