# Project Notes

## How are you fetching auth status?

Created a helper function `getAuthStatus()` which uses Supabase's API to fetch the authentication status.

### Server Components

Multiple server components anywhere in the tree, including `layout`s, can call `getAuthStatus()`. Next.js takes care of caching the result of this request, so that no more than one request is made to the server.

### Client Components

The root `layout` is a server component and it fetches the auth status using `getAuthStatus()` helper function. The result is then provided as a `prop` to a context provider - `AuthStatusProvider`, which wraps the `page`. Now all the client components in the tree can `useAuthContext()` to fetch the auth status!

## How are you handling loading states?

### Server Actions

Render the `button` triggering the `action` inside a `form`. Then use the `pending` state returned from the `useFormStatus()` hook from the client component that renders the `button`.

### Filters and sorting on lists

Append the selected filter and sort params to the `URLSearchParams` using `router.push()` or `router.replace()` as appropriate. If the list is wrapped in a `Suspense` boundary with a `fallback` specified, the `fallback` should render while the data for the list is being generated.

```js
<Suspense fallback={<LoadingSkeleton />} key={sort + category}>
  <FetchAndRenderList />
</Suspense>
```

NOTE:

The `Suspense` fallback is working only when it is provided with a unique `key` prop whenever the filter or sort param changes. I set the key as `key={sort + category}` which will be unique for a given combination of sort and filter params.

I don't see the `fallback` during the initial page load though. Couldn't figure out why.
