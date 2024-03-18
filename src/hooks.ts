import { useEffect } from "react";

export function useUpdateQueryParamEffect(key, value) {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    window.history.replaceState(null, "", newUrl);
  }, [key, value]);
}
