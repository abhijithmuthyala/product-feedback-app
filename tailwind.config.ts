import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "var(--fs-sm)",
      base: "var(--fs-base)",
      lg: "var(--fs-lg)",
      xl: "var(--fs-xl)",
    },
    fontWeight: {
      regular: "var(--fw-regular)",
      medium: "var(--fw-medium)",
      semibold: "var(--fw-semibold)",
      bold: "var(--fw-bold)",
    },
    colors: {
      neutral: {
        0: "var(--neutral-0)",
        1: "var(--neutral-1)",
        2: "var(--neutral-2)",
        3: "var(--neutral-3)",
        4: "var(--neutral-4)",
        5: "var(--neutral-5)",
        6: "var(--neutral-6)",
        7: "var(--neutral-7)",
        8: "var(--neutral-8)",
      },
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      status: {
        planned: "var(--status-planned)",
        "in-progress": "var(--status-in-progress)",
        live: "var(--status-live)",
      },
      delete: "var(--delete-btn)",
      save: "var(--save-btn)",
      cancel: "var(--cancel-btn)",

      "menu-overlay": "var(--menu-overlay)",
      blue: {
        4: "var(--blue-4)",
        6: "var(--blue-6)",
      },
      teal: {
        6: "var(--teal-6)",
        9: "var(--teal-9)",
      },
      purple: {
        5: "var(--purple-5)",
        7: "var(--purple-7)",
        9: "var(--purple-9)",
      },
      orange: {
        7: "var(--orange-7)",
        8: "var(--orange-8)",
        9: "var(--orange-9)",
      },
      red: {
        8: "var(--red-8)",
        9: "var(--red-9)",
      },
      inherit: "inherit",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      spacing: {
        "body-offset": "var(--body-offset)",
        30: "7.5rem",
      },
      backgroundImage: {
        "hero-mobile":
          "url('/assets/suggestions/mobile/background-header.png')",
        "hero-desktop":
          "url('/assets/suggestions/desktop/background-header.png')",
        "hero-tablet":
          "url('/assets/suggestions/tablet/background-header.png')",
        empty: "url('/assets/suggestions/illustration-empty.svg')",
        edit: "url('/assets/shared/icon-edit-feedback.svg')",

        hamburger: "url('/assets/shared/mobile/icon-hamburger.svg')",
        close: "url('/assets/shared/mobile/icon-close.svg')",
        plus: "url('/assets/shared/icon-plus.svg')",
        "up-arrow": "url('/assets/shared/icon-arrow-up.svg')",
        "down-arrow": "url('/assets/shared/icon-arrow-down.svg')",
        "left-arrow": "url('/assets/shared/icon-arrow-left.svg')",
        comment: "url('/assets/shared/icon-comments.svg')",
      },
      maxWidth: {
        "empty-suggestions": "26rem",
        "edit-form": "33.75rem",
      },
      minHeight: {
        "empty-suggestions-tablet": "37.5rem",
        "empty-suggestions-mobile": "28.75rem",
        30: "7.5rem",
      },
    },
  },
};
export default config;
