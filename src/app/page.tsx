import Suggestions from "./components/suggestions/suggestions";

export default function Home({ searchParams }) {
  const { category, sort } = searchParams;

  return (
    <>
      <main className="mx-5 p-2 sm:p-4 md:p-4">
        <h1 className="text-3xl font-bold">Supabase + Next.js</h1>
        <Suggestions category={category} sort={sort} />
      </main>
    </>
  );
}
