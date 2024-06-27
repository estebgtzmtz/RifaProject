import { Box, Typography } from "@mui/material";
import { TicketCardContent } from "./ClosestTicketCard.styles";

export const ClosestTicketCard = () => {
  return (
    <TicketCardContent>
      <Box
        sx={{
          backgroundColor: "#6333EB",
          padding: "1rem",
          borderRadius: "0.5rem 0 0 0.5rem",
          width: "80%",
          boxShadow: 1,
        }}
      >
        <Typography sx={{ color: "white" }}>ticket content</Typography>
        <Typography variant="h4" sx={{ color: "white" }}>
          ticket content
        </Typography>
        <Typography sx={{ color: "white" }} variant="body2">
          March 20, 2022 / 10:00 AM CST
        </Typography>
        <div className="name-container">
          <Typography>Esteban Gutierrez</Typography>
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: " 0 1rem 1rem 0",
          display: "flex",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Typography sx={{ writingMode: "vertical-lr" }}>#8369376</Typography>
        <Typography sx={{ writingMode: "vertical-lr" }}>ticket</Typography>
      </Box>
    </TicketCardContent>
  );
};
