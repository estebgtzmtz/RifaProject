import { Carousel, TicketsGrid } from "../../Components";
import { RifasLayout } from "../../Layout/RifasLayout";

export const MainPage = () => {
  return (
    <RifasLayout>
      <Carousel />
      <TicketsGrid />
    </RifasLayout>
  );
};
