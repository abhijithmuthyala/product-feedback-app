## How are you fetching auth status?

Created a helper function `getAuthStatus()` which uses Supabase's API to fetch the authentication status.

### Server Components

Multiple server components anywhere in the tree, including `layout`s, can call `getAuthStatus()`. Next.js takes care of caching the result of this request, so that no more than one request is made to the server.

### Client Components

The root `layout` is a server component and it fetches the auth status using `getAuthStatus()` helper function. The result is then provided as a `prop` to a context provider - `AuthStatusProvider`, which wraps the `page`. Now all the client components in the tree can `useAuthContext()` to fetch the auth status!
