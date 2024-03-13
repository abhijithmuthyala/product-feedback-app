export default function UserProfile({ data }) {
  const { username, firstname, lastname } = data;
  const fullname = `${firstname} ${lastname}`;
  const avatarLabel = (firstname[0] + lastname[0]).toUpperCase();

  return (
    <div className="flex items-start gap-x-4">
      <Avatar label={avatarLabel} />
      <div className="flex flex-col text-sm">
        <p className="font-bold text-neutral-7">{fullname}</p>
        <p className="text-neutral-6">@{username}</p>
      </div>
    </div>
  );
}

function Avatar({ label }) {
  return (
    <div className="grid aspect-square w-10 place-content-center rounded-full bg-neutral-2 font-semibold text-neutral-6">
      {label}
    </div>
  );
}
