import React, { useEffect, useState } from "react";
import api_client from "../services/api_client";
import { Text } from "@chakra-ui/react";

interface Game {
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
interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api_client
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((e) => {
        setError(e.message);
      });
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
