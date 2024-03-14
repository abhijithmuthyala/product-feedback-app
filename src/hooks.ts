import { useEffect } from "react";

export function useUpdateQueryParamEffect(key, value) {
  useEffect(
    function updateQueryParam() {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set(key, value);
      history.pushState(
        null,
        "",
        location.pathname + "?" + searchParams.toString(),
      );
    },
    [key, value],
  );
}
