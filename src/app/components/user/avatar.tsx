export default function Avatar({ firstname, lastname }) {
  const label = (firstname[0] + lastname[0]).toUpperCase();

  return (
    <div className="grid aspect-square w-10 place-content-center rounded-full bg-neutral-2 font-semibold text-neutral-6">
      {label}
    </div>
  );
}
