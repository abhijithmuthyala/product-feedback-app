import { categories } from "@/constants";
import BackButton from "../components/buttons/back";
import CancelButton from "../components/buttons/cancel-edit";
import AddNewPostButton from "../components/buttons/new-post";

export default function NewSuggestionPage() {
  return (
    <main className="mx-auto max-w-edit-form px-6 pb-20 pt-8 md:pb-30 md:pt-14 lg:pb-32 lg:pt-24">
      <div className="">
        <BackButton />
      </div>
      <div className="relative mt-14 rounded-lg bg-neutral-0 px-6 pb-6 pt-11">
        <div className="absolute left-6 top-0 aspect-square w-8 -translate-y-1/2 bg-new bg-contain bg-center bg-no-repeat"></div>
        <section>
          <h1 className="mb-6 text-lg font-bold text-neutral-7">
            Create new feedback
          </h1>
          <form className="grid gap-y-6 text-sm text-neutral-7 md:text-base">
            <div className="grid gap-y-4">
              <h3 className="flex flex-col">
                <span className="font-bold text-neutral-7">Feedback title</span>
                <span className="text-neutral-6">
                  Add a short, descriptive title
                </span>
              </h3>
              <input
                type="text"
                name="title"
                id="title"
                required
                min={20}
                defaultValue={""}
                className="rounded-md bg-neutral-1 px-4 py-4"
              />
            </div>
            <div className="grid gap-y-4">
              <h3 className="flex flex-col">
                <span className="font-bold text-neutral-7">Category</span>
                <span className="text-neutral-6">
                  Choose a category for your feedback
                </span>
              </h3>
              <select
                name="category"
                id="category"
                defaultValue={categories[0]}
                required
                className="appearance-none rounded-md bg-neutral-1 bg-down-arrow bg-[length:.8rem_.4rem] bg-[center_right_1.5rem] bg-no-repeat px-4 py-4"
              >
                {categories.map(function renderCategory(name) {
                  return (
                    <option value={name} key={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grid gap-y-4">
              <h3 className="flex flex-col">
                <span className="font-bold text-neutral-7">
                  Feedback detail
                </span>
                <span className="text-neutral-6">
                  Include any specific comments on what should be improved,
                  added, etc.
                </span>
              </h3>
              <textarea
                name="description"
                id="desc"
                required
                defaultValue={""}
                className="min-h-30 rounded-md bg-neutral-1 px-4 py-4"
              ></textarea>
            </div>
            <div className="mt-10">
              <div className="mx-auto flex flex-col-reverse gap-4 max-sm:max-w-80 sm:flex-row sm:items-center">
                <CancelButton>Cancel</CancelButton>
                <AddNewPostButton />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
