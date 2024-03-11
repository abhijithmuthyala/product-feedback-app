import Link from "next/link";

import UpvoteButton from "../buttons/upvote-button";
import CategoryTag from "./category-tag";
import SuggestionCommentsNumber from "./comments-number";

export default async function Suggestion({ data, asLink = false }) {
  const formattedTitle = data.title.replace(
    data.title[0],
    data.title[0].toUpperCase(),
  );
  const titleElement = (
    <h3 className="font-bold text-neutral-7">
      {asLink ? (
        <Link href={`/details/${data.id}`}>{formattedTitle}</Link>
      ) : (
        formattedTitle
      )}
    </h3>
  );

  return (
    <article className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-y-4 rounded-lg bg-neutral-0 px-6 py-6 text-sm md:grid-rows-1 md:gap-x-10">
      <div className="col-span-full flex flex-col items-start gap-2 md:col-start-2 md:row-start-1">
        <header className="flex flex-col gap-2">
          {titleElement}
          <p className="text-neutral-6">{data.description}</p>
        </header>
        <CategoryTag category={data.category} />
      </div>
      <div className="md:row-start-1">
        <UpvoteButton
          upvotes={data.upvotes_count}
          upvoted={data.upvoted}
          postID={data.id}
        />
      </div>
      <div className="col-start-3 self-center md:row-start-1">
        <SuggestionCommentsNumber numComments={data.comments_count} />
      </div>
    </article>
  );
}
