## Tech stack

- Next.js and React
  - App router
  - Server Actions
  - Revalidation
  - React server and client components

- Supabase
  - Auth
  - Database
  - Remote Procedure Calls (RPC)

- Tailwind CSS
- Figma

## Features

- Authentication and Authorization.
- Authenticated users can
  - upvote a feedback
  - edit their own feedback only
  - add a new feedback
  - comment on a feedback
- Unauthenticated users can view the content but cannot interact with the app.

## Routes

- `/?category={}&sort={}`
  - Renders a list of feedbacks.
  - Includes filters and sort. They are added to the URL as query parameters. Users can bookmark the URL with the params included.
- `/login`
  - Trying to acess protected routes without logging in, will redirect to this route.
- `/details/{id}`
  - Contains comments on the feedback.
- `/edit/{id}`
  - Protected route
  - Only an authenticated user who is also the author of that feedback post will be able to access this route. It will result in a `404` for other authenticated users.
- `/roadmap?status={}`
  - Renders a list of suggestions based on the selected `status` filter. The filter is added to the URL as query param and is bookmark-able.

## Dev and productivity tools

- Cody AI autocomplete for VSCode.
- ChatGPT for generating RPC functions in supabase.
- Polypane browser to match the original design.

## Code consistency and formatting

- Prettier
- Prettier plugin tailwind
- ES Lint
- Lint staged - To format the code before every commit
