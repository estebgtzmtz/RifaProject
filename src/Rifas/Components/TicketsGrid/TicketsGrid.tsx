import { Container, Grid } from "@mui/material";
import { ClosestTicketCard } from "../ClosestTicketCard/ClosestTicketCard";
import { TicketCard } from "../TicketCard/TicketCard";

export const TicketsGrid = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <ClosestTicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <ClosestTicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <ClosestTicketCard />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TicketCard />
        </Grid>
      </Grid>
    </Container>
  );
};
