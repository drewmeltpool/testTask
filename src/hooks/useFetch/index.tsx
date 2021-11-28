import { useEffect, useState } from 'react';

const useFetch = (url: string, dependencies: Array<unknown>) => {
  const [payload, setPayload] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const answer = await fetch(url);
        const json = await answer.json();
        setPayload(json);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...dependencies]);

  return { error, payload, loading };
};

export default useFetch;
