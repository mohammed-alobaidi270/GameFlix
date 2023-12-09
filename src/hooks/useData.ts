import { useEffect, useState } from "react";
import api_client from "../services/api_client";
import { CanceledError } from "axios";
export interface FetchResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

function useData<T>(endpoint:string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    api_client
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
}

export default useData;
