import NewSuggestionLink from "../links/new-suggestion-link";

export default function RequestToAddFeedback() {
  return (
    <article className="grid min-h-empty-suggestions-mobile place-content-center justify-center rounded-lg bg-neutral-0 md:min-h-empty-suggestions-tablet">
      <div className="grid max-w-empty-suggestions justify-items-center p-6">
        <div className="h-[108px] w-[102px] bg-empty bg-contain bg-center bg-no-repeat"></div>
        <p className="mt-10 text-base font-bold text-neutral-7">
          There is no feedback yet.
        </p>
        <p className="mt-3.5 text-neutral-6">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <div className="mt-6">
          <NewSuggestionLink />
        </div>
      </div>
    </article>
  );
}
