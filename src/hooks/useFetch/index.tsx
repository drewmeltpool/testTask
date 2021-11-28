import { useEffect, useState } from 'react';

function useFetch<Payload = undefined>(
  url: string
): [data: Payload | null, load: boolean, error: unknown] {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => setData(d))
      .catch((e) => setErr(e))
      .finally(() => setDone(true));
  }, [url]);

  return [data, done, err];
}

export default useFetch;
