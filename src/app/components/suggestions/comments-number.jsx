export default function SuggestionCommentsNumber({ numComments }) {
  return (
    <p className="flex items-center gap-2 font-bold sm:text-base">
      <span className="h-3.5 w-4 bg-comment bg-cover bg-center bg-no-repeat"></span>
      {numComments}
    </p>
  );
}
