export default function CategoryTag({ category }) {
  return (
    <span className="rounded-md bg-neutral-1 px-4 py-1.5 font-semibold text-secondary">
      {category.replace(category[0], category[0].toUpperCase())}
    </span>
  );
}
