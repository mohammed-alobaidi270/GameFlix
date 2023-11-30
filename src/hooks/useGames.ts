import { useEffect, useState } from "react";
import api_client from "../services/api_client";
import { CanceledError } from "axios";
export interface Game {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  esrb_rating: EsrbRating;
  platforms: Platform[];
}
export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}
export interface Platform {
  platform: EsrbRating;
  released_at: string;
  requirements: Requirements;
}
export interface Requirements {
  minimum: string;
  recommended: string;
}
export interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    api_client
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
}

export default useGames;
