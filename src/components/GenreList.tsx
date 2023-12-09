import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Skeleton,
  SkeletonText,
  CardBody,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image_url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error) {
    return null;
  }
  //   if (isLoading) {
  //     return (
  //       <List>
  //         {skeletons.map((skeleton) => (
  //           <ListItem key={skeleton} paddingY="5px">
  //             <HStack>
  //               <Skeleton boxSize="32px" borderRadius={8} />
  //               <SkeletonText fontSize="lg" />
  //             </HStack>
  //           </ListItem>
  //         ))}
  //       </List>
  //     );
  //   } else {
  return (
    <>
      {isLoading && (
        <List>
          {skeletons.map((skeleton) => (
            <ListItem key={"skeleton" + skeleton} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8} />
                  <SkeletonText fontSize="lg">
                  Massively Multiplayer
                  </SkeletonText>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
      {
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Text fontSize="lg">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List>
      }
    </>
  );
};
// };

export default GenreList;
