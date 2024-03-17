export default function UserProfile({ data }) {
  const { username, firstname, lastname } = data;
  const fullname = `${firstname} ${lastname}`;

  return (
    <div className="flex items-start gap-x-4 md:gap-x-8">
      <div className="flex flex-col text-sm">
        <p className="font-bold text-neutral-7">{fullname}</p>
        <p className="text-neutral-6">@{username}</p>
      </div>
    </div>
  );
}
