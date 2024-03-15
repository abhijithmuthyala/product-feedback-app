"use client";

import { categories, postStates } from "@/constants";
import EditPostActions from "./actions";

export default function EditPostForm({ postData }) {
  return (
    <form className="grid gap-y-6 text-sm text-neutral-7 md:text-base">
      <div className="grid gap-y-4">
        <h3 className="flex flex-col">
          <span className="font-bold text-neutral-7">Feedback title</span>
          <span className="text-neutral-6">Add a short, descriptive title</span>
        </h3>
        <input
          type="text"
          name="title"
          id="title"
          required
          min={20}
          defaultValue={postData.title}
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
          defaultValue={postData.category}
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
          <span className="font-bold text-neutral-7">Update Status</span>
          <span className="text-neutral-6">Change feature state</span>
        </h3>
        <select
          name="status"
          id="status"
          defaultValue={postData.status}
          required
          className="appearance-none rounded-md bg-neutral-1 bg-down-arrow bg-[length:.8rem_.4rem] bg-[center_right_1.5rem] bg-no-repeat px-4 py-4"
        >
          {postStates.map(function renderStatus(name) {
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
          <span className="font-bold text-neutral-7">Feedback detail</span>
          <span className="text-neutral-6">
            Include any specific comments on what should be improved, added,
            etc.
          </span>
        </h3>
        <textarea
          name="description"
          id="desc"
          required
          defaultValue={postData.description}
          className="min-h-30 rounded-md bg-neutral-1 px-4 py-4"
        ></textarea>
      </div>
      <div className="mt-10">
        <EditPostActions postID={postData.id} />
      </div>
    </form>
  );
}
