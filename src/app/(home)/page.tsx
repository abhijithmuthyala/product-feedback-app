import type { Metadata } from "next";
import Suggestions from "../components/suggestions/suggestions";

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "Let your users provide valuable feedback on your app.",
};

export default async function Home({ searchParams }) {
  const { category, sort } = searchParams;

  return (
    <div>
      <Suggestions category={category} sort={sort} />
    </div>
  );
}
