import { FC } from "react";
import { ItemCarouselProps } from "./ItemCarousel.types";
import { ItemCarouselContainer } from "./ItemCarousel.styles";

export const ItemCarousel: FC<ItemCarouselProps> = ({ image }) => {
  return (
    <ItemCarouselContainer>
      <img src={image} alt="carousel" />
    </ItemCarouselContainer>
  );
};
