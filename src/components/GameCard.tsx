import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIIconList from "./PlatformIIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image_url";
import logo from '../assets/logo.webp'
interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>

     {game.background_image != null ? <Image src={getCroppedImageUrl(game.background_image)} /> :  <Image src={logo} /> }
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatformIIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
