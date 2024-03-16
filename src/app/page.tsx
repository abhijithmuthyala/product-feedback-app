import { getAuthStatus } from "@/supabase/server";
import MenuProvider from "./components/buttons/hamburger-menu";
import MenuButton from "./components/buttons/menu-button";
import SignOutButton from "./components/buttons/sign-out";
import Header from "./components/header";
import LoginLink from "./components/login-link";
import NewSuggestionLink from "./components/new-suggestion-link";
import RoadmapSummary from "./components/roadmap-summary";
import SortOptions from "./components/sort-options";
import SuggestionsFilters from "./components/suggestions-filters";
import Suggestions from "./components/suggestions/suggestions";

export default async function Home({ searchParams }) {
  const { category, sort } = searchParams;
  const isAuthenticated = await getAuthStatus();

  const menuItem = (
    <div className="absolute right-0 top-full z-20 col-span-2 grid place-content-start gap-2.5 max-md:min-h-screen max-md:bg-neutral-1 max-md:px-6 max-md:py-6 md:static md:grid-cols-2 lg:grid-cols-1">
      <div className="max-md:max-w-64">
        <SuggestionsFilters className="min-h-full" />
      </div>
      <div className="max-md:max-w-64">
        <RoadmapSummary />
      </div>
    </div>
  );
  const menuOverlay = (
    <div className="absolute left-0 right-0 top-full z-10 block min-h-screen bg-menu-overlay"></div>
  );

  return (
    <main className="max-w-content mx-auto grid lg:grid-cols-[16rem_1fr] lg:gap-x-8 lg:px-body-offset">
      <div className="relative grid md:grid-cols-3 md:gap-x-2.5 md:px-body-offset md:pb-10 md:pt-14 lg:col-start-1 lg:auto-rows-max lg:grid-cols-1 lg:gap-x-0 lg:gap-y-2.5 lg:px-0 lg:pt-24">
        <Header>
          <div className="md:hidden">
            <MenuProvider
              button={
                <MenuButton className="absolute right-6 top-1/2 -translate-y-1/2" />
              }
              content={
                <>
                  {menuItem}
                  {menuOverlay}
                </>
              }
            />
          </div>
          <div className="col-span-2 hidden md:block">{menuItem}</div>
        </Header>
      </div>
      <div className="lg:col-start-2 lg:pt-24">
        <div className="bg-neutral-8 px-body-offset md:bg-inherit lg:px-0">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-md py-2 text-sm text-neutral-1 md:bg-neutral-8 md:px-6 md:py-3.5">
            <SortOptions />
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <SignOutButton />
                <NewSuggestionLink />
              </div>
            ) : (
              <LoginLink />
            )}
          </div>
        </div>
        <div className="px-body-offset py-8 md:py-6 lg:px-0">
          <Suggestions category={category} sort={sort} />
        </div>
      </div>
    </main>
  );
}
