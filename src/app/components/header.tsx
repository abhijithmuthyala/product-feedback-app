import HamburgerMenu from "./buttons/hamburger-menu";

export default async function Header() {
  return (
    <header className="flex items-center justify-between bg-hero-mobile bg-cover bg-center bg-no-repeat px-6 py-4 sm:bg-hero-tablet md:items-end md:rounded-lg md:bg-hero-desktop md:py-6 lg:pt-16">
      <h1 className="flex flex-col">
        <span className="font-bold tracking-tighter text-neutral-0 md:text-xl">
          Frontend Mentor
        </span>
        <span className="text-sm font-medium text-neutral-2 md:text-base">
          Feedback Board
        </span>
      </h1>
      <HamburgerMenu />
    </header>
  );
}
