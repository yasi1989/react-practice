import { useCallback, useMemo, useState } from "react";

export const usePageNumber = () => {
  const [page, setPage] = useState<number>(1);

  const incrementPage = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  const decrementPage = useCallback(() => {
    setPage((p) => Math.max(p - 1, 1));
  }, []);

  return useMemo(
    () => ({
      page,
      incrementPage,
      decrementPage,
    }),
    [page, incrementPage, decrementPage]
  );
};
