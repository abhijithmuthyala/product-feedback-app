import { useEffect, useState } from "react";

export function useUpdateQueryParamEffect(key, value) {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    window.history.replaceState(null, "", newUrl);
  }, [key, value]);
}

export function useFormError() {
  const [error, setError] = useState(null);

  function handleError(error) {
    setError(error);
  }

  function clearError() {
    setError(null);
  }

  return { error, setError: handleError, clearError };
}
