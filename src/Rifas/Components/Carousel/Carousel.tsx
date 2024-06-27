import { CarouselContainer } from "./Carousel.styles";
import { ItemCarousel } from "./ItemCarousel/ItemCarousel";

export const Carousel = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image:
        "https://wpassets.halowaypoint.com/wp-content/2022/02/Halo-Infinite-Chief-Weapon-scaled.jpg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image:
        "https://sm.ign.com/ign_latam/news/h/halo-infin/halo-infinite-box-art-revealed_yjf2.jpg",
    },
  ];

  return (
    <CarouselContainer
      fullHeightHover={true}
      indicators={false}
      navButtonsAlwaysVisible
    >
      {items.map(({ image }, i) => (
        <ItemCarousel key={i} image={image} />
      ))}
    </CarouselContainer>
  );
};
