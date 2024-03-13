import FormFieldCard from "./form-input-card";

export default function TextArea({ placeholder = "", ...props }) {
  return (
    <FormFieldCard>
      <label htmlFor="comment" className="">
        <textarea
          name="comment"
          id="comment"
          placeholder={placeholder}
          className="min-h-20 w-full rounded-md bg-inherit text-base text-neutral-7 placeholder:text-sm placeholder:text-neutral-5"
          {...props}
        ></textarea>
      </label>
    </FormFieldCard>
  );
}
