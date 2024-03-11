import HamburgerMenu from "./buttons/hamburger-menu";

export default async function Header() {
  return (
    <header className="relative flex items-center justify-between bg-hero-mobile bg-cover bg-center bg-no-repeat px-body-offset py-4">
      <h1 className="flex flex-col">
        <span className="font-bold tracking-tighter text-neutral-0">
          Frontend Mentor
        </span>
        <span className="text-sm font-medium text-neutral-2">
          Feedback Board
        </span>
      </h1>
      <HamburgerMenu></HamburgerMenu>
    </header>
  );
}
