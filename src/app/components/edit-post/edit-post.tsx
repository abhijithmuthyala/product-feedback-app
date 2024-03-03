"use client";

import { categories, status } from "@/constants";

export default function EditPostForm({ actions, postData }) {
  return (
    <form>
      <label htmlFor="title">
        Update title
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={postData.title}
        />
      </label>
      <label htmlFor="desc">
        Update description
        <textarea
          name="description"
          id="desc"
          required
          defaultValue={postData.description}
        ></textarea>
      </label>
      <label htmlFor="category">
        Update category
        <select
          name="category"
          id="category"
          defaultValue={postData.category}
          required
        >
          {categories.map(function renderCategory(name) {
            return (
              <option value={name} key={name}>
                {name.toUpperCase()}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="status">
        Update status
        <select
          name="status"
          id="status"
          defaultValue={postData.status}
          required
        >
          {status.map(function renderStatus(name) {
            return (
              <option value={name} key={name}>
                {name.toUpperCase()}
              </option>
            );
          })}
        </select>
      </label>
      {actions}
    </form>
  );
}
